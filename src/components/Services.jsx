import { Bot, Sparkles, Workflow, ShieldCheck } from 'lucide-react'

export default function Services() {
  const items = [
    {
      icon: Bot,
      title: 'AI Receptionist',
      desc: 'Voice and chat agents that greet, qualify, and route customers 24/7 with branded personality.',
    },
    {
      icon: Workflow,
      title: 'Process Automation',
      desc: 'Automate repetitive workflows across CRM, support, and operations using robust, auditable agents.',
    },
    {
      icon: Sparkles,
      title: 'Custom AI Solutions',
      desc: 'Fine-tuned models and RAG systems tailored to your data, delivering measurable ROI.',
    },
    {
      icon: ShieldCheck,
      title: 'Security & Compliance',
      desc: 'Enterprise-grade safeguards, data governance, and monitoring baked into every deployment.',
    },
  ]

  return (
    <section id="services" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">What we build</h2>
          <p className="mt-3 text-white/70">Solutions designed around your pains, not our templates.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/10 transition-colors">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-500 text-white">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
