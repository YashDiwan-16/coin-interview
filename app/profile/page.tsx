"use client";
import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { FileUpload } from "../../components/ui/file-upload";
import { User, Mail, Briefcase, FileText, MessageCircle, Mic, Type } from "lucide-react";

const jobRoles = [
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "Data Scientist",
  "Product Manager",
  "UX/UI Designer",
  "DevOps Engineer",
  "Mobile Developer",
  "QA Engineer",
  "Software Architect"
];

const experienceLevels = [
  { value: "fresher", label: "Fresher" },
  { value: "0-1", label: "0-1 YOE" },
  { value: "1-3", label: "1-3 YOE" },
  { value: "3-5", label: "3-5 YOE" },
  { value: "5+", label: "5+ YOE" }
];

export default function CreateProfile() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    jobRole: "",
    experienceLevel: "",
    resume: null as File | null,
    interviewMode: "text",
    telegramUsername: ""
  });

  const [isValid, setIsValid] = useState({
    fullName: false,
    email: false,
    jobRole: false,
    experienceLevel: false,
    resume: false
  });

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Update validation
    if (field === 'email') {
      setIsValid(prev => ({ ...prev, email: validateEmail(value) }));
    } else if (field === 'fullName') {
      setIsValid(prev => ({ ...prev, fullName: value.length >= 2 }));
    } else if (field === 'jobRole') {
      setIsValid(prev => ({ ...prev, jobRole: value !== "" }));
    } else if (field === 'experienceLevel') {
      setIsValid(prev => ({ ...prev, experienceLevel: value !== "" }));
    }
  };

  const handleFileUpload = (files: File[]) => {
    if (files.length > 0) {
      const file = files[0];
      if (file.type === "application/pdf" || file.type.includes("document")) {
        setFormData(prev => ({ ...prev, resume: file }));
        setIsValid(prev => ({ ...prev, resume: true }));
      }
    }
  };

  const isFormValid = Object.values(isValid).every(Boolean);

  return (
    <div className="min-h-screen bg-black text-white font-satoshi py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-green-400">
            🎯 Let's Get to Know You
          </h1>
          <p className="text-xl text-white/70">
            Fill in a few quick details to personalize your AI interview experience.
          </p>
        </div>

        {/* Profile Form Card */}
        <Card className="bg-black/50 backdrop-blur-md border border-green-500/20 rounded-2xl p-8 shadow-xl">
          <form className="space-y-8">
            {/* Full Name */}
            <div className="relative">
              <div className="flex items-center gap-3 mb-3">
                <User className="w-5 h-5 text-green-400" />
                <label className="text-white/90 font-medium">Full Name *</label>
              </div>
              <input
                type="text"
                value={formData.fullName}
                onChange={(e) => handleInputChange('fullName', e.target.value)}
                className="w-full px-4 py-3 bg-black/50 border border-green-500/30 rounded-lg text-white placeholder:text-white/50 focus:border-green-400 focus:outline-none focus:ring-1 focus:ring-green-400/50 transition-all"
                placeholder="Enter your full name"
              />
            </div>

            {/* Email */}
            <div className="relative">
              <div className="flex items-center gap-3 mb-3">
                <Mail className="w-5 h-5 text-green-400" />
                <label className="text-white/90 font-medium">Email Address *</label>
              </div>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="w-full px-4 py-3 bg-black/50 border border-green-500/30 rounded-lg text-white placeholder:text-white/50 focus:border-green-400 focus:outline-none focus:ring-1 focus:ring-green-400/50 transition-all"
                placeholder="Enter your email address"
              />
            </div>

            {/* Job Role */}
            <div className="relative">
              <div className="flex items-center gap-3 mb-3">
                <Briefcase className="w-5 h-5 text-green-400" />
                <label className="text-white/90 font-medium">Preferred Job Role *</label>
              </div>
              <select
                value={formData.jobRole}
                onChange={(e) => handleInputChange('jobRole', e.target.value)}
                className="w-full px-4 py-3 bg-black/50 border border-green-500/30 rounded-lg text-white focus:border-green-400 focus:outline-none focus:ring-1 focus:ring-green-400/50 transition-all"
              >
                <option value="">Select your job role</option>
                {jobRoles.map((role) => (
                  <option key={role} value={role}>{role}</option>
                ))}
              </select>
            </div>

            {/* Experience Level */}
            <div className="relative">
              <div className="flex items-center gap-3 mb-3">
                <FileText className="w-5 h-5 text-green-400" />
                <label className="text-white/90 font-medium">Experience Level *</label>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {experienceLevels.map((level) => (
                  <button
                    key={level.value}
                    type="button"
                    onClick={() => handleInputChange('experienceLevel', level.value)}
                    className={`p-3 rounded-lg border transition-all ${
                      formData.experienceLevel === level.value
                        ? 'border-green-400 bg-green-500/20 text-green-400'
                        : 'border-green-500/30 bg-black/50 text-white/70 hover:border-green-400/50'
                    }`}
                  >
                    {level.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Resume Upload */}
            <div className="relative">
              <div className="flex items-center gap-3 mb-3">
                <FileText className="w-5 h-5 text-green-400" />
                <label className="text-white/90 font-medium">Upload Resume *</label>
              </div>
              <div className="bg-black/30 rounded-lg p-4">
                <FileUpload onChange={handleFileUpload} />
              </div>
            </div>

            {/* Interview Mode */}
            <div className="relative">
              <div className="flex items-center gap-3 mb-3">
                <MessageCircle className="w-5 h-5 text-green-400" />
                <label className="text-white/90 font-medium">Preferred Interview Mode</label>
              </div>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, interviewMode: 'text' }))}
                  className={`flex items-center gap-2 p-3 rounded-lg border transition-all ${
                    formData.interviewMode === 'text'
                      ? 'border-green-400 bg-green-500/20 text-green-400'
                      : 'border-green-500/30 bg-black/50 text-white/70 hover:border-green-400/50'
                  }`}
                >
                  <Type className="w-4 h-4" />
                  Text
                </button>
                <button
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, interviewMode: 'voice' }))}
                  className={`flex items-center gap-2 p-3 rounded-lg border transition-all ${
                    formData.interviewMode === 'voice'
                      ? 'border-green-400 bg-green-500/20 text-green-400'
                      : 'border-green-500/30 bg-black/50 text-white/70 hover:border-green-400/50'
                  }`}
                >
                  <Mic className="w-4 h-4" />
                  Voice
                </button>
              </div>
            </div>

            {/* Telegram Username */}
            <div className="relative">
              <div className="flex items-center gap-3 mb-3">
                <MessageCircle className="w-5 h-5 text-green-400" />
                <label className="text-white/90 font-medium">Telegram/WhatsApp Username (Optional)</label>
              </div>
              <input
                type="text"
                value={formData.telegramUsername}
                onChange={(e) => setFormData(prev => ({ ...prev, telegramUsername: e.target.value }))}
                className="w-full px-4 py-3 bg-black/50 border border-green-500/30 rounded-lg text-white placeholder:text-white/50 focus:border-green-400 focus:outline-none focus:ring-1 focus:ring-green-400/50 transition-all"
                placeholder="@username or phone number"
              />
            </div>

            {/* Continue Button */}
            <Button
              type="submit"
              disabled={!isFormValid}
              className="w-full bg-green-500 hover:bg-green-600 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-bold text-lg py-4 rounded-lg transition-all duration-300"
            >
              Start AI Interview
            </Button>
          </form>
        </Card>

        {/* Info Box */}
        <Card className="mt-8 bg-black/30 backdrop-blur-md border border-green-500/20 rounded-xl p-6">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-green-400 text-sm">ℹ️</span>
            </div>
            <div>
              <h3 className="text-white font-medium mb-2">Privacy & Security</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                We don't store your resume permanently. AI only uses it during your session for personalized feedback. 
                Your data is encrypted and never shared with third parties.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
} 