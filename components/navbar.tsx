"use client";
import { Button } from "@/components/ui/button";
import { useScrolled } from "@/hooks/use-scrolled";
import { INSTAGRAM_URL } from "@/lib/constants";
import { trackAndNavigate } from "@/lib/ga";
import { ChevronDown, Instagram, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Schedule", href: "#schedule" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled();

  // avoid hydration mismatch when user reloads mid-scroll
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const applyScrolled = mounted && scrolled;

  // JOIN NOW skewed button styled with shadcn/ui Button
  const JoinNow = () => (
    <Button
      asChild
      className={`transform skew-x-[-8deg] px-5 py-2 font-extrabold tracking-wide md:px-6 md:py-2
        ${
          applyScrolled
            ? "bg-neutral-900 text-white hover:bg-neutral-800"
            : "md:bg-sky-400 md:text-neutral-900 bg-neutral-900 text-white"
        }`}
    >
      <a href="#join">
        <span className="block skew-x-[8deg]">JOIN NOW</span>
      </a>
    </Button>
  );

  return (
    <nav
      role="navigation"
      className={`fixed inset-x-0 top-0 z-10 flex items-center justify-between px-10 text-black transition-all
          ${
            applyScrolled
              ? "bg-white text-neutral-900 shadow-xl shadow-black/5"
              : "md:bg-transparent md:text-white bg-white text-neutral-900"
          }`}
    >
      <div className="relative w-full mx-auto flex h-20 max-w-7xl items-center justify-start px-4 sm:px-6 lg:px-8">
        {/* Mobile Logo */}
        <a href="#home" className="flex items-center gap-3 md:hidden">
          <Image
            src="/cfcommunelg.png"
            alt="CrossFit Commune Logo"
            width={150}
            height={150}
          />
        </a>

        {/* Desktop Logo */}
        <a href="#home" className="hidden md:flex items-center gap-3">
          {scrolled ? (
            <Image
              src="/cfcommune.png"
              alt="CrossFit Commune Logo"
              width={60}
              height={60}
            />
          ) : (
            <Image
              src="/cfcommunetransparent.png"
              alt="CrossFit Commune Logo"
              width={120}
              height={120}
            />
          )}
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex ml-auto">
          {navItems.map((item) => {
            return (
              <a
                key={item.label}
                href={item.href}
                className="group relative text-sm font-extrabold uppercase tracking-wide transition-transform duration-150 hover:-translate-y-0.5"
              >
                <span className="inline-flex items-center gap-1">
                  {item.label}
                </span>
                <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-current transition-all duration-150 group-hover:w-full" />
              </a>
            );
          })}
        </div>

        {/* Mobile toggle */}

        <div className="md:hidden inline-flex items-center justify-center rounded-md ml-auto">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) =>
              trackAndNavigate(e, INSTAGRAM_URL, "instagram_click", {
                platform: "instagram",
                location: "navbar_mobile",
                link_url: INSTAGRAM_URL,
              })
            }
          >
            <Instagram className="h-6 w-6" />
          </a>

          <button
            type="button"
            aria-controls="mobile-drawer"
            aria-expanded={open}
            aria-label="Toggle menu"
            className="md:hidden inline-flex items-center justify-center rounded-md ml-5"
            onClick={() => setOpen((v) => !v)}
          >
            <div className="flex flex-col gap-1.5">
              <span className="block h-[2px] w-7 bg-current" />
              <span className="block h-[2px] w-7 bg-current" />
              <span className="block h-[2px] w-7 bg-current" />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile drawer (inside <nav>) */}
      <div
        id="mobile-drawer-overlay"
        className={`md:hidden fixed inset-0 z-50 transition ${
          open ? "visible bg-black/40" : "invisible bg-transparent"
        }`}
        onClick={() => setOpen(false)}
      >
        <div
          id="mobile-drawer"
          role="dialog"
          aria-modal="true"
          className={`ml-auto h-full w-[85%] max-w-sm bg-white text-neutral-900 shadow-2xl transition-transform ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-end px-6 py-5">
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="p-2"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex flex-col items-center gap-8 px-6 pb-16 pt-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-2xl font-extrabold tracking-wide uppercase"
              >
                <span className="inline-flex items-center gap-2">
                  {item.label}
                  {item.label.toLowerCase().includes("programs") && (
                    <ChevronDown className="h-6 w-6" />
                  )}
                </span>
              </a>
            ))}
            <JoinNow />
          </nav>
        </div>
      </div>
    </nav>
  );
}
