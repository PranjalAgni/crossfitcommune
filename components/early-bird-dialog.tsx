"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { EARLY, STANDARD } from "@/lib/constants";
import { inr } from "@/lib/currency";
import { track } from "@/lib/ga";
import { createContext, useEffect, useMemo, useState } from "react";

// ...dialog code you have...
export const EarlyCtx = createContext<{
  open: boolean;
  setOpen: (v: boolean) => void;
  show: () => void;
} | null>(null);

export function EarlyBirdDialogProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  // Auto-open once per day (force with ?early=1)
  useEffect(() => {
    const key = "eb_popup_seen_at";
    const TTL = 24 * 60 * 60 * 1000; // 1 day
    const query =
      typeof window !== "undefined"
        ? new URLSearchParams(window.location.search)
        : null;
    const force = query?.get("early") === "1";

    try {
      const last = Number(localStorage.getItem(key) || 0);
      const expired = Date.now() - last > TTL;
      if (force || expired) {
        const t = setTimeout(() => setOpen(true), 900);
        return () => clearTimeout(t);
      }
    } catch {
      setOpen(true);
    }
  }, []);

  // Mark as seen when opened
  useEffect(() => {
    if (open) {
      try {
        localStorage.setItem("eb_popup_seen_at", String(Date.now()));
      } catch {}
    }
  }, [open]);

  const value = useMemo(
    () => ({ open, setOpen, show: () => setOpen(true) }),
    [open]
  );

  return (
    <EarlyCtx.Provider value={value}>
      {children}

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="border-0 bg-neutral-950 text-white sm:max-w-2xl md:max-w-3xl max-h-[90vh] flex flex-col">
          <DialogHeader className="flex-shrink-0">
            <DialogTitle className="text-2xl sm:text-3xl">
              Early Bird Offer
            </DialogTitle>
            <DialogDescription className="text-neutral-300">
              <span className="font-semibold text-white">
                For the first 25 members only.
              </span>{" "}
              One-time promotional rate applies to your first membership term.{" "}
              <span className="font-medium">
                From the next membership onwards, standard pricing applies.
              </span>
            </DialogDescription>
          </DialogHeader>

          {/* Scrollable content wrapper */}
          <div className="flex-1 overflow-y-auto space-y-6 pr-1 min-h-0">
            {/* Standard Pricing */}
            <section>
              <h3 className="mb-3 text-lg font-bold uppercase tracking-wide text-white/90">
                Standard Pricing
              </h3>
              <div className="overflow-hidden rounded-xl ring-1 ring-white/10">
                <table className="w-full table-fixed border-separate bg-neutral-900/40 text-left">
                  <thead className="bg-white/5 text-white/80">
                    <tr>
                      <th className="p-3 w-1/2">Plan</th>
                      <th className="p-3">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {STANDARD.map((row) => (
                      <tr key={row.plan} className="border-t border-white/10">
                        <td className="p-3">{row.plan}</td>
                        <td className="p-3">₹{inr(row.price)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Early Bird Pricing */}
            <section>
              <div className="mb-2 inline-flex items-center rounded bg-red-600/90 px-2.5 py-0.5 text-xs font-bold uppercase tracking-wide text-white">
                Early Bird
              </div>
              <h3 className="mb-3 text-lg font-bold uppercase tracking-wide text-white/90">
                Founding 25 Special Pricing
              </h3>
              <div className="overflow-hidden rounded-xl ring-1 ring-white/10">
                <table className="w-full table-fixed border-separate bg-neutral-900/40 text-left">
                  <thead className="bg-white/5 text-white/80">
                    <tr>
                      <th className="p-3 w-[40%]">Plan</th>
                      <th className="p-3 w-[30%]">You Pay</th>
                      <th className="p-3 w-[30%]">You Save</th>
                    </tr>
                  </thead>
                  <tbody>
                    {EARLY.map((row) => (
                      <tr key={row.plan} className="border-t border-white/10">
                        <td className="p-3">{row.plan}</td>
                        <td className="p-3 font-semibold text-white">
                          ₹{inr(row.price)}
                        </td>
                        <td className="p-3 text-emerald-400">
                          ₹{inr(row.save)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-xs text-neutral-400">
                * Early Bird pricing applies once, to your first membership term
                only. Subsequent renewals are billed at the standard prices
                listed above.
              </p>
            </section>
          </div>

          {/* Actions */}
          <div className="flex-shrink-0 mt-6 flex flex-wrap gap-3">
            <Button
              asChild
              onClick={() => {
                track("early_bird_join_now", {
                  campaign: "early_bird",
                });
                setOpen(false);
              }}
              className="rounded-full bg-white text-neutral-900 hover:bg-white/90"
            >
              <a href="#contact">Join Now</a>
            </Button>
            <Button
              variant="secondary"
              className="rounded-full border border-white/20 bg-transparent text-white hover:bg-white/10"
              onClick={() => {
                track("early_bird_maybe_later", {
                  campaign: "early_bird",
                });
                setOpen(false);
              }}
            >
              Maybe Later
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </EarlyCtx.Provider>
  );
}
