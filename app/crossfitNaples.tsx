"use client";

import React from "react";
import { Dumbbell, Clock, MapPin, Instagram, Phone, Mail, ArrowRight, CheckCircle2, Users, Star, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function CrossfitNaplesClone() {
  const steps = [
    { title: "Step 1: Free Consultation", text: "Schedule a 15-minute call to learn more about our gym and programs." },
    { title: "Step 2: 7-Day Test Drive", text: "Try unlimited classes for a week to experience our coaching and community." },
    { title: "Step 3: Membership", text: "Pick the plan that suits your lifestyle and start your fitness journey." },
  ];

  const benefits = [
    { icon: <Dumbbell className="h-6 w-6" />, title: "24/7 Access", text: "Work out anytime that fits your schedule." },
    { icon: <Users className="h-6 w-6" />, title: "Community Support", text: "A culture built on accountability and encouragement." },
    { icon: <Clock className="h-6 w-6" />, title: "Easy Scheduling", text: "Reserve classes in seconds through our booking system." },
    { icon: <CheckCircle2 className="h-6 w-6" />, title: "Snacks & Recovery", text: "Healthy snacks and recovery drinks available onsite." },
  ];

  const faqs = [
    { q: "Do I need to be in shape to start?", a: "Not at all! Every workout is scalable to your current fitness level." },
    { q: "What should I bring?", a: "Comfortable workout clothes, a bottle of water, and positive energy!" },
    { q: "How often should I come?", a: "We recommend 3–5 classes a week for best results." },
  ];

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Dumbbell className="h-6 w-6" />
            <span className="font-semibold">CrossFit Clone</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#about" className="hover:text-gray-700">About</a>
            <a href="#getting-started" className="hover:text-gray-700">Getting Started</a>
            <a href="#benefits" className="hover:text-gray-700">Benefits</a>
            <a href="#coaches" className="hover:text-gray-700">Coaches</a>
            <a href="#faq" className="hover:text-gray-700">FAQ</a>
            <a href="#contact" className="hover:text-gray-700">Contact</a>
          </nav>
          <Button asChild>
            <a href="#trial">Book Free Trial</a>
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            High Fives & Good Vibes: Where Fitness Meets Community
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Certified coaches. A supportive community. 24/7 access. Inclusive fitness for every body.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg">
              <a href="#trial">Start Free Trial</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#getting-started">How It Works</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Getting Started Steps */}
      <section id="getting-started" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Getting Started is Easy</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((s) => (
              <Card key={s.title} className="rounded-2xl">
                <CardHeader>
                  <CardTitle>{s.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{s.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Why Train With Us</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {benefits.map((b) => (
              <Card key={b.title} className="rounded-2xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <span className="p-2 rounded-full bg-gray-50 border border-gray-100">{b.icon}</span>
                    {b.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{b.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Coaches */}
      <section id="coaches" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-center">Meet Our Coaches</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[1,2,3,4].map((i) => (
              <Card key={i} className="rounded-2xl">
                <CardContent className="p-5">
                  <div className="aspect-square rounded-xl overflow-hidden mb-4">
                    <img src={`/coach-${i}.jpg`} alt={`Coach ${i}`} className="h-full w-full object-cover" />
                  </div>
                  <div className="font-semibold">Coach {i}</div>
                  <div className="text-sm text-gray-500">CrossFit L1 • Strength • Conditioning</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
          <li  className="w-full">
            {faqs.map((f, idx) => (
              <div key={idx} value={`item-${idx}`}>
                <ul>{f.q}</ul>
                <ul>{f.a}</ul>
              </div>
            ))}
          </li>
        </div>
      </section>

      {/* Trial Form */}
      <section id="trial" className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>Book Your Free Trial</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="grid sm:grid-cols-2 gap-4">
                <Input placeholder="Full Name" required />
                <Input type="tel" placeholder="Phone" required />
                <Input type="email" placeholder="Email" className="sm:col-span-2" required />
                <Textarea placeholder="Goals / Injuries (optional)" className="sm:col-span-2" />
                <Button type="submit" className="sm:col-span-2">Submit</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="border-t border-gray-100 bg-white">
        <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 font-semibold mb-2"><Dumbbell className="h-5 w-5" /> CrossFit Clone</div>
            <p className="text-sm text-gray-600">Where fitness meets community. Naples-inspired CrossFit programming.</p>
          </div>
          <div>
            <div className="font-semibold mb-2">Contact</div>
            <div className="flex items-start gap-2 text-sm text-gray-600">
              <MapPin className="h-4 w-4 mt-0.5" /> 4110 Enterprise Ave #106, Naples, FL 34104
            </div>
            <div className="mt-2 flex items-center gap-2 text-sm text-gray-600"><Phone className="h-4 w-4" /> 239-237-3098</div>
            <div className="mt-1 flex items-center gap-2 text-sm text-gray-600"><Mail className="h-4 w-4" /> info@crossfitclone.com</div>
          </div>
          <div>
            <div className="font-semibold mb-2">Follow Us</div>
            <a href="https://instagram.com/" aria-label="Instagram" className="p-2 rounded-full border inline-flex">
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div className="border-t border-gray-100 py-6 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} CrossFit Clone. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
