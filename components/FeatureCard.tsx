import React from "react";

interface FeatureCardProps {
  icon: string;
  title: string;
  desc: string;
}

export default function FeatureCard({ icon, title, desc }: FeatureCardProps) {
  return (
    <div className="bg-black/50 backdrop-blur-md rounded-xl p-8 flex flex-col items-center shadow-lg border border-green-500/20 hover:border-green-400/40 hover:scale-105 transition-all duration-300 group">
      <div className="text-5xl mb-4 drop-shadow-lg group-hover:scale-110 transition-transform duration-300">{icon}</div>
      <h4 className="font-bold text-xl mb-3 text-green-400 text-center">{title}</h4>
      <p className="text-white/70 text-center text-sm leading-relaxed">{desc}</p>
    </div>
  );
} 