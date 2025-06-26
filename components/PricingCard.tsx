import React from "react";

interface PricingCardProps {
  tier: string;
  price: string;
  features: string[];
  cta: string;
}

export default function PricingCard({ tier, price, features, cta }: PricingCardProps) {
  return (
    <div className="bg-black/50 backdrop-blur-md rounded-xl p-8 flex flex-col items-center shadow-lg border border-green-500/20 hover:border-green-400/40 hover:scale-105 transition-all duration-300">
      <h4 className="font-bold text-2xl mb-3 text-green-400">{tier}</h4>
      <div className="text-4xl font-bold mb-4 text-white">{price}</div>
      <ul className="mb-6 text-white/70 text-sm list-disc list-inside space-y-2">
        {features.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>
      <button className="px-6 py-3 rounded-lg bg-green-500 hover:bg-green-600 text-white font-bold shadow-lg transition-colors w-full mt-auto">{cta}</button>
    </div>
  );
} 