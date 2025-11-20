import { useState } from 'react'
import { Menu } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-6 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 backdrop-blur supports-[backdrop-filter]:bg-white/5 py-3 pl-4 pr-3">
          <a href="#" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-500 shadow-md" />
            <div className="leading-tight">
              <p className="text-white font-semibold">Infinity Growth</p>
              <p className="text-xs text-white/60">Mathisen AS</p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className="text-sm text-white/80 hover:text-white transition-colors">
                {item.name}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center rounded-lg bg-white text-slate-900 px-4 py-2 text-sm font-semibold shadow-sm hover:bg-slate-100 transition-colors">
              Talk to us
            </a>
          </nav>

          <button className="md:hidden inline-flex items-center justify-center rounded-lg border border-white/15 p-2 text-white/80" onClick={() => setOpen(!open)}>
            <Menu className="h-5 w-5" />
          </button>
        </div>

        {open && (
          <div className="mt-2 overflow-hidden rounded-xl border border-white/10 bg-black/60 backdrop-blur md:hidden">
            <div className="flex flex-col divide-y divide-white/5">
              {navItems.map((item) => (
                <a key={item.name} href={item.href} className="px-4 py-3 text-sm text-white/80 hover:text-white">
                  {item.name}
                </a>
              ))}
              <a href="#contact" className="px-4 py-3 text-sm font-semibold text-white bg-white/10 hover:bg-white/15">
                Talk to us
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
