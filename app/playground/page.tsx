"use client";
import React from "react";
import { useState, useEffect } from "react";
import { Clock, Users, BadgeCheck, Menu, X } from "lucide-react";
import "./styles.css";
/**
 * Drop this file in your Next.js app as `app/page.tsx` (or use it as a component).
 * Tailwind required. Uses only built-in elements + lucide icons (no external UI deps).
 *
 * What you get:
 * - Sticky translucent navbar with mobile menu
 * - Hero section with full-bleed background, bold headline, CTA
 * - Slanted (diagonal) section separator using CSS clip-path
 * - First info section with three feature cards (24/7, Coaching, Any Level)
 */

const navItems = [
  { label: "Programs", href: "#programs" },
  { label: "Drop In", href: "#dropin" },
  { label: "Schedule", href: "#schedule" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
  { label: "Careers", href: "#careers" },
  { label: "Contact", href: "#contact" },
];

function classNames(...cls: (string | false | null | undefined)[]) {
  return cls.filter(Boolean).join(" ");
}

function useScrollShadow() {
  const [shadow, setShadow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShadow(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return shadow;
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrollShadow();

  return (
    <header
      className={classNames(
        "sticky top-0 z-50 w-full transition-shadow",
        scrolled ? "shadow-lg shadow-black/20" : "shadow-none"
      )}
    >
      <div className="relative mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-blue-600 ring-2 ring-white" />
          <span className="font-extrabold tracking-wider text-white drop-shadow">YOUR BOX</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-semibold text-white/90 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#join"
            className="rounded-full bg-white px-4 py-2 text-sm font-bold text-gray-900 transition hover:opacity-90"
          >
            Join Now
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-white md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>

        {/* Backdrop blur bar */}
        <div className="pointer-events-none absolute inset-0 -z-10 backdrop-blur-md" />
        <div className="pointer-events-none absolute inset-0 -z-20 bg-gradient-to-b from-black/70 to-black/20" />
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div className="border-t border-white/10 bg-black/80 px-4 pb-4 pt-2 md:hidden">
          <nav className="grid gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2 text-sm font-semibold text-white/90 hover:bg-white/5"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#join"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-white px-4 py-2 text-center text-sm font-bold text-gray-900"
            >
              Join Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative">
      {/* Background */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1517963628607-235ccdd5476e?q=80&w=2070&auto=format&fit=crop)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 -z-10 bg-black/60" />

      <div className="mx-auto grid min-h-[82vh] max-w-7xl place-items-center px-4 py-24 sm:px-6 lg:px-8">
        <div className="max-w-4xl text-left text-white">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-white/70">
            CrossFit Gym in Your City
          </p>
          <h1 className="leading-tight">
            <span className="block text-[clamp(2.5rem,6vw,6rem)] font-extrabold">
              HIGH FIVES & GOOD VIBES
            </span>
            <span className="block text-[clamp(2rem,5vw,4.75rem)] font-extrabold">
              WHERE FITNESS MEETS COMMUNITY
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-balance text-lg text-white/85">
            Lose weight, boost strength, and improve your overall physique with
            certified coaching and a supportive community.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#consult"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-extrabold text-gray-900 transition hover:opacity-90"
            >
              Book a Free Consultation
            </a>
            <a
              href="#workout"
              className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 text-sm font-bold text-white hover:bg-white/10"
            >
              Today’s Workout
            </a>
          </div>
        </div>
      </div>

      {/* Slanted separator (bottom of hero) */}
      {/* <div
        aria-hidden
        className="relative h-20 w-full overflow-hidden bg-transparent"
      >
        <div className="absolute inset-0 -translate-y-10 transform bg-white [clip-path:polygon(0_0,100%_100%,0_100%)]" />
      </div> */}
    </section>
  );
}

function FeatureCard({
  title,
  children,
  icon: Icon,
}: {
  title: string;
  children: React.ReactNode;
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <div className="grid place-items-start gap-3 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-950/[0.06]">
      <Icon className="h-8 w-8" />
      <h3 className="text-2xl font-extrabold tracking-tight">{title}</h3>
      <p className="text-gray-600">{children}</p>
    </div>
  );
}

function FirstInfoSection() {
  return (
    <section className="relative bg-white py-16 sm:py-20 three-items-section" id="pillars">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 container transform-default">
        <div className="grid gap-10 text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            What You Get at <span className="text-blue-700">YOUR BOX</span>
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard title="24/7 Member Access" icon={Clock}>
              Members receive 24/7 access to the facility.
            </FeatureCard>
            <FeatureCard title="Certified Coaching" icon={BadgeCheck}>
              Our professional and certified staff ensure safe, efficient
              movement during workouts.
            </FeatureCard>
            <FeatureCard title="Start at Any Level" icon={Users}>
              Whether you’re a gym rat or a beginner, you’ll feel comfortable
              here.
            </FeatureCard>
          </div>
        </div>
      </div>

      {/* Next slanted separator leading into dark section to be built later */}
      {/* <div aria-hidden className="relative h-20 w-full overflow-hidden">
        <div className="absolute inset-0 -translate-y-10 transform bg-neutral-950 [clip-path:polygon(100%_0,100%_100%,0_100%)]" />
      </div> */}
    </section>
  );
}

export default function Playground() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <Navbar />
      <Hero />
      <FirstInfoSection />
      {/* Placeholder for next dark section */}
      <section className="bg-neutral-950 py-16 text-center text-white/70">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm">Next section goes here… we’ll build it together.</p>
        </div>
      </section>
    </main>
  );
}
