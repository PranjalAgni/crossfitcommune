"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";

import {
    Dumbbell,
    Facebook,
    Instagram,
    Mail,
    MapPin,
    Phone,
    Target,
    Users
} from "lucide-react";

export default function ComingSoonPage() {
  const [isSubscribed, setIsSubscribed] = useState(false);

  // Set your target opening date here (adjust as needed)
  const targetDate = new Date("2025-09-15T10:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        // Countdown finished
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    // Calculate initial time
    calculateTimeLeft();

    // Update every second
    const timer = setInterval(calculateTimeLeft, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(timer);
  }, [targetDate]);

  // Helper function to format numbers with leading zero
  const formatTime = (time: number) => {
    return time.toString().padStart(2, "0");
  };

  return (
    <main className="flex flex-col overflow-x-hidden">
      {/* Hero Section */}
      <section
        id="hero"
        className="relative bg-primary text-white min-h-screen flex items-center justify-center"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 98%, 0 100%)",
        }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-3"
          style={{
            backgroundImage: `url('/crossfit-gym.png')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/50 to-primary/90" />

        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <Badge className="mb-8 bg-red-600 hover:bg-red-700 text-white px-6 py-3 text-lg font-bold select-none">
            OPENING SOON
          </Badge>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 text-white leading-tight">
            CROSSFIT COMMUNE
          </h1>

          <p className="text-2xl md:text-3xl lg:text-4xl text-white mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
            The ultimate CrossFit experience is coming to your neighborhood. Get
            ready to forge your strongest self.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <div className="flex items-center gap-3 text-white text-xl">
              <MapPin className="h-6 w-6 text-red-500" />
              <span>Gachibowli, Hyderabad • Opening September 15, 2025</span>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section
        id="about"
        className="bg-background text-black relative py-32"
        style={{ clipPath: "polygon(0 3%, 100% 0, 100% 97%, 0 100%)" }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 text-black">
              What Awaits You
            </h2>
            <p className="text-2xl md:text-3xl text-gray-700 max-w-3xl mx-auto font-medium">
              State-of-the-art facility designed to help you achieve your
              fitness goals
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <Card className="bg-gray-100 border-gray-200 hover:bg-gray-50 transition-colors shadow-lg">
              <CardContent className="p-10 text-center">
                <Dumbbell className="h-16 w-16 text-red-500 mx-auto mb-6" />
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-black">
                  Premium Equipment
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Top-tier CrossFit equipment including barbells, kettlebells,
                  pull-up rigs, and more
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-100 border-gray-200 hover:bg-gray-50 transition-colors shadow-lg">
              <CardContent className="p-10 text-center">
                <Users className="h-16 w-16 text-red-500 mx-auto mb-6" />
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-black">
                  Expert Coaching
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Certified CrossFit trainers dedicated to helping you reach
                  your potential safely
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-100 border-gray-200 hover:bg-gray-50 transition-colors shadow-lg">
              <CardContent className="p-10 text-center">
                <Target className="h-16 w-16 text-red-500 mx-auto mb-6" />
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-black">
                  Varied Workouts
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Daily WODs designed to challenge all fitness levels and keep
                  training exciting
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <section
        id="countdown"
        className="bg-primary text-white relative py-32"
        style={{ clipPath: "polygon(0 2%, 100% 0, 100% 98%, 0 100%)" }}
      >
        <div className="max-w-5xl mx-auto text-center px-6">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-12 text-white">
            Opening Soon
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { label: "Days", value: formatTime(timeLeft.days) },
              { label: "Hours", value: formatTime(timeLeft.hours) },
              { label: "Minutes", value: formatTime(timeLeft.minutes) },
              { label: "Seconds", value: formatTime(timeLeft.seconds) },
            ].map((item, index) => (
              <Card
                key={index}
                className="bg-red-600 border-red-500 hover:bg-red-700 transition-colors"
              >
                <CardContent className="p-8 text-center">
                  <div className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-3">
                    {item.value}
                  </div>
                  <div className="text-red-100 text-lg uppercase tracking-wider font-bold">
                    {item.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-white text-2xl md:text-3xl font-medium">
            Follow our journey and be the first to know when we open our doors!
          </p>
        </div>
      </section>

      {/* Membership Preview Section */}
      <section
        id="membership"
        className="bg-background text-black relative py-32"
        style={{ clipPath: "polygon(0 3%, 100% 0, 100% 97%, 0 100%)" }}
      >
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-6xl font-black mb-8 text-black">
            Every Body Is Unique
          </h2>
          <p className="text-2xl md:text-3xl text-gray-700 max-w-3xl mx-auto mb-12 font-medium">
            Find a fitness routine that works for you and fits your lifestyle.
            Our expert coaches will help you achieve your goals.
          </p>
          <Button className="bg-red-600 hover:bg-red-700 text-white px-12 py-6 text-xl font-bold rounded-lg">
            Join Our Community
          </Button>
        </div>
      </section>

      {/* Contact & Footer */}
      <section
        id="contact"
        className="bg-primary text-white relative py-24"
        style={{ clipPath: "polygon(0 2%, 100% 0, 100% 100%, 0 100%)" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            {/* Logo/Brand Column */}
            <div>
              <h3 className="text-3xl font-black mb-8 text-white">
                CROSSFIT COMMUNE
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Building a stronger community through fitness. Coming soon to
                your neighborhood.
              </p>
              {/* Social Media Icons */}
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white/10 text-white h-12 w-12"
                >
                  <Facebook className="h-6 w-6 text-white" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white/10 text-white h-12 w-12"
                >
                  <Instagram className="h-6 w-6 text-white" />
                </Button>
              </div>
            </div>

            {/* Programs Column */}
            <div>
              <h4 className="text-xl font-bold mb-6 text-white uppercase tracking-wider">
                Programs
              </h4>
              <div className="space-y-3">
                <p className="text-gray-300 hover:text-white cursor-pointer transition-colors">
                  CrossFit Classes
                </p>
                <p className="text-gray-300 hover:text-white cursor-pointer transition-colors">
                  Personal Training
                </p>
                <p className="text-gray-300 hover:text-white cursor-pointer transition-colors">
                  Nutrition Coaching
                </p>
                <p className="text-gray-300 hover:text-white cursor-pointer transition-colors">
                  Open Gym
                </p>
              </div>
            </div>

            {/* About Column */}
            <div>
              <h4 className="text-xl font-bold mb-6 text-white uppercase tracking-wider">
                About
              </h4>
              <div className="space-y-3">
                <p className="text-gray-300 hover:text-white cursor-pointer transition-colors">
                  About Us
                </p>
                <p className="text-gray-300 hover:text-white cursor-pointer transition-colors">
                  Contact Us
                </p>
                <p className="text-gray-300 hover:text-white cursor-pointer transition-colors">
                  Our Coaches
                </p>
                <p className="text-gray-300 hover:text-white cursor-pointer transition-colors">
                  Membership Info
                </p>
              </div>
            </div>

            {/* Contact Column */}
            <div>
              <h4 className="text-xl font-bold mb-6 text-white uppercase tracking-wider">
                Contact
              </h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">
                    1st Floor, Tngo's Colony
                    <br />
                    Plot 108, My Home Vihanga Road
                    <br />
                    Gachibowli, Hyderabad
                    <br />
                    Telangana 500032
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-red-500" />
                  <span className="text-gray-300">
                    info@commune-wellness.com
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-red-500" />
                  <span className="text-gray-300">+91 81211 45533</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section with CrossFit Trademark */}
          <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-6 mb-4 md:mb-0">
              {/* CrossFit Trademark Link */}
              <a
                href="https://crossfit.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <div className="px-4 py-2 font-bold text-lg bg-primary text-white">
                  CrossFit
                </div>
              </a>
              <p className="text-gray-400 text-sm">
                CrossFit® is a registered trademark of CrossFit, LLC.
              </p>
            </div>
            <p className="text-gray-400 text-sm">
              © 2025 CrossFit Commune. All rights reserved.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
