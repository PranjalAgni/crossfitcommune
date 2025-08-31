"use client";

import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import Whatsapp from "@/components/whatsapp";
import { INSTAGRAM_URL, PHONE, WHATSAPP_URL } from "@/lib/constants";
import { track, trackAndNavigate } from "@/lib/ga";
import { displayLabel } from "@/lib/time";
import {
  BadgeCheck,
  CalendarDays,
  Clock,
  Instagram,
  MapPin,
  MessageCircle,
  Plus,
  Users,
  X
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

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
                Open Gym Member
                <br />
                Access
              </div>
              {/* benefit para */}
              <div className="mx-auto mt-3 max-w-xs text-gray-600">
                Our Open Gym allows members to access our training area for
                personal workouts and basic equipment for free during Open Gym
                hours.
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
              max-sm:right-2 max-sm:top-2 max-sm:p-3 max-sm:w-[90vw] max-sm:rounded-lg max-sm:text-sm max-sm:shadow-lg max-sm:hidden"
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

          <div className="mt-16 grid grid-cols-1 gap-14 md:grid-cols-3 text-center">
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
                href="#contact"
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
                START YOUR 1-DAY TRIAL
                <br /> Test Drive
              </h3>
              <p className="mt-4 max-w-prose text-neutral-700">
                Join your first class, experience the coaching and community,
                and let us assess your starting point.
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
                After your trial, a coach will walk you through the best
                membership option based on your goals and schedule, and get you
                started on your training journey.
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
        "5:30 PM",
        "6:30 PM",
        "7:30 PM",
      ],
    },
    {
      day: "Tuesday",
      slots: [
        "6:30 AM",
        "7:30 AM",
        "8:30 AM",
        "5:30 PM",
        "6:30 PM",
        "7:30 PM",
      ],
    },
    {
      day: "Wednesday",
      slots: [
        "6:30 AM",
        "7:30 AM",
        "8:30 AM",
        "5:30 PM",
        "6:30 PM",
        "7:30 PM",
      ],
    },
    {
      day: "Thursday",
      slots: [
        "6:30 AM",
        "7:30 AM",
        "8:30 AM",
        "5:30 PM",
        "6:30 PM",
        "7:30 PM",
      ],
    },
    {
      day: "Friday",
      slots: [
        "6:30 AM",
        "7:30 AM",
        "8:30 AM",
        "5:30 PM",
        "6:30 PM",
        "7:30 PM",
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
      a: "We are a community of people that share the same fitness journey as you. We are here to build each other up - if you win, we all win.",
    },
    {
      q: "How often do you recommend coming to workout classes?",
      a: "If you are a beginner, we recommend starting with 2 to 4 classes a week, with the goal of working up to 5 a week after your first few months. It may take a while for your body to get used to training at that intensity, so listen to your body and know you will need recovery time between training days.",
    },
    {
      q: "Do you provide free refreshments there?",
      a: "We have filtered water on site and freshly brewed coffee from our coffee machine",
    },
    {
      q: "Do I have to be fit to join?",
      a: "No! No matter what your current fitness level is, we have the fitness program that is right for you. Every workout is designed to help you succeed, improve fitness, and move you toward your goals. Our program is designed for universal scalability, making it the perfect application for any committed individual regardless of experience.",
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
    <section
      id="faq"
      className="relative overflow-hidden bg-neutral-950 text-white transform-gpu skew-y-2"
    >
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
              href={`tel:+${PHONE}`}
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

function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<{
    name?: string;
    phone?: string;
    email?: string;
  }>({});
  const [sent, setSent] = useState(false);

  // --- Indian phone validator ---
  // Accepts: 9876543210, 09876543210, +91 98765 43210, +919876543210 (with spaces/hyphens)
  const isValidIndianPhone = (raw: string) => {
    let val = raw.trim();

    // Quick reject: letters (or anything not digit/space/hyphen/+)
    if (/[^0-9+\s-]/.test(val)) return false;

    // Normalise
    val = val.replace(/[\s-]/g, ""); // remove spaces & hyphens
    if (val.startsWith("+")) val = val.slice(1);
    if (val.startsWith("91")) val = val.slice(2);
    if (val.startsWith("0") && val.length === 11) val = val.slice(1);

    // Must be 10 digits starting 6-9
    return /^[6-9]\d{9}$/.test(val);
  };

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));

    // Live feedback for phone
    if (name === "phone") {
      if (value.length === 0) {
        setErrors((er) => ({ ...er, phone: undefined }));
      } else if (/[^0-9+\s-]/.test(value)) {
        setErrors((er) => ({
          ...er,
          phone: "Only digits, spaces, hyphens and + are allowed.",
        }));
      } else if (!isValidIndianPhone(value)) {
        setErrors((er) => ({
          ...er,
          phone:
            "Enter a valid Indian phone number (e.g., 9876543210 or +91 98765 43210).",
        }));
      } else {
        setErrors((er) => ({ ...er, phone: undefined }));
      }
    }
  };

  const validate = () => {
    const next: { name?: string; phone?: string; email?: string } = {};
    if (!form.name.trim()) next.name = "Name is required";
    if (!form.phone.trim()) next.phone = "Phone is required";
    if (form.phone.trim() && !isValidIndianPhone(form.phone)) {
      next.phone =
        "Enter a valid Indian phone number (e.g., 9876543210 or +91 98765 43210).";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
      .then(() => {
        track("contact_form_submit", {
          form_data: {
            name: form.name,
            email: form.email,
            phone: form.phone,
            message: form.message,
          },
        });
      })
      .catch((error) => {
        track("contact_form_submit_error", {
          form_data: {
            name: form.name,
            email: form.email,
            phone: form.phone,
            message: form.message,
          },
          error,
        });
      })
      .finally(() => {
        setForm({ name: "", phone: "", email: "", message: "" });
        setErrors({});
        setSent(true);
        setTimeout(() => setSent(false), 3500);
      });
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-white text-neutral-900 transform-gpu skew-y-2"
    >
      <div className="-skew-y-2">
        <div className="mx-auto max-w-3xl px-4 py-24 sm:px-6 md:py-28 lg:px-8">
          <h2 className="text-center text-3xl font-extrabold uppercase tracking-tight sm:text-5xl">
            Contact Us
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-neutral-600">
            Questions, drop-ins, or memberships—send us a message and we’ll get
            back soon.
          </p>

          <form onSubmit={onSubmit} className="mt-10 grid grid-cols-1 gap-5">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-bold uppercase tracking-wide"
              >
                Name *
              </label>
              <input
                id="name"
                name="name"
                value={form.name}
                onChange={onChange}
                required
                className="block w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 shadow-sm placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900"
                placeholder="Your full name"
                aria-invalid={!!errors.name}
              />
              {errors.name && (
                <p className="mt-2 text-sm text-red-600">{errors.name}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="phone"
                className="mb-2 block text-sm font-bold uppercase tracking-wide"
              >
                Phone *
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                inputMode="tel"
                pattern="^(?:(?:\+?91[-\s]?)|0)?[6-9]\d{9}$"
                value={form.phone}
                onChange={onChange}
                required
                className="block w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 shadow-sm placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900"
                placeholder="Your phone number"
                aria-invalid={!!errors.phone}
                aria-describedby="phone-help"
              />
              {errors.phone && (
                <p id="phone-help" className="mt-2 text-sm text-red-600">
                  {errors.phone}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-bold uppercase tracking-wide"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={onChange}
                className="block w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 shadow-sm placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900"
                placeholder="Optional"
                aria-invalid={!!errors.email}
              />
              {errors.email && (
                <p className="mt-2 text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-bold uppercase tracking-wide"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={onChange}
                className="block w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 shadow-sm placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900"
                placeholder="Tell us a bit about your goals"
              />
            </div>

            <div className="mt-2">
              <Button
                type="submit"
                className="rounded-full bg-neutral-900 px-6 py-6 text-white hover:bg-neutral-800"
              >
                Send Message
              </Button>
              {sent && (
                <span className="ml-4 align-middle text-sm font-medium text-green-700">
                  Thanks! We'll be in touch.
                </span>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-neutral-950 text-white transform-gpu skew-y-2"
    >
      <div className="-skew-y-2">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-24 sm:px-6 md:grid-cols-2 md:py-28 lg:px-8">
          {/* Left copy with vertical divider */}
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-extrabold uppercase leading-tight sm:text-5xl">
              About the Gym
            </h2>
            <div className="mt-8 flex">
              <div
                className="ml-2 w-1 shrink-0 rounded bg-white/80"
                aria-hidden
              />
              <div className="pl-8 space-y-8 text-white/85">
                {/* Tagline */}
                <div>
                  <h4 className="text-lg font-bold uppercase tracking-widest text-indigo-300 mb-2">
                    move.connect.Transform
                  </h4>
                </div>

                {/* Vision */}
                <div>
                  <h5 className="font-extrabold text-xl mb-1 text-white">
                    Vision
                  </h5>
                  <p>
                    To be the most trusted and empowering fitness community in
                    the city, delivering world-class coaching in CrossFit,
                    Olympic lifting, gymnastics, and endurance training,
                    creating a space where every individual, from beginner to
                    elite athlete, transforms their life through movement,
                    connection, and confidence.
                  </p>
                </div>

                {/* Mission */}
                <div>
                  <h5 className="font-extrabold text-xl mb-1 text-white">
                    Mission
                  </h5>
                  <p>
                    Our mission is to empower individuals to live stronger,
                    healthier, and more confident lives by delivering expert,
                    scalable CrossFit coaching rooted in proper movement. We
                    create a fun, inclusive environment where every workout
                    builds not just fitness, but lasting community connections
                    that inspire growth inside and outside the gym.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right image */}
          <div className="order-1 md:order-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-white/10">
              <Image
                src="/cfcheer2.jpg"
                width={500}
                height={500}
                alt="Community Image"
                className="object-cover w-full h-full static"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="skew-y-2 bg-white text-black text-center">
      <div className="-skew-y-2 mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-6">
          {/* Brand / badges */}
          <div className="space-y-6 md:col-span-2 flex flex-col justify-center items-center">
            <a href="#home" className="md:ml-0">
              <Image
                src="/cfcommune.png"
                alt="CrossFit Commune Logo"
                width={100}
                height={100}
              />
            </a>

            <a
              href="https://www.crossfit.com/"
              target="_blank"
              className="md:ml-0"
            >
              <img
                src="https://cdn.prod.website-files.com/64f9e931ffafed9df9bb7f10/64f9e931ffafed9df9bb7f7c_CF_Badge_BG_WHT_125x63.webp"
                loading="lazy"
                alt="CrossFit Logo "
                id="logoPrimary"
                width={100}
                height={100}
              />
            </a>

            <div className="h-12 w-40 rounded-md bg-white/10" aria-hidden />
          </div>

          {/* Columns */}
          <div>
            <h4 className="text-sm font-extrabold uppercase tracking-wider text-black/70">
              Programs
            </h4>
            <ul className="mt-4 space-y-3 text-black/80">
              <li className="hover:text-black">Crossfit</li>
              <li className="hover:text-black">Hyrox</li>
              <li className="hover:text-black">Personal Training</li>
              <li className="hover:text-black">Remote Coaching</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-extrabold uppercase tracking-wider text-black/70">
              About
            </h4>
            <ul className="mt-4 space-y-3 text-black/80">
              <li>
                <a className="hover:text-black" href="#about">
                  About Us
                </a>
              </li>
              <li>
                <a className="hover:text-black" href="#contact">
                  Contact Us
                </a>
              </li>
              <li>
                <a className="hover:text-black" href="#pricing">
                  Membership Pricing
                </a>
              </li>
              <li>
                <a className="hover:text-black" href="#faq">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-extrabold uppercase tracking-wider text-black/70">
              Legal
            </h4>
            <ul className="mt-4 space-y-3 text-black/80">
              <li className="hover:text-black">Privacy Policy</li>
              <li className="hover:text-black">Terms of Use</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-extrabold uppercase tracking-wider text-black/70">
              Address
            </h4>
            <ul className="mt-4 space-y-3 text-black/80">
              <li>1st floor plot #108, TNGO colony Gachibowli</li>
              <li>Hyderabad, Telangana 500032</li>
            </ul>
            <h4 className="mt-8 text-sm font-extrabold uppercase tracking-wider text-black/70">
              Locations
            </h4>
            <p className="mt-3 text-black/80">Hyderabad</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-black pt-6 text-sm text-black/70">
          <p>©{year} Copyright YOUR BOX</p>
          <div className="flex items-center gap-4">
            <a
              aria-label="Whatsapp"
              href={WHATSAPP_URL}
              target="_blank"
              className="inline-flex items-center justify-center rounded-full bg-white/10 p-2 hover:bg-white/15"
              onClick={(e) =>
                trackAndNavigate(e, WHATSAPP_URL, "whatsapp_click", {
                  platform: "whatsapp",
                  location: "footer",
                  link_url: WHATSAPP_URL,
                })
              }
            >
              <MessageCircle className="h-5 w-5" />
            </a>
            <a
              aria-label="Instagram"
              href={INSTAGRAM_URL}
              className="inline-flex items-center justify-center rounded-full bg-white/10 p-2 hover:bg-white/15"
              onClick={(e) =>
                trackAndNavigate(e, INSTAGRAM_URL, "instagram_click", {
                  platform: "instagram",
                  location: "footer",
                  link_url: INSTAGRAM_URL,
                })
              }
              target="_blank"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function NewLandingPage() {
  return (
    <>
      <main className="min-h-screen text-white">
        <Navbar />
        <Hero />
        <BenefitsSection />
        <CommunityLocationSection />
        <GettingStartedSection />
        <TimingsSection />
        <PricingSection />
        <AboutSection />        
        <ContactSection />
        <FAQSection />
        <Footer />
      </main>

      <Whatsapp />
    </>
  );
}
