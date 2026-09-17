'use client';

import React from 'react';
import { Bot, Zap, ShieldCheck, Activity, Cpu, Sparkles } from 'lucide-react';

export default function BentoGrid() {
  return (
    <section id="features" className="py-24 sm:py-32 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section title */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/5 px-3 py-1 text-xs font-semibold text-indigo-400">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Architecture & Features</span>
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl text-white">
            Everything your developer SaaS needs
          </h2>
          <p className="mt-4 text-base text-slate-400">
            A production-ready foundation built with modular components, type-safe API patterns, and zero architectural debt.
          </p>
        </div>

        {/* Bento Grid layout */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: AI Agent Workflows (Spans 2 columns) */}
          <div className="md:col-span-2 glass-panel glass-panel-hover rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-600/20 border border-indigo-500/30 text-indigo-400">
                  <Bot className="h-6 w-6" />
                </div>
                <span className="rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-xs font-mono text-indigo-300">
                  Core Engine: &lt; 45ms P99
                </span>
              </div>
              <h3 className="mt-6 text-2xl font-bold text-white tracking-tight">
                Autonomous AI Workflows
              </h3>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed max-w-xl">
                Chain multi-step model prompts, deterministic code tools, and sandboxed environments with automated self-healing execution loops.
              </p>
            </div>

            {/* Visual preview widget inside card */}
            <div className="mt-8 rounded-xl border border-white/10 bg-[#070b14] p-4 text-xs font-mono">
              <div className="flex items-center justify-between text-slate-400 pb-2 border-b border-white/5">
                <span className="flex items-center gap-1.5">
                  <Cpu className="h-3.5 w-3.5 text-indigo-400" />
                  <span>Workflow: agentic-code-review.ts</span>
                </span>
                <span className="text-emerald-400 font-semibold">Active</span>
              </div>
              <div className="mt-3 space-y-2 text-slate-300">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">[1/3] Static lint & syntax verification</span>
                  <span className="text-emerald-400">Passed (12ms)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">[2/3] Security bounds audit</span>
                  <span className="text-emerald-400">Passed (18ms)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">[3/3] Ephemeral preview deployment</span>
                  <span className="text-cyan-400">200 OK (38ms)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Edge Caching (1 column) */}
          <div className="glass-panel glass-panel-hover rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/20 border border-amber-500/30 text-amber-400">
                  <Zap className="h-6 w-6" />
                </div>
                <span className="rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 text-xs font-mono text-amber-300">
                  Global CDN
                </span>
              </div>
              <h3 className="mt-6 text-xl font-bold text-white tracking-tight">
                Global Edge Caching
              </h3>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                Ultra-low latency key-value caching deployed across 310+ edge locations with instant tag-based purging.
              </p>
            </div>

            <div className="mt-8 rounded-xl border border-white/10 bg-[#070b14] p-4 text-center">
              <div className="text-3xl font-extrabold text-white tracking-tight">310+</div>
              <div className="text-xs text-slate-400 mt-1">Edge Nodes with 99.99% SLA</div>
            </div>
          </div>

          {/* Card 3: End-to-End Type Safety (1 column) */}
          <div className="glass-panel glass-panel-hover rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/20 border border-cyan-500/30 text-cyan-400">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-mono text-cyan-300">
                  Strict Types
                </span>
              </div>
              <h3 className="mt-6 text-xl font-bold text-white tracking-tight">
                End-to-End Type Safety
              </h3>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                Automatic TypeScript definition generation with Zod validation. Zero contract drift between client and API.
              </p>
            </div>

            <div className="mt-8 rounded-xl border border-white/10 bg-[#070b14] p-3 text-xs font-mono text-slate-400">
              <span className="text-indigo-400">export type</span> ApiResponse = <span className="text-emerald-400">z.infer</span>&lt;<span className="text-amber-300">typeof UserSchema</span>&gt;;
            </div>
          </div>

          {/* Card 4: Webhook Reliability (Spans 2 columns) */}
          <div className="md:col-span-2 glass-panel glass-panel-hover rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-400">
                  <Activity className="h-6 w-6" />
                </div>
                <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-mono text-emerald-300">
                  0 Lost Events
                </span>
              </div>
              <h3 className="mt-6 text-2xl font-bold text-white tracking-tight">
                Dead-Letter Webhook Queues
              </h3>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed max-w-xl">
                Built-in exponential backoff retries, cryptographic HMAC signature verification, and observability dashboards for mission-critical reliability.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3 text-center">
              <div className="rounded-xl border border-white/10 bg-[#070b14] p-3">
                <div className="text-lg font-bold text-white">5x</div>
                <div className="text-[11px] text-slate-400">Auto Retries</div>
              </div>
              <div className="rounded-xl border border-white/10 bg-[#070b14] p-3">
                <div className="text-lg font-bold text-emerald-400">SHA-256</div>
                <div className="text-[11px] text-slate-400">HMAC Verified</div>
              </div>
              <div className="rounded-xl border border-white/10 bg-[#070b14] p-3">
                <div className="text-lg font-bold text-cyan-400">100%</div>
                <div className="text-[11px] text-slate-400">Delivery Guarantee</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
