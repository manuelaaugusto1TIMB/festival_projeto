import { useEffect, useState } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import type { Page } from '@/hooks/usePage';
import { festival } from '@/data/festival';

const NAV_ITEMS: { label: string; page: Page }[] = [
  { label: 'Home', page: 'home' },
  { label: 'Lineup', page: 'lineup' },
  { label: 'Programação', page: 'schedule' },
  { label: 'Ingressos', page: 'tickets' },
  { label: 'Info', page: 'info' },
];

export default function Navbar({ page, navigate }: { page: Page; navigate: (p: Page) => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (p: Page) => {
    navigate(p);
    setOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#07060f]/90 backdrop-blur-xl border-b border-white/10'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <button
              onClick={() => handleNav('home')}
              className="flex items-center gap-2 group"
              aria-label="PULSE Home"
            >
              <Zap className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" fill="currentColor" />
              <span className="font-display text-2xl md:text-3xl tracking-wider gradient-cyber-text">
                {festival.name}
              </span>
              <span className="hidden sm:inline font-mono text-[10px] text-white/40 ml-1">
                {festival.edition}
              </span>
            </button>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.page}
                  onClick={() => handleNav(item.page)}
                  className={`px-4 py-2 text-sm font-medium tracking-wide uppercase transition-all duration-200 relative group ${
                    page === item.page ? 'text-primary' : 'text-white/60 hover:text-white'
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-primary transition-all duration-300 ${
                      page === item.page ? 'w-8' : 'w-0 group-hover:w-6'
                    }`}
                  />
                </button>
              ))}
              <button
                onClick={() => handleNav('tickets')}
                className="ml-3 px-5 py-2 bg-primary text-[#07060f] text-sm font-bold uppercase tracking-wide hover:glow-primary transition-all duration-200 rounded-sm"
              >
                Garantir Ingresso
              </button>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 text-white"
              aria-label="Menu"
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      {open && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-[#07060f]/95 backdrop-blur-xl pt-20 px-6 animate-fade-in">
            <div className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.page}
                  onClick={() => handleNav(item.page)}
                  className={`text-left py-4 text-2xl font-display tracking-wide border-b border-white/10 transition-colors ${
                    page === item.page ? 'text-primary' : 'text-white/70'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => handleNav('tickets')}
                className="mt-6 py-4 bg-primary text-[#07060f] text-lg font-bold uppercase tracking-wide rounded-sm"
              >
                Garantir Ingresso
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
