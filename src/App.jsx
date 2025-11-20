import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background accents */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(99,102,241,0.25),transparent_60%)]" />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(40%_50%_at_80%_100%,rgba(34,211,238,0.15),transparent_60%)]" />

      <Navbar />
      <main>
        <Hero />
        <Services />
        <CTA />

        <footer id="about" className="relative border-t border-white/10 py-10">
          <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-white/60">
            <p>© {new Date().getFullYear()} Infinity Growth Mathisen AS. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Terms</a>
              <a href="#contact" className="hover:text-white">Contact</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
