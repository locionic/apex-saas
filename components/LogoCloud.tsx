import React from 'react';

export default function LogoCloud() {
  const logos = [
    { name: 'Next.js 15', badge: 'App Router' },
    { name: 'TypeScript', badge: 'TypeSafe' },
    { name: 'Tailwind v4', badge: 'Zero-Runtime' },
    { name: 'Supabase', badge: 'Postgres' },
    { name: 'Docker', badge: 'Container' },
    { name: 'Cloudflare', badge: 'Edge Workers' }
  ];

  return (
    <section className="border-y border-white/5 bg-[#090d16]/50 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-wider text-slate-400">
          Engineered to integrate seamlessly with modern cloud platforms
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16">
          {logos.map((item) => (
            <div
              key={item.name}
              className="flex items-center gap-2 text-slate-400 hover:text-slate-200 transition-colors cursor-default"
            >
              <span className="text-base font-semibold tracking-tight">{item.name}</span>
              <span className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] font-mono text-slate-400">
                {item.badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
