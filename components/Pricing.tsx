'use client';

import React, { useState } from 'react';
import { PRICING_PLANS } from '../data/templateData';
import { Check, Sparkles, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);

  const handlePlanSelect = (planName: string) => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <section id="pricing" className="py-24 sm:py-32 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/5 px-3 py-1 text-xs font-semibold text-indigo-400">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Transparent Pricing</span>
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl text-white">
            Simple, predictable tiers
          </h2>
          <p className="mt-4 text-base text-slate-400">
            Start for free with our open-source MIT template, or upgrade to Developer Pro for production scale.
          </p>

          {/* Monthly / Annual Toggle Switch */}
          <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-[#0c1220] p-1.5 shadow-inner">
            <button
              onClick={() => setIsAnnual(false)}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
                !isAnnual
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
                isAnnual
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <span>Annual Billing</span>
              <span className="rounded-full bg-emerald-500/20 border border-emerald-500/30 px-1.5 py-0.2 text-[10px] text-emerald-300">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {PRICING_PLANS.map((plan) => {
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;

            return (
              <div
                key={plan.id}
                className={`relative flex flex-col justify-between rounded-3xl p-8 transition-all ${
                  plan.popular
                    ? 'border-2 border-indigo-500/50 bg-[#0e1529] shadow-2xl shadow-indigo-600/20 scale-100 lg:-translate-y-2'
                    : 'glass-panel hover:border-white/20'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-indigo-600 px-3.5 py-1 text-xs font-bold text-white shadow-lg uppercase tracking-wider">
                    Most Popular
                  </div>
                )}

                <div>
                  <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                  <p className="mt-2 text-xs text-slate-400 min-h-[36px]">{plan.description}</p>

                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-white">${price}</span>
                    <span className="text-xs text-slate-400">
                      {price === 0 ? 'forever' : isAnnual ? '/ month, billed annually' : '/ month'}
                    </span>
                  </div>

                  {/* Feature list */}
                  <div className="mt-8 space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                      Included Capabilities
                    </p>
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <Check className="h-4 w-4 shrink-0 text-emerald-400 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4">
                  <button
                    onClick={() => handlePlanSelect(plan.name)}
                    className={`w-full flex items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold transition-all ${
                      plan.popular
                        ? 'bg-indigo-600 text-white hover:bg-indigo-500 shadow-lg shadow-indigo-600/30'
                        : 'border border-white/10 bg-white/5 text-white hover:bg-white/10'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
