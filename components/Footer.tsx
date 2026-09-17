import React from 'react';
import { Terminal } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#070b14] py-12 text-xs text-slate-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pb-12">
          {/* Brand Col */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-600 p-0.5">
                <Terminal className="h-4 w-4 text-white" />
              </div>
              <span className="text-base font-bold text-white tracking-tight">Apex.dev</span>
            </Link>
            <p className="mt-3 text-xs text-slate-400 max-w-sm leading-relaxed">
              The high-performance, open-source Next.js starter template for modern developer tools, AI workflows, and cloud services.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <a
                href="https://github.com/locionic"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-white/10 bg-white/5 text-slate-300 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-white/10 bg-white/5 text-slate-300 hover:text-white transition-colors"
                aria-label="X Twitter"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-white uppercase tracking-wider text-[11px]">Product</h4>
            <ul className="mt-3 space-y-2">
              <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#demo" className="hover:text-white transition-colors">Playground</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Wall of Love</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-white uppercase tracking-wider text-[11px]">Resources</h4>
            <ul className="mt-3 space-y-2">
              <li><a href="https://www.locionic.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">Locionic Engineering Blog</a></li>
              <li><a href="https://github.com/locionic" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="https://github.com/locionic" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub Repository</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Developer Tools */}
          <div>
            <h4 className="font-semibold text-white uppercase tracking-wider text-[11px]">Ecosystem</h4>
            <ul className="mt-3 space-y-2">
              <li><a href="https://www.locionic.com/en/tools/jwt-debugger" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">JWT Debugger</a></li>
              <li><a href="https://www.locionic.com/en/tools/cron-builder" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Cron Builder</a></li>
              <li><a href="https://www.locionic.com/en/tools/svg-to-jsx" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">SVG to JSX</a></li>
              <li><a href="https://www.locionic.com/en/tools" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">All Dev Tools</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            &copy; {new Date().getFullYear()} Apex.dev. Released under the MIT License.
          </div>
          <div className="flex items-center gap-1.5">
            <span>Built with precision by</span>
            <a
              href="https://www.locionic.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-indigo-400 hover:text-indigo-300 transition-colors underline underline-offset-4"
            >
              Locionic
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
