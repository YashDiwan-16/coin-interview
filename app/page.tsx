"use client";
import React from "react";
import Link from "next/link";
import FeatureCard from "../components/FeatureCard";
import PricingCard from "../components/PricingCard";
import TestimonialCard from "../components/TestimonialCard";
import FAQAccordion from "../components/FAQAccordion";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
// Lucide icons
import { Briefcase, MessageCircle, BarChart2, UserCheck, Zap, Globe, DollarSign, Users } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-satoshi">
      {/* Hero Section - Refined Responsive */}
      <section id="hero" className="flex flex-col-reverse md:flex-row items-center justify-center min-h-[70vh] md:min-h-[80vh] px-4 md:px-8 gap-8 md:gap-0">
        {/* Left: Content */}
        <div className="flex-1 flex flex-col justify-center items-start max-w-xl w-full py-12 md:py-0 md:pr-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-5 tracking-tight text-green-400 leading-tight text-left w-full">
            Interview Smarter.<br />Get Hired Faster.
          </h1>
          <p className="text-base md:text-lg lg:text-2xl mb-8 text-white/90 font-medium text-left w-full max-w-lg">
            Practice real interview questions, get instant feedback, and level up your career with your personal AI coach.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full">
            <Button asChild variant="secondary" className="bg-green-500 hover:bg-green-600 text-white font-bold text-lg px-8 py-4 shadow-xl w-full sm:w-auto">
              <a href="#">Try on Telegram</a>
            </Button>
            <Button asChild variant="default" className="bg-white hover:bg-green-100 text-green-700 font-bold text-lg px-8 py-4 shadow-xl border border-green-400 w-full sm:w-auto">
              <a href="#">Get Feedback Now</a>
            </Button>
          </div>
        </div>
        {/* Right: SVG Animation */}
        <div className="flex-1 flex items-center justify-center w-full h-64 md:h-[400px] lg:h-[500px] max-w-lg mx-auto md:mx-0">
          <svg width="100%" height="100%" viewBox="0 0 380 380" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full max-w-xs md:max-w-md lg:max-w-lg animate-pulse">
            <circle cx="190" cy="190" r="160" fill="#22c55e" fillOpacity="0.08" />
            <circle cx="190" cy="190" r="120" fill="#22c55e" fillOpacity="0.13" />
            <circle cx="190" cy="190" r="80" fill="#22c55e" fillOpacity="0.18" />
            <circle cx="190" cy="190" r="40" fill="#22c55e" fillOpacity="0.25" />
            <g>
              <ellipse cx="190" cy="190" rx="60" ry="20" fill="#22c55e" fillOpacity="0.3">
                <animate attributeName="rx" values="60;80;60" dur="3s" repeatCount="indefinite" />
              </ellipse>
              <ellipse cx="190" cy="190" rx="20" ry="60" fill="#22c55e" fillOpacity="0.2">
                <animate attributeName="ry" values="60;80;60" dur="2.5s" repeatCount="indefinite" />
              </ellipse>
            </g>
            <circle cx="190" cy="190" r="8" fill="#22c55e" />
          </svg>
        </div>
      </section>

      {/* How It Works - Extraordinary Design */}
      <section id="how" className="max-w-7xl mx-auto py-32 px-4 relative overflow-hidden">
        {/* Animated background particles */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-20 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-32 w-1 h-1 bg-green-300 rounded-full animate-ping"></div>
          <div className="absolute bottom-20 left-1/3 w-3 h-3 bg-green-500 rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 right-10 w-2 h-2 bg-green-400 rounded-full animate-pulse delay-1000"></div>
        </div>
        <div className="relative z-10">
          <h2 className="text-5xl md:text-6xl font-black mb-24 text-center">
            <span className="bg-gradient-to-r from-green-400 via-white to-green-400 bg-clip-text text-transparent">
              How It Works
            </span>
          </h2>
          {/* Circular/Radial Layout */}
          <div className="relative flex items-center justify-center min-h-[600px] md:min-h-[800px]">
            {/* Central hub */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center shadow-2xl shadow-green-500/50 animate-pulse">
              <div className="w-24 h-24 bg-black rounded-full flex items-center justify-center">
                <span className="text-green-400 text-2xl font-bold">AI</span>
              </div>
            </div>
            {/* Orbiting steps (evenly spaced) */}
            <div className="relative w-[600px] h-[600px] md:w-[800px] md:h-[800px]">
              {/* Step 1 - Top */}
              <div className="absolute left-1/2 top-0 -translate-x-1/2 group cursor-pointer w-48 flex flex-col items-center">
                <div className="relative flex flex-col items-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-green-500/30 group-hover:shadow-green-500/60 transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-2">
                    <UserCheck size={32} strokeWidth={2.5} className="text-white" />
                  </div>
                  <div className="absolute -inset-4 bg-green-500/20 rounded-2xl blur-xl group-hover:bg-green-500/40 transition-all duration-500"></div>
                </div>
                <div className="mt-4 text-center max-w-[10rem] mx-auto">
                  <h3 className="font-bold text-xl text-white group-hover:text-green-400 transition-colors">Pick Role</h3>
                  <p className="text-white/70 text-sm mt-1">Select your domain</p>
                </div>
              </div>
              {/* Step 2 - Right */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 group cursor-pointer w-48 flex flex-col items-center">
                <div className="relative flex flex-col items-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-green-500/30 group-hover:shadow-green-500/60 transition-all duration-500 group-hover:scale-110 group-hover:translate-x-2">
                    <MessageCircle size={32} strokeWidth={2.5} className="text-white" />
                  </div>
                  <div className="absolute -inset-4 bg-green-500/20 rounded-2xl blur-xl group-hover:bg-green-500/40 transition-all duration-500"></div>
                </div>
                <div className="mt-4 text-center max-w-[10rem] mx-auto">
                  <h3 className="font-bold text-xl text-white group-hover:text-green-400 transition-colors">Practice</h3>
                  <p className="text-white/70 text-sm mt-1">Chat with AI</p>
                </div>
              </div>
              {/* Step 3 - Bottom */}
              <div className="absolute left-1/2 bottom-0 -translate-x-1/2 group cursor-pointer w-48 flex flex-col items-center">
                <div className="relative flex flex-col items-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-green-500/30 group-hover:shadow-green-500/60 transition-all duration-500 group-hover:scale-110 group-hover:translate-y-2">
                    <BarChart2 size={32} strokeWidth={2.5} className="text-white" />
                  </div>
                  <div className="absolute -inset-4 bg-green-500/20 rounded-2xl blur-xl group-hover:bg-green-500/40 transition-all duration-500"></div>
                </div>
                <div className="mt-4 text-center max-w-[10rem] mx-auto">
                  <h3 className="font-bold text-xl text-white group-hover:text-green-400 transition-colors">Get Feedback</h3>
                  <p className="text-white/70 text-sm mt-1">Instant insights</p>
                </div>
              </div>
              {/* Step 4 - Left */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 group cursor-pointer w-48 flex flex-col items-center">
                <div className="relative flex flex-col items-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-green-500/30 group-hover:shadow-green-500/60 transition-all duration-500 group-hover:scale-110 group-hover:-translate-x-2">
                    <Zap size={32} strokeWidth={2.5} className="text-white" />
                  </div>
                  <div className="absolute -inset-4 bg-green-500/20 rounded-2xl blur-xl group-hover:bg-green-500/40 transition-all duration-500"></div>
                </div>
                <div className="mt-4 text-center max-w-[10rem] mx-auto">
                  <h3 className="font-bold text-xl text-white group-hover:text-green-400 transition-colors">Improve</h3>
                  <p className="text-white/70 text-sm mt-1">Level up fast</p>
                </div>
              </div>
              {/* Connecting lines */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M400 100 Q500 200 600 400 Q500 600 400 700 Q300 600 200 400 Q300 200 400 100" 
                      stroke="url(#gradient)" strokeWidth="2" strokeDasharray="10 5" className="animate-pulse">
                  <animate attributeName="stroke-dashoffset" values="0;30;0" dur="3s" repeatCount="indefinite" />
                </path>
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#22c55e" stopOpacity="0.3" />
                    <stop offset="50%" stopColor="#22c55e" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#22c55e" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
          {/* Floating action button */}
          {/* <div className="text-center mt-20">
            <div className="inline-block group">
              <Button asChild variant="secondary" className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold text-xl px-12 py-6 shadow-2xl shadow-green-500/30 hover:shadow-green-500/50 hover:scale-105 transition-all duration-300 rounded-2xl">
                <a href="#" className="flex items-center gap-3">
                  <span>Start Your Journey</span>
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                </a>
              </Button>
            </div>
          </div> */}
        </div>
      </section>

      {/* Features - Bento Grid Design */}
      <section id="features" className="relative max-w-7xl mx-auto py-24 px-4">
        {/* Subtle background shape */}
        <div className="absolute inset-0 pointer-events-none -z-10">
          <svg width="100%" height="100%" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <ellipse cx="720" cy="160" rx="700" ry="120" fill="#22c55e" fillOpacity="0.04" />
          </svg>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-green-400">Features</h2>
        
        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[200px]">
          {/* Large Feature Card - Top Left */}
          <div className="lg:col-span-2 lg:row-span-2 bg-black/50 backdrop-blur-md rounded-2xl p-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300 group hover:scale-[1.02]">
            <div className="flex flex-col h-full justify-between">
              <div>
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Briefcase size={32} strokeWidth={2.5} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">Realistic Simulation</h3>
                <p className="text-white/70 text-lg leading-relaxed">
                  Practice with real-world, role-specific questions that mirror actual interviews. Our AI adapts to your responses and provides contextually relevant follow-ups.
                </p>
              </div>
              <div className="mt-6">
                <span className="inline-block px-3 py-1 bg-green-500/20 text-green-400 text-sm font-medium rounded-full">Core Feature</span>
              </div>
            </div>
          </div>

          {/* Medium Feature Card - Top Right */}
          <div className="lg:col-span-2 bg-black/50 backdrop-blur-md rounded-2xl p-6 border border-green-500/20 hover:border-green-400/40 transition-all duration-300 group hover:scale-[1.02]">
            <div className="flex items-start gap-4 h-full">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <Zap size={24} strokeWidth={2.5} className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">Instant AI Feedback</h3>
                <p className="text-white/70 leading-relaxed">
                  Get honest, structured feedback in seconds—no waiting, no bias. Our AI analyzes your responses and provides actionable insights.
                </p>
              </div>
            </div>
          </div>

          {/* Small Feature Card - Middle Right */}
          <div className="bg-black/50 backdrop-blur-md rounded-2xl p-6 border border-green-500/20 hover:border-green-400/40 transition-all duration-300 group hover:scale-[1.02]">
            <div className="text-center h-full flex flex-col justify-center">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <BarChart2 size={24} strokeWidth={2.5} className="text-white" />
              </div>
              <h3 className="font-bold text-white mb-2 group-hover:text-green-400 transition-colors">Progress Tracker</h3>
              <p className="text-white/70 text-sm">Track your growth with clear metrics</p>
            </div>
          </div>

          {/* Small Feature Card - Bottom Right */}
          <div className="bg-black/50 backdrop-blur-md rounded-2xl p-6 border border-green-500/20 hover:border-green-400/40 transition-all duration-300 group hover:scale-[1.02]">
            <div className="text-center h-full flex flex-col justify-center">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Globe size={24} strokeWidth={2.5} className="text-white" />
              </div>
              <h3 className="font-bold text-white mb-2 group-hover:text-green-400 transition-colors">Multi-Platform</h3>
              <p className="text-white/70 text-sm">Works on Telegram, WhatsApp & Web</p>
            </div>
          </div>

          {/* Medium Feature Card - Bottom Left */}
          <div className="lg:col-span-2 bg-black/50 backdrop-blur-md rounded-2xl p-6 border border-green-500/20 hover:border-green-400/40 transition-all duration-300 group hover:scale-[1.02]">
            <div className="flex items-start gap-4 h-full">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <DollarSign size={24} strokeWidth={2.5} className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">Pay-per-use</h3>
                <p className="text-white/70 leading-relaxed">
                  Unlock premium feedback and reports instantly, only when you need them. No subscriptions, just pay for what you use.
                </p>
              </div>
            </div>
          </div>

          {/* Small Feature Card - Bottom Center */}
          <div className="bg-black/50 backdrop-blur-md rounded-2xl p-6 border border-green-500/20 hover:border-green-400/40 transition-all duration-300 group hover:scale-[1.02]">
            <div className="text-center h-full flex flex-col justify-center">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users size={24} strokeWidth={2.5} className="text-white" />
              </div>
              <h3 className="font-bold text-white mb-2 group-hover:text-green-400 transition-colors">Referral Earnings</h3>
              <p className="text-white/70 text-sm">Earn by sharing and contributing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="max-w-4xl mx-auto py-20 px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-14 text-center text-green-400">What Users Say</h2>
        <div className="grid md:grid-cols-3 gap-10">
          <TestimonialCard quote="Helped me prep for my Google interview!" />
          <TestimonialCard quote="AI feedback was better than my real coach." />
          <TestimonialCard quote="Got a job after 3 sessions!" />
        </div>
      </section>

      {/* FAQ Accordion */}
      <section id="faq" className="max-w-2xl mx-auto py-20 px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-green-400">FAQ</h2>
        <FAQAccordion />
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 text-center">
        <h2 className="text-4xl font-bold mb-4 text-green-400">Start interviewing smarter.</h2>
        <div className="flex flex-col md:flex-row gap-4 justify-center mb-8">
          <Button asChild variant="secondary" className="bg-green-500 hover:bg-green-600 text-white font-bold text-lg px-8 py-4 shadow-xl">
            <a href="#">Try on Telegram</a>
          </Button>
          <Button asChild variant="default" className="bg-white hover:bg-green-100 text-green-700 font-bold text-lg px-8 py-4 shadow-xl border border-green-400">
            <a href="#">Get Feedback Now</a>
          </Button>
        </div>
        {/* <div className="text-white/50 text-sm">&copy; {new Date().getFullYear()} Intervisage. <a href="#" className="underline text-green-400">Contact</a> · <a href="#" className="underline text-green-400">Privacy</a></div> */}
      </section>
    </main>
  );
}

// FeatureCard, PricingCard, TestimonialCard, FAQAccordion components will be created in the components directory.
