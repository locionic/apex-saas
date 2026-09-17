'use client';

import React, { useState } from 'react';
import { CODE_SNIPPETS } from '../data/templateData';
import { Terminal, Copy, Check, Play, Sparkles, ArrowRight, Shield } from 'lucide-react';

export default function Hero() {
  const [activeTab, setActiveTab] = useState<'typescript' | 'python' | 'curl'>('typescript');
  const [copied, setCopied] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [terminalOutput, setTerminalOutput] = useState<string | null>(null);

  const handleCopy = () => {
    navigator.clipboard.writeText(CODE_SNIPPETS[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRunSimulation = () => {
    setIsRunning(true);
    setTerminalOutput('Initializing sandboxed environment...');
    setTimeout(() => {
      setTerminalOutput('Connecting to global edge gateway (Frankfurt, FRA-1)...');
    }, 400);
    setTimeout(() => {
      setTerminalOutput('200 OK: Workflow deployed in 38ms. Worker memory: 12MB. P99: 42ms.');
      setIsRunning(false);
    }, 900);
  };

  return (
    <section className="relative overflow-hidden pt-20 pb-24 md:pt-28 md:pb-32 radial-glow">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header content */}
        <div className="mx-auto max-w-3xl text-center">
          {/* Announcement pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3.5 py-1 text-xs font-medium text-indigo-300 shadow-inner hover:border-indigo-500/50 transition-all cursor-default">
            <span className="flex h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span>Apex v2.0 Released: Autonomous AI Workflows</span>
            <Sparkles className="h-3 w-3 text-indigo-300" />
          </div>

          {/* Main title */}
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl">
            <span className="text-gradient">Ship Developer SaaS</span>
            <br />
            <span className="text-gradient-indigo">10x Faster with Apex</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-lg text-slate-300 sm:text-xl font-normal leading-relaxed">
            The Figma-grade, open-source Next.js starter template designed for developer tools and AI products. 
            Pre-configured with edge workflows, clean bento layouts, and zero-fat architecture.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://vercel.com/new"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-slate-950 shadow-xl hover:bg-slate-100 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 76 65" xmlns="http://www.w3.org/2000/svg">
                <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" />
              </svg>
              <span>Deploy to Vercel</span>
            </a>

            <a
              href="#demo"
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-slate-900/80 px-6 py-3.5 text-sm font-semibold text-white hover:bg-slate-800 hover:border-white/20 transition-all"
            >
              <span>Interactive Playground</span>
              <ArrowRight className="h-4 w-4 text-indigo-400" />
            </a>
          </div>

          {/* Micro badges */}
          <div className="mt-6 flex items-center justify-center gap-6 text-xs text-slate-400">
            <div className="flex items-center gap-1.5">
              <Shield className="h-3.5 w-3.5 text-emerald-400" />
              <span>MIT License</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span>100/100 Lighthouse</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Terminal className="h-3.5 w-3.5 text-cyan-400" />
              <span>Next.js 15 App Router</span>
            </div>
          </div>
        </div>

        {/* Interactive Code Terminal */}
        <div id="demo" className="mt-14 mx-auto max-w-4xl">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0b0f19] shadow-2xl shadow-indigo-950/40">
            {/* Terminal bar */}
            <div className="flex flex-wrap items-center justify-between border-b border-white/5 bg-[#0e1424] px-4 py-3">
              {/* Window controls and tabs */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-rose-500/80" />
                  <div className="h-3 w-3 rounded-full bg-amber-500/80" />
                  <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
                </div>

                <div className="flex items-center gap-1 pl-2">
                  <button
                    onClick={() => { setActiveTab('typescript'); setTerminalOutput(null); }}
                    className={`rounded-md px-2.5 py-1 text-xs font-medium transition-all ${
                      activeTab === 'typescript'
                        ? 'bg-indigo-600/20 text-indigo-300 border border-indigo-500/30'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    route.ts
                  </button>
                  <button
                    onClick={() => { setActiveTab('python'); setTerminalOutput(null); }}
                    className={`rounded-md px-2.5 py-1 text-xs font-medium transition-all ${
                      activeTab === 'python'
                        ? 'bg-indigo-600/20 text-indigo-300 border border-indigo-500/30'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    agent.py
                  </button>
                  <button
                    onClick={() => { setActiveTab('curl'); setTerminalOutput(null); }}
                    className={`rounded-md px-2.5 py-1 text-xs font-medium transition-all ${
                      activeTab === 'curl'
                        ? 'bg-indigo-600/20 text-indigo-300 border border-indigo-500/30'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    curl.sh
                  </button>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex items-center gap-2 mt-2 sm:mt-0">
                <button
                  onClick={handleRunSimulation}
                  disabled={isRunning}
                  className="flex items-center gap-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 text-xs font-medium text-emerald-300 hover:bg-emerald-500/20 transition-all disabled:opacity-50"
                >
                  <Play className="h-3 w-3" />
                  <span>{isRunning ? 'Running...' : 'Run Simulation'}</span>
                </button>

                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-slate-300 hover:text-white hover:bg-white/10 transition-all"
                  title="Copy snippet"
                >
                  {copied ? (
                    <>
                      <Check className="h-3 w-3 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3 w-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Code Body */}
            <div className="p-5 overflow-x-auto text-xs sm:text-sm font-mono leading-relaxed text-slate-200">
              <pre>
                <code>{CODE_SNIPPETS[activeTab]}</code>
              </pre>
            </div>

            {/* Live output simulator */}
            {terminalOutput && (
              <div className="border-t border-white/10 bg-[#070a12] p-4 text-xs font-mono text-emerald-400 flex items-center justify-between animate-fadeIn">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>{terminalOutput}</span>
                </div>
                <span className="text-[10px] text-slate-500">Live Simulation</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
