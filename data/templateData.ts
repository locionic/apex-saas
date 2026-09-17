export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  tag: string;
  metric?: string;
  iconName: string;
  span?: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  monthlyPrice: number;
  annualPrice: number;
  popular?: boolean;
  features: string[];
  ctaText: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const CODE_SNIPPETS = {
  typescript: `import { ApexAgent, tool } from '@apex/ai';
import { z } from 'zod';

// Initialize zero-latency AI workflow
export const agent = new ApexAgent({
  model: 'claude-3-7-sonnet',
  system: 'You are an autonomous engineering orchestrator.',
  tools: [
    tool({
      name: 'deployPreview',
      description: 'Trigger an isolated preview deployment',
      schema: z.object({ branch: z.string() }),
      execute: async ({ branch }) => ({ url: \`https://\${branch}.preview.run\` })
    })
  ]
});`,
  python: `from apex_sdk import Agent, tool
from pydantic import BaseModel

class DeployArgs(BaseModel):
    branch: str

# Async background worker with automatic retry
agent = Agent(
    model="claude-3-7-sonnet",
    concurrency=16,
    telemetry=True
)

@agent.task(name="verify_build")
async def verify_build(args: DeployArgs):
    result = await agent.run_sandbox(args.branch)
    return {"status": "success", "latency_ms": 42}`,
  curl: `curl -X POST https://api.apex-saas.dev/v1/workflows/trigger \\
  -H "Authorization: Bearer apex_live_94f8a02b" \\
  -H "Content-Type: application/json" \\
  -d '{
    "workflow": "agentic-code-review",
    "repository": "locionic/apex-saas",
    "auto_merge": true
  }'`
};

export const FEATURES: FeatureItem[] = [
  {
    id: 'agentic-pipeline',
    title: 'Autonomous AI Workflows',
    description: 'Chain multi-step model prompts, deterministic code tools, and sandboxed environments with automated self-healing execution loops.',
    tag: 'Core Engine',
    metric: '< 45ms P99',
    iconName: 'Bot',
    span: 'col-span-1 md:col-span-2'
  },
  {
    id: 'edge-caching',
    title: 'Global Edge Invalidation',
    description: 'Ultra-low latency key-value caching deployed across 310+ Cloudflare edge nodes with instant tag-based cache purging.',
    tag: 'Infrastructure',
    metric: '99.99% Uptime',
    iconName: 'Zap',
    span: 'col-span-1'
  },
  {
    id: 'type-safety',
    title: 'End-to-End Type Safety',
    description: 'Automatic TypeScript definition generation with Zod validation. Never let an API contract drift between client and server.',
    tag: 'Developer Experience',
    metric: '100% TypeSafe',
    iconName: 'ShieldCheck',
    span: 'col-span-1'
  },
  {
    id: 'webhooks',
    title: 'Dead-Letter Webhook Queues',
    description: 'Built-in exponential backoff retries, signature verification, and observability dashboards for enterprise reliability.',
    tag: 'Messaging',
    metric: '0 Lost Events',
    iconName: 'Activity',
    span: 'col-span-1 md:col-span-2'
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Open Source',
    description: 'Everything needed to launch an indie SaaS or open-source developer project.',
    monthlyPrice: 0,
    annualPrice: 0,
    features: [
      'Up to 10,000 monthly API calls',
      'Next.js 15 App Router boilerplate',
      'Tailwind CSS v4 design system',
      'Community Discord & GitHub support',
      'MIT open-source license'
    ],
    ctaText: 'Clone on GitHub'
  },
  {
    id: 'pro',
    name: 'Developer Pro',
    description: 'For growing SaaS businesses needing production scale, analytics, and private support.',
    monthlyPrice: 29,
    annualPrice: 24,
    popular: true,
    features: [
      'Unlimited monthly API calls',
      'Stripe customer billing & subscription portal',
      'Supabase & PostgreSQL schema migrations',
      'Multi-tenant workspace team permissions',
      'Priority email & Slack support',
      'Custom domain & edge SSL certificates'
    ],
    ctaText: 'Get Started with Pro'
  },
  {
    id: 'enterprise',
    name: 'Team Scale',
    description: 'Tailored infrastructure, custom SLA, and dedicated onboarding for engineering teams.',
    monthlyPrice: 99,
    annualPrice: 79,
    features: [
      'Self-hosted on AWS, GCP, or Bare Metal',
      'Dedicated VPC peering & custom IP pools',
      'SOC2 Type II compliance reports',
      '99.99% uptime contractual SLA',
      'Direct WhatsApp & Slack engineering channel',
      'Custom LLM fine-tuning pipelines'
    ],
    ctaText: 'Contact Enterprise'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    name: 'Alex Chen',
    role: 'Principal Engineer',
    company: 'HyperScale AI',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    content: 'Apex saved our engineering team at least 6 weeks of frontend and auth boilerplate. The code structure is minimal, clean, and zero-fat.'
  },
  {
    id: 'test-2',
    name: 'Sarah Jenkins',
    role: 'Solo Founder',
    company: 'PromptPilot',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
    content: 'The Figma-grade dark aesthetic made our early beta look like a series-A funded product on day one. Our launch conversion was 8.4%.'
  },
  {
    id: 'test-3',
    name: 'Marco Rossi',
    role: 'Head of Infrastructure',
    company: 'CloudSync IO',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    content: 'Zero dependencies bloat. 100/100 Lighthouse performance straight out of the box with instant Vercel edge deployment.'
  }
];

export const FAQS: FaqItem[] = [
  {
    question: 'Is this template completely open source and free for commercial use?',
    answer: 'Yes. Apex SaaS is licensed under the permissive MIT License. You can build, customize, and monetize commercial SaaS applications with zero licensing fees or attribution requirements.'
  },
  {
    question: 'What is the recommended deployment target?',
    answer: 'The template is optimized for Vercel with zero configuration required. It can also be deployed to Cloudflare Pages, Netlify, AWS Amplify, or self-hosted via Docker.'
  },
  {
    question: 'How do I connect my database and payment provider?',
    answer: 'The project includes pre-configured environment variable templates in `.env.example` for Supabase (PostgreSQL) and Stripe subscriptions, with type-safe client utilities.'
  },
  {
    question: 'Can I customize the color palette and typography?',
    answer: 'Tailwind CSS v4 variables are defined in `app/globals.css`. You can modify the primary hue, background obsidian tones, and accent gradients in just a few lines of code.'
  }
];
