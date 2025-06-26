import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQS = [
  {
    q: "Is it accurate?",
    a: "Our AI uses advanced LLMs and is constantly improved with real interview data. We've trained our models on thousands of actual interviews to ensure realistic and relevant questions.",
  },
  {
    q: "Is my data private?",
    a: "Yes. Your responses are confidential and never sold or shared. We use enterprise-grade encryption and follow strict privacy protocols to protect your information.",
  },
  {
    q: "Can I use voice responses?",
    a: "Absolutely! You can answer via text or voice, depending on the platform. Our AI adapts to your preferred communication style for a natural interview experience.",
  },
  {
    q: "Do I need crypto to use it?",
    a: "No. Payments are handled via x402pay, but you can earn in CDP Wallet if you refer others. We support multiple payment methods for your convenience.",
  },
  {
    q: "How does the feedback work?",
    a: "Our AI analyzes your responses in real-time, providing instant scores, strengths, weaknesses, and actionable improvement suggestions. You get detailed insights to help you improve.",
  },
  {
    q: "Which platforms are supported?",
    a: "We work on Telegram, WhatsApp, and Web. You can practice interviews anywhere, anytime, across all your favorite platforms.",
  },
];

export default function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(null);
  
  return (
    <div className="space-y-4">
      {FAQS.map((item, idx) => (
        <div 
          key={idx} 
          className={`bg-black/50 backdrop-blur-md rounded-xl border transition-all duration-300 group hover:scale-[1.02] ${
            open === idx 
              ? 'border-green-400/40 shadow-lg shadow-green-500/10' 
              : 'border-green-500/20 hover:border-green-400/30'
          }`}
        >
          <button
            className="w-full flex justify-between items-center p-6 text-left focus:outline-none focus:ring-2 focus:ring-green-500/20 rounded-xl transition-all duration-300"
            onClick={() => setOpen(open === idx ? null : idx)}
            aria-expanded={open === idx}
          >
            <h3 className={`text-lg font-semibold transition-colors duration-300 ${
              open === idx ? 'text-green-400' : 'text-white/90 group-hover:text-white'
            }`}>
              {item.q}
            </h3>
            <div className={`ml-4 flex-shrink-0 transition-all duration-300 ${
              open === idx ? 'text-green-400 rotate-180' : 'text-white/60 group-hover:text-white/80'
            }`}>
              {open === idx ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </div>
          </button>
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              open === idx ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-6 pb-6">
              <div className="pt-2 border-t border-green-500/20">
                <p className="text-white/70 leading-relaxed mt-4">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
} 