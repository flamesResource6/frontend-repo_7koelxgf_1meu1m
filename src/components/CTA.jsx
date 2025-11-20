export default function CTA() {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-8 rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-8 sm:p-12 text-white backdrop-blur">
          <div className="max-w-2xl">
            <h3 className="text-3xl font-semibold">Ready to explore AI for your business?</h3>
            <p className="mt-3 text-white/80">Tell us your top 2–3 pain points. We’ll propose an AI approach, timeline, and ROI estimate.</p>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="grid gap-3 sm:grid-cols-2">
            <input className="col-span-2 sm:col-span-1 rounded-lg border border-white/15 bg-black/30 px-4 py-3 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30" placeholder="Name" />
            <input className="col-span-2 sm:col-span-1 rounded-lg border border-white/15 bg-black/30 px-4 py-3 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30" placeholder="Email" />
            <textarea rows={4} className="col-span-2 rounded-lg border border-white/15 bg-black/30 px-4 py-3 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30" placeholder="Your pains / goals" />
            <div className="col-span-2">
              <button className="inline-flex items-center rounded-lg bg-white px-5 py-3 font-semibold text-slate-900 hover:bg-slate-100">Send</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
