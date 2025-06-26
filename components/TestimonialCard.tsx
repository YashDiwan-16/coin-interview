import React from "react";

interface TestimonialCardProps {
  quote: string;
}

export default function TestimonialCard({ quote }: TestimonialCardProps) {
  return (
    <div className="bg-black/50 backdrop-blur-md rounded-xl p-8 flex flex-col items-center shadow-lg border border-green-500/20 hover:border-green-400/40 hover:scale-105 transition-all duration-300">
      <div className="text-green-400 text-4xl mb-4">"</div>
      <blockquote className="italic text-white/90 text-center text-lg leading-relaxed font-medium">"{quote}"</blockquote>
      <div className="text-green-400 text-4xl mt-4">"</div>
    </div>
  );
} 