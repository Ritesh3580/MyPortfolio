import { motion } from 'framer-motion';
import Button from '../ui/Button';

const links = [
  ['#services', 'Services'],
  ['#portfolio', 'Portfolio'],
  ['#process', 'Process'],
  ['#stack', 'Tech Stack'],
  ['#pricing', 'Pricing'],
  ['#contact', 'Contact'],
];

function Header({ menuOpen, setMenuOpen }) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-slate-950/30 backdrop-blur-xl">
      <div className="section-shell flex items-center justify-between py-4">
        <a href="#top" className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-white/10 text-lg font-black text-cyan-200">
            RD
          </div>
          <div>
            <div className="text-sm uppercase tracking-[0.32em] text-cyan-200/80">RiteshDev Studio</div>
            <div className="text-xs text-slate-400">Premium app and dashboard development</div>
          </div>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map(([href, label]) => (
            <a key={href} href={href} className="text-sm font-medium text-slate-300 transition hover:text-white">
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="https://wa.me/918077176860?text=Hello%20Ritesh%2C%20I%20want%20to%20start%20a%20project." target="_blank" rel="noopener noreferrer">
            Start Your Project
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 lg:hidden"
          onClick={() => setMenuOpen((current) => !current)}
          aria-label="Toggle navigation"
        >
          <span className="flex flex-col gap-1.5">
            <span className="block h-0.5 w-5 bg-white" />
            <span className="block h-0.5 w-5 bg-white" />
            <span className="block h-0.5 w-5 bg-white" />
          </span>
        </button>
      </div>

      {menuOpen ? (
        <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} className="section-shell pb-4 lg:hidden">
          <div className="glass-panel rounded-[28px] p-5">
            <div className="flex flex-col gap-4">
              {links.map(([href, label]) => (
                <a key={href} href={href} className="text-sm font-medium text-slate-200" onClick={() => setMenuOpen(false)}>
                  {label}
                </a>
              ))}
              <Button href="https://wa.me/918077176860?text=Hello%20Ritesh%2C%20I%20want%20to%20start%20a%20project." target="_blank" rel="noopener noreferrer">
                Start Your Project
              </Button>
            </div>
          </div>
        </motion.div>
      ) : null}
    </header>
  );
}

export default Header;
