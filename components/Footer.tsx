import React from "react";
import Link from "next/link";
import { MessageCircle, Twitter, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-black/95 backdrop-blur-sm border-t border-green-500/30">
      <div className="max-w-6xl mx-auto px-6 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
            <span className="text-white/80 text-sm font-medium bg-gradient-to-r from-white via-green-400 to-white bg-clip-text text-transparent">
              &copy; {new Date().getFullYear()} Intervisage
            </span>
            <span className="text-white/50 text-xs">
              Made with ❤️ for Coinbase
            </span>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-5">
            <Link href="#" className="text-white/60 hover:text-green-400 transition-all duration-300 hover:scale-110 group">
              <div className="p-2 rounded-lg group-hover:bg-green-500/10 transition-all duration-300">
                <MessageCircle className="w-4 h-4" />
              </div>
            </Link>
            <Link href="#" className="text-white/60 hover:text-green-400 transition-all duration-300 hover:scale-110 group">
              <div className="p-2 rounded-lg group-hover:bg-green-500/10 transition-all duration-300">
                <Twitter className="w-4 h-4" />
              </div>
            </Link>
            <Link href="#" className="text-white/60 hover:text-green-400 transition-all duration-300 hover:scale-110 group">
              <div className="p-2 rounded-lg group-hover:bg-green-500/10 transition-all duration-300">
                <Github className="w-4 h-4" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 