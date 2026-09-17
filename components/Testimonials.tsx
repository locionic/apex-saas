import React from 'react';
import { TESTIMONIALS } from '../data/templateData';
import { Star } from 'lucide-react';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 sm:py-32 border-t border-white/5 bg-[#090d16]/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-white">
            Loved by software engineers & founders
          </h2>
          <p className="mt-4 text-base text-slate-400">
            See how developer tool teams launch and scale faster with Apex.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="glass-panel rounded-3xl p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-4 text-sm text-slate-200 leading-relaxed italic">
                  &ldquo;{t.content}&rdquo;
                </p>
              </div>

              <div className="mt-6 flex items-center gap-3 pt-4 border-t border-white/5">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="h-10 w-10 rounded-full object-cover border border-white/10"
                />
                <div>
                  <div className="text-sm font-bold text-white">{t.name}</div>
                  <div className="text-xs text-slate-400">
                    {t.role} &middot; <span className="text-indigo-400">{t.company}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
