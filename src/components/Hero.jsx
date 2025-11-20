import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/IWEIbUehLbfUBd3s/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/80">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            AI Agency • Infinity Growth Mathisen AS
          </div>

          <h1 className="mt-6 text-4xl sm:text-6xl font-semibold tracking-tight text-white">
            Custom AI Receptionists and Tailored AI Solutions
          </h1>
          <p className="mt-4 text-lg text-white/80">
            We design, build, and deploy AI that solves real business pain points — from always-on reception to internal automations and decision support.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex items-center rounded-lg bg-white text-slate-900 px-5 py-3 text-sm font-semibold shadow hover:bg-slate-100">
              Book a discovery call
            </a>
            <a href="#services" className="inline-flex items-center rounded-lg border border-white/20 bg-white/5 text-white px-5 py-3 text-sm font-semibold hover:bg-white/10">
              Explore services
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
