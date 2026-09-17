'use client';

import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function CTA() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    setSubmitted(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl border border-indigo-500/30 bg-gradient-to-b from-[#111827] to-[#0b0f19] p-10 sm:p-16 text-center shadow-2xl shadow-indigo-950/50">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl text-white">
              Ready to ship your developer SaaS?
            </h2>
            <p className="mt-4 text-base text-slate-300">
              Join 1,400+ engineers building next-generation AI and developer tools with Apex.
            </p>

            {/* Email form or submitted state */}
            {submitted ? (
              <div className="mt-8 flex items-center justify-center gap-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 p-4 text-emerald-300 text-sm font-medium">
                <CheckCircle2 className="h-5 w-5" />
                <span>You are on the priority list! Welcome to the Apex developer circle.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your work email"
                  required
                  className="flex-1 rounded-xl border border-white/10 bg-[#070a12] px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                />
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-600/30 shrink-0"
                >
                  <span>Get Early Access</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            )}

            <div className="mt-6 flex items-center justify-center gap-4 text-xs text-slate-400">
              <span>No spam ever</span>
              <span>&middot;</span>
              <span>100% Free & Open Source</span>
              <span>&middot;</span>
              <span>Unsubscribe anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
