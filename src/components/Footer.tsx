import { Instagram, Twitter, Youtube, Zap, MapPin, Calendar, Mail } from 'lucide-react';
import type { Page } from '@/hooks/usePage';
import { festival } from '@/data/festival';

export default function Footer({ navigate }: { navigate: (p: Page) => void }) {
  return (
    <footer className="relative bg-[#0d0b1a] border-t border-white/10 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-6 h-6 text-primary" fill="currentColor" />
              <span className="font-display text-3xl gradient-cyber-text">{festival.name}</span>
            </div>
            <p className="text-white/50 text-sm max-w-sm mb-6 leading-relaxed">
              {festival.tagline}. Três dias de música eletrônica no coração de São Paulo. Techno, house, bass e tudo o que pulsa.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Instagram, label: 'Instagram' },
                { icon: Twitter, label: 'Twitter' },
                { icon: Youtube, label: 'YouTube' },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  aria-label={label}
                  className="w-10 h-10 flex items-center justify-center border border-white/15 rounded-sm text-white/60 hover:text-primary hover:border-primary transition-all duration-200"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display text-lg tracking-wide text-white/80 mb-4">Navegação</h4>
            <ul className="space-y-2">
              {[
                { label: 'Home', page: 'home' as Page },
                { label: 'Lineup', page: 'lineup' as Page },
                { label: 'Programação', page: 'schedule' as Page },
                { label: 'Ingressos', page: 'tickets' as Page },
                { label: 'Info', page: 'info' as Page },
              ].map((item) => (
                <li key={item.page}>
                  <button
                    onClick={() => navigate(item.page)}
                    className="text-white/50 text-sm hover:text-primary transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg tracking-wide text-white/80 mb-4">Contato</h4>
            <ul className="space-y-3 text-sm text-white/50">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                <span>{festival.venue}, {festival.city}</span>
              </li>
              <li className="flex items-start gap-2">
                <Calendar className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                <span>{festival.dates}</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-primary transition-colors">contato@pulsefestival.com.br</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs font-mono">
            © {festival.edition} PULSE FESTIVAL · SITE DESENVOLVIDO COM IA
          </p>
          <p className="text-white/30 text-xs font-mono">
            FEITO EM SÃO PAULO
          </p>
        </div>
      </div>
    </footer>
  );
}
