import { useEffect, useState } from 'react';
import { Calendar, MapPin, ArrowRight, Zap } from 'lucide-react';
import type { Page } from '@/hooks/usePage';
import { festival, artists, galleryImages } from '@/data/festival';

const HERO_IMG = 'https://images.pexels.com/photos/7192861/pexels-photo-7192861.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1920';

function Countdown() {
  const target = new Date('2027-09-24T18:00:00-03:00').getTime();
  const [time, setTime] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    const tick = () => {
      const diff = Math.max(0, target - Date.now());
      setTime({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff % 86400000) / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { label: 'DIAS', value: time.d },
    { label: 'HRS', value: time.h },
    { label: 'MIN', value: time.m },
    { label: 'SEG', value: time.s },
  ];

  return (
    <div className="flex gap-3 sm:gap-6">
      {units.map((u) => (
        <div key={u.label} className="text-center">
          <div className="font-display text-3xl sm:text-5xl text-primary glow-text-primary tabular-nums">
            {String(u.value).padStart(2, '0')}
          </div>
          <div className="font-mono text-[10px] sm:text-xs text-white/40 tracking-widest mt-1">{u.label}</div>
        </div>
      ))}
    </div>
  );
}

export default function Home({ navigate }: { navigate: (p: Page) => void }) {
  const headliners = artists.filter((a) => a.headliner);
  const featured = artists.filter((a) => !a.headliner).slice(0, 4);

  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Festival crowd" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#07060f]/60 via-[#07060f]/80 to-[#07060f]" />
          <div className="absolute inset-0 bg-grid opacity-40" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-primary/30 rounded-full mb-6 animate-fade-up">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="font-mono text-xs text-primary tracking-widest">{festival.edition} · SÃO PAULO</span>
          </div>

          <h1 className="font-display text-[80px] sm:text-[140px] md:text-[200px] leading-none gradient-cyber-text glow-text-primary animate-fade-up" style={{ animationDelay: '0.1s' }}>
            {festival.name}
          </h1>

          <p className="text-lg sm:text-xl text-white/70 mt-2 font-light tracking-widest uppercase animate-fade-up" style={{ animationDelay: '0.2s' }}>
            {festival.tagline}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 text-white/60 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-primary" />
              {festival.dates}
            </span>
            <span className="hidden sm:block w-1 h-1 bg-white/30 rounded-full" />
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              {festival.venue}
            </span>
          </div>

          <div className="mt-10 flex justify-center animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <Countdown />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center animate-fade-up" style={{ animationDelay: '0.5s' }}>
            <button
              onClick={() => navigate('tickets')}
              className="px-8 py-3.5 bg-primary text-[#07060f] font-bold uppercase tracking-wide rounded-sm hover:glow-primary transition-all duration-200 flex items-center justify-center gap-2"
            >
              <Zap className="w-5 h-5" fill="currentColor" />
              Comprar Ingressos
            </button>
            <button
              onClick={() => navigate('lineup')}
              className="px-8 py-3.5 border border-white/30 text-white font-bold uppercase tracking-wide rounded-sm hover:border-primary hover:text-primary transition-all duration-200 flex items-center justify-center gap-2"
            >
              Ver Lineup
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 animate-float">
          <div className="font-mono text-xs tracking-widest">↓ ROLE PARA EXPLORAR</div>
        </div>
      </section>

      {/* Marquee */}
      <section className="border-y border-white/10 bg-[#0d0b1a] py-4 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 px-4">
              {['TECHNO', 'HOUSE', 'BASS', 'D&B', 'SYNTHWAVE', 'ACID', 'BREAKBEAT', 'MELODIC', 'PROGRESSIVE', 'AMBIENT'].map((g) => (
                <span key={g} className="font-display text-2xl tracking-wider text-white/20 flex items-center gap-8">
                  {g} <span className="text-primary">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-mono text-xs text-primary tracking-widest mb-4">O FESTIVAL</p>
            <h2 className="font-display text-5xl sm:text-7xl leading-none mb-6">
              TRÊS DIAS.<br />
              <span className="gradient-cyber-text">SETE ARTISTAS.</span><br />
              UM PULSO SÓ.
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              PULSE nasce da energia noturna de São Paulo. No Autódromo de Interlagos, transformamos o asfalto em pista e o céu em luz. Techno hipnótico, house groovy, bass destruidor — um festival pensado para quem vive a noite como ritual.
            </p>
            <div className="grid grid-cols-3 gap-4">
              {[
                { num: '3', label: 'DIAS' },
                { num: '3', label: 'PALCOS' },
                { num: '63K', label: 'PESSOAS' },
              ].map((stat) => (
                <div key={stat.label} className="border border-white/10 p-4 rounded-sm bg-white/[0.02]">
                  <div className="font-display text-3xl text-primary">{stat.num}</div>
                  <div className="font-mono text-xs text-white/40 tracking-widest mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm group">
              <img
                src="https://images.pexels.com/photos/9534913/pexels-photo-9534913.jpeg?auto=compress&cs=tinysrgb&h=900&w=720"
                alt="DJ no palco"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07060f] via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 gradient-cyber opacity-20 blur-3xl" />
          </div>
        </div>
      </section>

      {/* Headliners */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="font-mono text-xs text-primary tracking-widest mb-3">HEADLINERS</p>
            <h2 className="font-display text-5xl sm:text-7xl">QUEM COMANDA<br /><span className="gradient-cyber-text">A PISTA</span></h2>
          </div>
          <button onClick={() => navigate('lineup')} className="hidden sm:flex items-center gap-2 text-white/60 hover:text-primary transition-colors text-sm uppercase tracking-wide">
            Lineup completo <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {headliners.map((artist, i) => (
            <button
              key={artist.name}
              onClick={() => navigate('lineup')}
              className="group relative aspect-[3/4] overflow-hidden rounded-sm border border-white/10 animate-fade-up text-left"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <img
                src={artist.image}
                alt={artist.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07060f] via-[#07060f]/30 to-transparent" />
              <div className="absolute top-4 left-4 px-3 py-1 bg-primary text-[#07060f] font-mono text-xs font-bold tracking-widest">
                HEADLINER · D{artist.day}
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-display text-4xl group-hover:text-primary transition-colors">{artist.name}</h3>
                <p className="text-white/60 text-sm mt-1">{artist.genre}</p>
              </div>
              <div className="absolute inset-0 border-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="relative py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <p className="font-mono text-xs text-primary tracking-widest mb-3">A EXPERIÊNCIA</p>
          <h2 className="font-display text-5xl sm:text-7xl">A NOITE<br /><span className="gradient-cyber-text">EM IMAGENS</span></h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 px-2 sm:px-4">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-sm group ${i === 0 ? 'col-span-2 row-span-2 aspect-square' : 'aspect-square'}`}
            >
              <img src={img} alt={`Galeria ${i + 1}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-[#07060f]/20 group-hover:bg-transparent transition-colors duration-300" />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
        <div className="relative border border-white/10 bg-gradient-to-br from-[#0d0b1a] to-[#131022] p-12 sm:p-16 rounded-sm overflow-hidden">
          <div className="absolute -top-20 -right-20 w-60 h-60 gradient-cyber opacity-10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-secondary opacity-10 blur-3xl" />
          <Zap className="w-12 h-12 text-primary mx-auto mb-6 animate-pulse-glow rounded-full" fill="currentColor" />
          <h2 className="font-display text-5xl sm:text-7xl mb-4">
            PRONTO PARA<br /><span className="gradient-cyber-text">PULSAR?</span>
          </h2>
          <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto">
            Ingressos limitados. Garanta seu lugar na maior noite eletrônica de São Paulo.
          </p>
          <button
            onClick={() => navigate('tickets')}
            className="px-10 py-4 bg-primary text-[#07060f] font-bold uppercase tracking-wide rounded-sm hover:glow-primary transition-all duration-200 inline-flex items-center gap-2"
          >
            Comprar Agora <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}
