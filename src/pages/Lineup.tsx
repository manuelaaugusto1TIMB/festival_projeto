import { useState } from 'react';
import { ArrowRight, Clock, MapPin } from 'lucide-react';
import type { Page } from '@/hooks/usePage';
import { artists, festival } from '@/data/festival';

export default function Lineup({ navigate }: { navigate: (p: Page) => void }) {
  const [selected, setSelected] = useState<number | null>(null);
  const [filter, setFilter] = useState<number | 0>(0);

  const filtered = filter === 0 ? artists : artists.filter((a) => a.day === filter);
  const selectedArtist = selected !== null ? artists[selected] : null;

  const days = [
    { id: 0, label: 'TODOS' },
    ...festival.days.map((d) => ({ id: d.id, label: `D${d.id} · ${d.date}` })),
  ];

  return (
    <div className="animate-fade-in pt-20">
      {/* Header */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="relative">
          <p className="font-mono text-xs text-primary tracking-widest mb-4">LINEUP COMPLETO</p>
          <h1 className="font-display text-6xl sm:text-8xl md:text-9xl leading-none gradient-cyber-text">
            LINEUP
          </h1>
          <p className="text-white/50 text-lg mt-4 max-w-2xl">
            14 artistas. 3 palcos. 3 dias. Conheça quem vai comandar as pistas do PULSE {festival.edition}.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="sticky top-16 md:top-20 z-30 bg-[#07060f]/90 backdrop-blur-xl border-y border-white/10 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex gap-2 overflow-x-auto">
          {days.map((d) => (
            <button
              key={d.id}
              onClick={() => setFilter(d.id as number)}
              className={`px-5 py-2 text-sm font-mono tracking-widest uppercase whitespace-nowrap rounded-sm transition-all duration-200 ${
                filter === d.id
                  ? 'bg-primary text-[#07060f] font-bold'
                  : 'border border-white/15 text-white/50 hover:text-white hover:border-white/40'
              }`}
            >
              {d.label}
            </button>
          ))}
        </div>
      </section>

      {/* Artist Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((artist, i) => {
            const originalIndex = artists.indexOf(artist);
            return (
              <button
                key={artist.name}
                onClick={() => setSelected(originalIndex)}
                className="group relative aspect-[3/4] overflow-hidden rounded-sm border border-white/10 text-left animate-fade-up"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07060f] via-[#07060f]/40 to-transparent" />

                {artist.headliner && (
                  <div className="absolute top-4 left-4 px-3 py-1 bg-secondary text-white font-mono text-xs font-bold tracking-widest">
                    HEADLINER
                  </div>
                )}

                <div className="absolute top-4 right-4 px-2 py-1 bg-[#07060f]/80 backdrop-blur font-mono text-xs text-white/70 tracking-wider">
                  D{artist.day} · {artist.stage}
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className={`font-display text-3xl group-hover:text-primary transition-colors ${artist.headliner ? 'glow-text-secondary' : ''}`}>
                    {artist.name}
                  </h3>
                  <div className="flex items-center justify-between mt-2">
                    <p className="text-white/60 text-sm">{artist.genre}</p>
                    <p className="font-mono text-xs text-white/40">{artist.startTime}</p>
                  </div>
                </div>

                <div className="absolute inset-0 border-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            );
          })}
        </div>
      </section>

      {/* Artist Modal */}
      {selectedArtist && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelected(null)}
        >
          <div className="absolute inset-0 bg-[#07060f]/90 backdrop-blur-xl" />
          <div
            className="relative max-w-2xl w-full bg-[#0d0b1a] border border-white/15 rounded-sm overflow-hidden max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64 sm:h-80">
              <img src={selectedArtist.image} alt={selectedArtist.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0b1a] to-transparent" />
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-[#07060f]/80 backdrop-blur rounded-sm text-white hover:bg-primary hover:text-[#07060f] transition-all"
                aria-label="Fechar"
              >
                ✕
              </button>
              {selectedArtist.headliner && (
                <div className="absolute top-4 left-4 px-3 py-1 bg-secondary text-white font-mono text-xs font-bold tracking-widest">
                  HEADLINER
                </div>
              )}
            </div>
            <div className="p-6 sm:p-8">
              <h2 className="font-display text-5xl gradient-cyber-text mb-2">{selectedArtist.name}</h2>
              <p className="text-white/60 text-sm mb-6">{selectedArtist.genre}</p>
              <p className="text-white/70 leading-relaxed mb-6">{selectedArtist.bio}</p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="border border-white/10 p-4 rounded-sm">
                  <div className="flex items-center gap-2 text-white/40 text-xs font-mono tracking-widest mb-1">
                    <Clock className="w-3 h-3" /> HORÁRIO
                  </div>
                  <div className="text-primary font-mono">{selectedArtist.startTime} — {selectedArtist.endTime}</div>
                </div>
                <div className="border border-white/10 p-4 rounded-sm">
                  <div className="flex items-center gap-2 text-white/40 text-xs font-mono tracking-widest mb-1">
                    <MapPin className="w-3 h-3" /> PALCO
                  </div>
                  <div className="text-primary font-mono">{selectedArtist.stage} STAGE · DIA {selectedArtist.day}</div>
                </div>
              </div>
              <button
                onClick={() => { setSelected(null); navigate('tickets'); }}
                className="w-full py-3 bg-primary text-[#07060f] font-bold uppercase tracking-wide rounded-sm hover:glow-primary transition-all flex items-center justify-center gap-2"
              >
                Garantir Ingresso <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
