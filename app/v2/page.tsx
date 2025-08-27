"use client";

import Image from "next/image";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import { BadgeCheck, CalendarDays, Clock, MapPin, Plus, Users, X } from "lucide-react";
import "./styles.css";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { displayLabel } from "@/lib/time";

function BenefitsSection() {
  return (
    <section
      id="pillars"
      className="relative overflow-hidden bg-white transform-gpu skew-y-2 -mt-10 md:-mt-14"
    >
      <div className="-skew-y-2 mx-auto max-w-7xl sm:px-6 md:py-28 lg:px-8">
        {/* container div */}
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 md:py-20">
          {/* three infos wrapper */}
          <div className="grid grid-cols-1 gap-12 text-center md:grid-cols-3">
            {/* first info */}
            <div>
              {/* svg icon */}
              <div className="mx-auto grid h-16 w-16 place-items-center rounded-full ring-2 ring-indigo-900/90">
                <Clock className="h-7 w-7 text-indigo-900" aria-hidden="true" />
              </div>
              {/* heading */}
              <div className="mt-8 text-3xl text-black font-extrabold uppercase leading-tight tracking-tight md:text-[2rem]">
                24/7 Member
                <br />
                Access
              </div>
              {/* benefit para */}
              <div className="mx-auto mt-3 max-w-xs text-gray-600">
                Members receive 24/7 access to the facility!
              </div>
            </div>

            {/* second info */}
            <div>
              <div className="mx-auto grid h-16 w-16 place-items-center rounded-full ring-2 ring-indigo-900/90">
                <BadgeCheck
                  className="h-7 w-7 text-indigo-900"
                  aria-hidden="true"
                />
              </div>
              <div className="mt-8 text-3xl text-black font-extrabold uppercase leading-tight tracking-tight md:text-[2rem]">
                Certified
                <br />
                Professional
                <br />
                Coaching
              </div>
              <div className="mx-auto mt-3 max-w-xs text-gray-600">
                Our professional and certified coaching staff will ensure you
                are safely and efficiently performing exercises during workouts.
              </div>
            </div>

            {/* third info */}
            <div>
              <div className="mx-auto grid h-16 w-16 place-items-center rounded-full ring-2 ring-indigo-900/90">
                <Users className="h-7 w-7 text-indigo-900" aria-hidden="true" />
              </div>
              <div className="mt-8 text-3xl text-black font-extrabold uppercase leading-tight tracking-tight md:text-[2rem]">
                Start at Any
                <br />
                Fitness Level
              </div>
              <div className="mx-auto mt-3 max-w-xs text-gray-600">
                Whether a gym rat or a beginner, anyone will feel comfortable at
                our gym.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CommunityLocationSection() {
  return (
    <section className="relative overflow-hidden bg-neutral-950 text-white transform-gpu skew-y-2">
      <div className="-skew-y-2">
        {/* Community row */}
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-24 sm:px-6 md:grid-cols-2 md:py-28 lg:px-8">
          {/* Left image */}
          <div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-white/10">
              <Image
                src="/cfcheer.png"
                width={500}
                height={500}
                alt="Community Image"
                className="object-cover w-full h-full static"
              />
            </div>
          </div>
          {/* Right copy with vertical divider */}
          <div>
            <h2 className="text-3xl font-extrabold uppercase leading-tight sm:text-4xl">
              A Community That Will Keep
              <br /> You Going
            </h2>
            <div className="mt-8 flex">
              <div
                className="ml-2 w-1 shrink-0 rounded bg-white/70"
                aria-hidden="true"
              />
              <div className="pl-8 text-white/85">
                <p className="max-w-xl">
                  We know how frustrating it can be to not get the results you
                  want. No worries! We’ll be here every step of the way.
                </p>
                <p className="mt-6 max-w-xl">
                  Our trainers are passionate and knowledgeable, helping you
                  know what to do, keeping you on track. They celebrate with you
                  every time you reach the next level!
                </p>
                <p className="mt-6 max-w-xl">
                  We strive to help every person find a higher quality of life
                  through greater health.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Location & Map */}
        <div className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 md:pb-28 lg:px-8">
          <h2 className="text-3xl font-extrabold uppercase leading-tight sm:text-4xl">
            Located in the Heart of Hyderabad <br className="hidden sm:block" />{" "}
            India
          </h2>

          <div className="relative mt-10 overflow-hidden rounded-2xl ring-1 ring-white/10">
            <div className="relative aspect-[16/9] bg-black/20">
              <iframe
                title="Gym Location Map"
                aria-label="Gym Location Map"
                className="absolute inset-0 h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.6397184024718!2d78.32930357616256!3d17.429069383465173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb931ae91d331b%3A0xb145593efcedc6bc!2sCrossFit%20Commune!5e0!3m2!1sen!2sin!4v1756298299319!5m2!1sen!2sin"
              />
            </div>

            {/* Address card overlay */}
            <div
              className="absolute right-6 top-6 w-[min(90%,26rem)] rounded-xl bg-white p-6 text-neutral-900 shadow-xl
              sm:right-6 sm:top-6
              max-sm:right-2 max-sm:top-2 max-sm:p-3 max-sm:w-[90vw] max-sm:rounded-lg max-sm:text-sm max-sm:shadow-lg"
            >
              <div className="flex items-start gap-3 max-sm:gap-2">
                <MapPin className="mt-1 h-5 w-5 max-sm:h-4 max-sm:w-4" />
                <div>
                  <h3 className="font-extrabold uppercase leading-snug">
                    1st floor plot #108, TNGO colony,
                    <br className="max-sm:hidden" /> Gachibowli, Hyderabad
                    500032
                  </h3>
                </div>
              </div>
              <a
                href="https://www.google.com/maps/place/CrossFit+Commune/@17.4290694,78.3293036,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcb931ae91d331b:0xb145593efcedc6bc!8m2!3d17.4290694!4d78.3318785!16s%2Fg%2F11xrzlynjd?entry=ttu&g_ep=EgoyMDI1MDgyNC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block transform skew-x-[-8deg] bg-white/95 px-5 py-2 font-extrabold text-neutral-900 ring-1 ring-neutral-900 hover:bg-white
                  max-sm:mt-3 max-sm:px-3 max-sm:py-1.5 max-sm:text-xs"
              >
                <span className="block skew-x-[8deg]">GET DIRECTIONS</span>
              </a>
            </div>
          </div>

          <p className="mx-auto mt-8 max-w-3xl text-center text-white/80">
            Working out at the gym isn’t easy. But getting there shouldn’t be
            hard. Our box is located and easily accessible from all of
            Hyderabad.
          </p>
        </div>
      </div>
    </section>
  );
}

function GettingStartedSection() {
  return (
    <section className="relative overflow-hidden bg-white text-neutral-900 transform-gpu skew-y-2">
      <div className="-skew-y-2">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 md:py-28 lg:px-8">
          <h2 className="text-center text-3xl font-extrabold uppercase tracking-tight sm:text-5xl">
            Getting Started Is Easy
          </h2>

          <div className="mt-16 grid grid-cols-1 gap-14 md:grid-cols-3">
            {/* Step 1 */}
            <div>
              <div className="text-7xl font-light leading-none text-indigo-900 sm:text-8xl">
                1
              </div>
              <h3 className="mt-6 text-2xl font-extrabold uppercase leading-snug">
                Book a 15–Minute
                <br /> Consultation
              </h3>
              <p className="mt-4 max-w-prose text-neutral-700">
                Schedule a free 15‑minute phone consult with one of our coaches.
                We’ll talk about your goals, training history, and what success
                looks like for you.
              </p>
              <a
                href="#consult"
                className="mt-6 inline-block font-extrabold underline decoration-2 underline-offset-4"
              >
                BOOK CALL HERE
              </a>
            </div>

            {/* Step 2 */}
            <div>
              <div className="text-7xl font-light leading-none text-indigo-900 sm:text-8xl">
                2
              </div>
              <h3 className="mt-6 text-2xl font-extrabold uppercase leading-snug">
                Start 7‑Day
                <br /> Test Drive
              </h3>
              <p className="mt-4 max-w-prose text-neutral-700">
                After the call, we’ll activate your 7‑Day Test Drive and help
                you schedule your first classes so you can experience the vibe
                and coaching.
              </p>
            </div>

            {/* Step 3 */}
            <div>
              <div className="text-7xl font-light leading-none text-indigo-900 sm:text-8xl">
                3
              </div>
              <h3 className="mt-6 text-2xl font-extrabold uppercase leading-snug">
                Membership
                <br /> Sign‑Up
              </h3>
              <p className="mt-4 max-w-prose text-neutral-700">
                Once your Test Drive wraps, a coach will follow up to discuss
                options and get you set up with the plan that fits your goals
                and schedule.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TimingsSection() {
  const [todayName, setTodayName] = useState<string | null>(null);
  useEffect(() => {
    try {
      setTodayName(
        new Date().toLocaleDateString(undefined, { weekday: "long" })
      );
    } catch {
      setTodayName(null);
    }
  }, []);

  const SCHEDULE: { day: string; slots: string[] }[] = [
    {
      day: "Monday",
      slots: [
        "6:30 AM",
        "7:30 AM",
        "8:30 AM",
        "9:30 AM",
        "5:00 PM",
        "6:00 PM",
        "7:00 PM",
      ],
    },
    {
      day: "Tuesday",
      slots: [
        "6:30 AM",
        "7:30 AM",
        "8:30 AM",
        "9:30 AM",
        "5:00 PM",
        "6:00 PM",
        "7:00 PM",
      ],
    },
    {
      day: "Wednesday",
      slots: [
        "6:30 AM",
        "7:30 AM",
        "8:30 AM",
        "9:30 AM",
        "5:00 PM",
        "6:00 PM",
        "7:00 PM",
      ],
    },
    {
      day: "Thursday",
      slots: [
        "6:30 AM",
        "7:30 AM",
        "8:30 AM",
        "9:30 AM",
        "5:00 PM",
        "6:00 PM",
        "7:00 PM",
      ],
    },
    {
      day: "Friday",
      slots: [
        "6:30 AM",
        "7:30 AM",
        "8:30 AM",
        "9:30 AM",
        "5:00 PM",
        "6:00 PM",
        "7:00 PM",
      ],
    },
    { day: "Saturday", slots: ["7:30 AM", "8:30 AM"] },
  ];

  return (
    <section
      id="schedule"
      className="relative overflow-hidden bg-neutral-950 text-white transform-gpu skew-y-2"
    >
      <div className="-skew-y-2">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 md:py-28 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h2 className="text-3xl font-extrabold uppercase leading-tight sm:text-4xl">
              Class Timings
            </h2>
            <div className="hidden items-center gap-2 text-white/70 md:flex">
              <CalendarDays className="h-5 w-5" />
              <span>Weekly Schedule</span>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {SCHEDULE.map((d) => {
              const isToday = todayName === d.day;
              return (
                <div
                  key={d.day}
                  className={`rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm ${
                    isToday ? "ring-2 ring-sky-400" : ""
                  }`}
                >
                  <div className="mb-3 flex items-center justify-between">
                    <h3 className="text-lg font-extrabold uppercase">
                      {d.day}
                    </h3>
                    {isToday && (
                      <span className="rounded-full bg-sky-400/20 px-2.5 py-1 text-xs font-bold text-sky-300">
                        Today
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {d.slots.map((t) => (
                      <span
                        key={`${d.day}-${t}`}
                        className="rounded-full bg-white/10 px-3 py-1 text-sm"
                      >
                        {displayLabel(t)}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 text-white/80">
            <p>Open Gym: Mon–Sat 10:00 AM–5:00 PM</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  const plans: {
    key: string;
    name: string;
    months: number;
    price: number;
    desc: string;
    badge?: string;
    href: string;
    ctaLabel: string;
  }[] = [
    {
      key: "dropin",
      name: "Drop‑In",
      months: 0,
      price: 700,
      desc: "Visiting athlete pass.",
      href: "#dropin",
      ctaLabel: "Book Drop‑In",
    },
    {
      key: "1m",
      name: "1 Month",
      months: 1,
      price: 10000,
      desc: "Unlimited classes + Open Gym.",
      href: "#join",
      ctaLabel: "Join for 1 Month",
    },
    {
      key: "3m",
      name: "3 Months",
      months: 3,
      price: 25000,
      desc: "Save vs paying monthly.",
      badge: "Popular",
      href: "#join",
      ctaLabel: "Join 3 Months",
    },
    {
      key: "6m",
      name: "6 Months",
      months: 6,
      price: 45000,
      desc: "Even better rate.",
      href: "#join",
      ctaLabel: "Join 6 Months",
    },
    {
      key: "12m",
      name: "12 Months",
      months: 12,
      price: 78000,
      desc: "Best value for committed athletes.",
      badge: "Best Value",
      href: "#join",
      ctaLabel: "Join 12 Months",
    },
  ];
  const formatINR = (n: number) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(n);
  const perMonth = (total: number, months: number) =>
    months > 0 ? `≈ ${formatINR(Math.round(total / months))}/mo` : "";

  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-white text-neutral-900 transform-gpu skew-y-2"
    >
      <div className="-skew-y-2">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 md:py-28 lg:px-8">
          <h2 className="text-center text-3xl font-extrabold uppercase tracking-tight sm:text-5xl">
            Pricing Plans
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-neutral-600">
            Prices in INR. No hidden fees. Taxes extra where applicable.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {plans.map((plan) => {
              const highlight = plan.key === "12m" || plan.key === "3m";
              return (
                <div
                  key={plan.key}
                  className={`${
                    highlight
                      ? "border-neutral-900 shadow-xl ring-2 ring-neutral-900"
                      : "border-neutral-200"
                  } rounded-2xl border bg-white p-6`}
                >
                  {plan.badge && (
                    <div className="mb-3 inline-flex rounded-full bg-neutral-900 px-3 py-1 text-xs font-bold text-white">
                      {plan.badge}
                    </div>
                  )}
                  <h3 className="text-lg font-extrabold uppercase">
                    {plan.name}
                  </h3>
                  <div className="mt-3 flex items-end gap-2">
                    <span className="text-4xl font-black">
                      {formatINR(plan.price)}
                    </span>
                    <span className="text-sm text-neutral-600">
                      {plan.months > 0 ? "total" : "per visit"}
                    </span>
                  </div>
                  {plan.months > 0 && (
                    <div className="mt-1 text-sm text-neutral-600">
                      {perMonth(plan.price, plan.months)}
                    </div>
                  )}
                  <p className="mt-4 text-sm text-neutral-700">{plan.desc}</p>
                  <ul className="mt-4 space-y-2 text-sm text-neutral-700">
                    <li>• Unlimited classes</li>
                    <li>• Open Gym access</li>
                    <li>• Coach-led training</li>
                  </ul>
                </div>
              );
            })}
          </div>

          <p className="mt-6 text-center text-xs text-neutral-500">
            Drop‑in valid for one visit. Memberships billed upfront; transfers
            and freezes per policy.
          </p>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const faqs: { q: string; a: string }[] = [
    {
      q: "How do I sign up for a free consultation?",
      a: "Schedule your free consultation with us by filling out the contact form with all of your details, and we will contact you about getting started.",
    },
    {
      q: "How long does it take to see results?",
      a: "Results take time, but if you’re consistent, they will come. If you are a beginner, results will come fairly quickly; even in only 30 days, you may start to see a difference in your strength and overall fitness.",
    },
    {
      q: "Do I get the chance to meet new friends?",
      a: "Yes. We like to organize our fitness classes into small groups, as this allows you to meet others.",
    },
    {
      q: "What sets you apart from other gyms?",
      a: "We are a community of people that share the same fitness journey as you. We are here to build each other up - if you win, we all win."
    },
    {
        q: "How often do you recommend coming to workout classes?",
        a: "If you are a beginner, we recommend starting with 2 to 4 classes a week, with the goal of working up to 5 a week after your first few months. It may take a while for your body to get used to training at that intensity, so listen to your body and know you will need recovery time between training days."
    },
    {
      q: "Do you provide free refreshments there?",
      a: "We have filtered water on site and freshly brewed coffee from our coffee machine", 
    },
    {
      q: "Do I have to be fit to join?",
      a: "No! No matter what your current fitness level is, we have the fitness program that is right for you. Every workout is designed to help you succeed, improve fitness, and move you toward your goals. Our program is designed for universal scalability, making it the perfect application for any committed individual regardless of experience."
    },
    {
      q: "What payment methods do you accept?",
      a: "UPI, major credit/debit cards, and bank transfer for memberships. Drop‑ins can pay online or at the desk.",
    },
    {
      q: "What kind of exercises can I expect during a workout?",
      a: "Our class programming will include a strength portion in which you’ll work on something like Olympic weightlifting, deadlifting, squatting, or bodyweight strength or you may work on a skill like handstand push-ups. After the strength or skill portion of the class is complete, most days will involve a workout that was programmed for that specific day. Workouts can be anywhere between 5 to 20 minutes or more.",
    },
    {
      q: "Do I have to stop eating my favorite foods to be healthy?",
      a: "No! A healthy lifestyle has to be manageable and realistic for the long term. Do enjoy special indulgences and meals! The healthier you are, the healthier you tend to want to eat. You get hooked on feeling good, and junk food just isn’t worth it. By avoiding excessive amounts of refined carbohydrates and measuring your intake of protein, carbohydrates, and fat, you will see dramatic, measurable increases in health.",
    },
  ];

  const [open, setOpen] = useState<Record<number, boolean>>({});
  const toggle = (i: number) =>
    setOpen((p) => {
      // If already open, close it (so all will be closed)
      if (p[i]) return {};
      // Otherwise, open only this one
      return { [i]: true };
    });

  return (
    <section className="relative overflow-hidden bg-neutral-950 text-white transform-gpu skew-y-2">
      <div className="-skew-y-2">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 md:py-28 lg:px-8">
          <h2 className="text-center text-3xl font-extrabold uppercase tracking-tight sm:text-5xl">
            Questions? <br className="hidden sm:block" /> We have the answers!
          </h2>

          <p className="mt-6 text-center text-white/80">
            Still curious? Talk to us!
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
            <a
              href="tel:+918121145533"
              className="inline-block transform skew-x-[-8deg] bg-white px-6 py-2 font-extrabold text-neutral-900"
            >
              <span className="block skew-x-[8deg]">+91 8121145533</span>
            </a>
            <a
              href="#contact"
              className="inline-block transform skew-x-[-8deg] bg-white px-6 py-2 font-extrabold text-neutral-900"
            >
              <span className="block skew-x-[8deg]">Contact Us</span>
            </a>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-2">
            {faqs.map((f, i) => {
              const isOpen = !!open[i];
              return (
                <div key={i} className="border-b border-white/20 pb-6">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-${i}`}
                    onClick={() => toggle(i)}
                    className="flex w-full items-start justify-between gap-4 text-left"
                  >
                    <h3 className="text-xl font-extrabold leading-snug sm:text-2xl">
                      {f.q}
                    </h3>
                    {isOpen ? (
                      <X className="mt-1 h-6 w-6 flex-none" />
                    ) : (
                      <Plus className="mt-1 h-6 w-6 flex-none" />
                    )}
                  </button>
                  {/* Collapsible body with smooth height transition */}
                  <div
                    id={`faq-${i}`}
                    role="region"
                    className={`overflow-hidden transition-[grid-template-rows,opacity] duration-300 ${
                      isOpen
                        ? "grid grid-rows-[1fr] opacity-100"
                        : "grid grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="min-h-0">
                      <p className="mt-4 text-white text-lg">{f.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function NewLandingPage() {
  return (
    <main className="min-h-screen text-white">
      <Navbar />
      <Hero />
      <BenefitsSection />
      <CommunityLocationSection />
      <GettingStartedSection />
      <TimingsSection />
      <PricingSection />
      <FAQSection />
      {/* Placeholder for next dark section */}
      <section className="skew-y-2 bg-neutral-950 py-16 text-center text-white/70">
        <div className="-skew-y-2 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm">
            Next section goes here… we’ll build it together.
          </p>
        </div>
      </section>
    </main>
  );
}
