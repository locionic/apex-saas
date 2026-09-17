import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://apex-saas.vercel.app'),
  title: 'Apex SaaS: Figma-Grade Next.js Starter for Developer Tools & AI',
  description:
    'The production-ready, open-source Next.js 15 starter template for developer tools, autonomous AI agents, and SaaS startups. Built with Tailwind CSS v4, TypeScript, and bento grid layouts.',
  keywords: [
    'nextjs saas template',
    'developer tool landing page',
    'tailwind bento grid starter',
    'ai saas template',
    'open source developer boilerplate',
    'linear vercel style landing page',
    'nextjs 15 starter'
  ],
  authors: [{ name: 'Locionic', url: 'https://www.locionic.com' }],
  openGraph: {
    title: 'Apex SaaS: Figma-Grade Next.js Starter for Developer Tools & AI',
    description:
      'Ship developer SaaS and AI tools 10x faster with the Apex open-source Next.js starter template.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Apex SaaS: Figma-Grade Next.js Starter for Developer Tools & AI',
    description:
      'Ship developer SaaS and AI tools 10x faster with the Apex open-source Next.js starter template.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <head>
        {/* Structured Data: SoftwareApplication Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'Apex SaaS Template',
              operatingSystem: 'All',
              applicationCategory: 'DeveloperApplication',
              description:
                'High-performance Next.js starter template for developer tools and AI SaaS products.',
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'USD',
              },
              author: {
                '@type': 'Organization',
                name: 'Locionic',
                url: 'https://www.locionic.com',
              },
            }),
          }}
        />
      </head>
      <body className="antialiased bg-[#090d16] text-slate-100 selection:bg-indigo-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
