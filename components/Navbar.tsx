import React from "react";
import Link from "next/link";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "./ui/navigation-menu";
import { Button } from "./ui/button";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "/interview", label: "AI Interview" },
  { href: "#how", label: "How It Works" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-black/90 backdrop-blur-lg shadow-xl border-b border-green-500/20">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4 relative">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Avatar className="w-10 h-10 border-2 border-green-500 shadow-lg">
            <AvatarImage src="/favicon.ico" alt="Intervisage Logo" />
          </Avatar>
          <span className="text-2xl font-extrabold bg-gradient-to-r from-green-400 via-white to-green-400 bg-clip-text text-transparent tracking-tight">Intervisage</span>
        </div>
        {/* Desktop Nav */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="flex gap-8">
            {navLinks.map((link) => (
              <NavigationMenuItem key={link.href}>
                <NavigationMenuLink asChild>
                  <Link
                    href={link.href}
                    className="relative px-2 py-1 text-lg font-semibold text-white/90 hover:text-green-400 transition group"
                  >
                    {link.label}
                    <span className="block h-0.5 bg-green-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full mt-1" />
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        {/* Desktop CTAs */}
        <div className="hidden md:flex gap-3">
          <Button asChild variant="secondary" className="bg-green-500 hover:bg-green-600 text-white font-bold shadow-lg">
            <Link href="#">Try on Telegram</Link>
          </Button>
          <Button asChild variant="default" className="bg-white hover:bg-green-100 text-green-700 font-bold shadow-lg border border-green-400">
            <Link href="#">Get Feedback</Link>
          </Button>
        </div>
        {/* Mobile Nav */}
        <div className="md:hidden flex items-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="ghost" className="text-green-400 hover:bg-green-900/30 rounded-full">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-black/95 border-l border-green-500/20 p-0">
              <div className="flex flex-col h-full justify-between py-6">
                <div>
                  <div className="flex items-center gap-3 px-6 mb-8">
                    <Avatar className="w-10 h-10 border-2 border-green-500">
                      <AvatarImage src="/favicon.ico" alt="Intervisage Logo" />
                    </Avatar>
                    <span className="text-2xl font-bold bg-gradient-to-r from-green-400 via-white to-green-400 bg-clip-text text-transparent tracking-tight">Intervisage</span>
                  </div>
                  <ul className="flex flex-col gap-4 px-6">
                    {navLinks.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="block text-lg font-semibold py-2 px-2 rounded hover:bg-green-900/30 hover:text-green-400 transition text-white/90"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col gap-3 px-6 mt-8">
                  <Button asChild variant="secondary" className="bg-green-500 hover:bg-green-600 text-white font-bold">
                    <Link href="#">Try on Telegram</Link>
                  </Button>
                  <Button asChild variant="default" className="bg-white hover:bg-green-100 text-green-700 font-bold border border-green-400">
                    <Link href="#">Get Feedback</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}

// Add subtle glowing animation
// Add to globals.css:
// @keyframes glow { 0%,100%{box-shadow:0 0 8px 2px #22d3ee66;} 50%{box-shadow:0 0 24px 6px #22d3eecc;} }
// .animate-glow { animation: glow 2.5s infinite alternate; }
