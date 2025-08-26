"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navigationItems = [
  { title: "Home", href: "#hero" },
  { title: "About", href: "#about" },
  { title: "Opening", href: "#countdown" },
  { title: "Membership", href: "#membership" },
  { title: "Contact", href: "#contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navigationItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection("#hero")}
              className={cn(
                "text-xl font-black transition-colors",
                isScrolled ? "text-black" : "text-white"
              )}
            >
              CROSSFIT COMMUNE
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList>
                {navigationItems.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "transition-colors cursor-pointer",
                        isScrolled
                          ? "text-gray-700 hover:text-black"
                          : "text-black hover:text-gray-200",
                        
                      )}
                      onClick={() => scrollToSection(item.href)}
                    >
                      {item.title}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection("#membership")}
              className="bg-red-600 hover:bg-red-700 text-white font-semibold"
            >
              Join Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className={cn(
                    "p-2",
                    isScrolled ? "text-black hover:bg-gray-100" : "text-white hover:bg-white/20"
                  )}
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="text-lg font-black">CROSSFIT COMMUNE</h2>
                  </div>
                  
                  <nav className="flex flex-col space-y-4">
                    {navigationItems.map((item) => (
                      <button
                        key={item.title}
                        onClick={() => scrollToSection(item.href)}
                        className={cn(
                          "text-left px-4 py-3 rounded-lg text-lg font-medium transition-colors",
                          "hover:bg-gray-100",
                          activeSection === item.href.substring(1)
                            ? "bg-red-50 text-red-600"
                            : "text-gray-700"
                        )}
                      >
                        {item.title}
                      </button>
                    ))}
                  </nav>
                  
                  <div className="mt-auto pt-8">
                    <Button
                      onClick={() => scrollToSection("#membership")}
                      className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold"
                    >
                      Join Our Community
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}