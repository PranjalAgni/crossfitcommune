"use client";

import { Button } from "@/components/ui/button"; // adjust import path if your shadcn setup differs


export default function Header() {
  return (
    <header id="home" className="relative">
      {/* Background */}
      <div className="block">
        <div
          aria-hidden="true"
          className="absolute inset-0 z-[-1] flex justify-start items-stretch"
        >
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpaperaccess.com%2Ffull%2F1244712.jpg&f=1&nofb=1&ipt=79b2af739def672653f1644a036e1993f958c333a73dd393a0ec858f5f1af9f1"
            loading="eager"
            alt="Crossfit Commune Image"
            sizes="100vw"
            srcSet="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpaperaccess.com%2Ffull%2F1244712.jpg&f=1&nofb=1&ipt=79b2af739def672653f1644a036e1993f958c333a73dd393a0ec858f5f1af9f1 1440w"
            className="absolute inset-0 -z-10 bg-black/60 block w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 -z-10 bg-black/60" />
        </div>
      </div>

      <div className="mx-auto grid min-h-[82vh] max-w-7xl place-items-center px-4 py-24 sm:px-6 lg:px-8">
        <div className="max-w-4xl text-left text-white">
          <p className="text-xs bg-black font-bold uppercase tracking-[0.18em] text-white w-fit">
          CrossFit Gym in Hyderabad,Telangana
          </p>
          <h1 className="leading-tight">
            <span className="block text-[clamp(2.5rem,6vw,6rem)] font-extrabold">
              HIGH FIVES & GOOD VIBES
            </span>
            <span className="block text-[clamp(2rem,5vw,4.75rem)] font-extrabold">
              WHERE FITNESS MEETS COMMUNITY
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-balance text-lg text-white">
            Lose weight, boost strength, and improve your overall physique with
            certified coaching and a supportive community.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild className="rounded-full bg-white text-gray-900 hover:bg-white/50">
              <a href="#consult" className="px-6 py-3 text-sm font-extrabold">Book a Free Consultation</a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
