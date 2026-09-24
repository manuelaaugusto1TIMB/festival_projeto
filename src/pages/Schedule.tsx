import { useState } from 'react';
import { Clock, MapPin } from 'lucide-react';
import { artists, festival } from '@/data/festival';

const STAGE_COLORS: Record<string, string> = {
  Main: 'text-primary border-primary',
  Nebula: 'text-secondary border-secondary',
  Bunker: 'text-accent border-accent',
};

const STAGE_BG: Record<string, string> = {
  Main: 'bg-primary/10',
  Nebula: 'bg-secondary/10',
  Bunker: 'bg-accent/10',
};

export default function Schedule() {
  const [activeDay, setActiveDay] = useState(1);

  const dayArtists = artists
    .filter((a) => a.day === activeDay)
    .sort((a, b) => a.startTime.localeCompare(b.startTime));

  const stages = ['Main', 'Nebula', 'Bunker'] as const;

  return (
    <div className="animate-fade-in pt-20">
      {/* Header */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="relative">
          <p className="font-mono text-xs text-primary tracking-widest mb-4">PROGRAMAÇÃO</p>
          <h1 className="font-display text-6xl sm:text-8xl md:text-9xl leading-none gradient-cyber-text">
            TIMETABLE
          </h1>
          <p className="text-white/50 text-lg mt-4 max-w-2xl">
            Veja exatamente quando e onde cada artista se apresenta. Não perca um único beat.
          </p>
        </div>
      </section>

      {/* Day Selector */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-12">
        <div className="grid grid-cols-3 gap-3">
          {festival.days.map((day) => (
            <button
              key={day.id}
              onClick={() => setActiveDay(day.id)}
              className={`relative p-6 border rounded-sm text-left transition-all duration-300 overflow-hidden ${
                activeDay === day.id
                  ? 'border-primary bg-primary/5 glow-primary'
                  : 'border-white/10 hover:border-white/30'
              }`}
            >
              <div className={`font-mono text-xs tracking-widest ${activeDay === day.id ? 'text-primary' : 'text-white/40'}`}>
                {day.weekday}
              </div>
              <div className="font-display text-3xl sm:text-5xl mt-1">{day.date}</div>
              <div className="text-white/50 text-xs sm:text-sm mt-1 uppercase tracking-wide">{day.title}</div>
              {activeDay === day.id && (
                <div className="absolute top-0 right-0 w-2 h-full bg-primary" />
              )}
            </button>
          ))}
        </div>
      </section>

      {/* Schedule Grid */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-24">
        {/* Desktop: columns by stage */}
        <div className="hidden md:grid grid-cols-3 gap-6">
          {stages.map((stage) => {
            const stageArtists = dayArtists.filter((a) => a.stage === stage);
            return (
              <div key={stage}>
                <div className={`border-b-2 ${STAGE_COLORS[stage]} pb-3 mb-4`}>
                  <h3 className="font-display text-3xl">{stage} STAGE</h3>
                  <p className="text-white/40 text-xs font-mono mt-1">
                    {festival.stages.find((s) => s.name === stage)?.capacity} pessoas
                  </p>
                </div>
                <div className="space-y-3">
                  {stageArtists.length === 0 ? (
                    <p className="text-white/30 text-sm py-8 text-center border border-dashed border-white/10 rounded-sm">
                      Nenhuma apresentação
                    </p>
                  ) : (
                    stageArtists.map((artist) => (
                      <div
                        key={artist.name}
                        className={`group p-4 border border-white/10 rounded-sm hover:${STAGE_BG[stage]} hover:border-white/20 transition-all duration-200`}
                      >
                        <div className="flex items-start justify-between mb-2">
                          <div className="font-mono text-xs text-white/40">{artist.startTime}–{artist.endTime}</div>
                          {artist.headliner && (
                            <span className="px-2 py-0.5 bg-secondary/20 text-secondary text-[10px] font-mono font-bold tracking-widest">
                              HEADLINER
                            </span>
                          )}
                        </div>
                        <h4 className={`font-display text-2xl ${artist.headliner ? 'text-white' : 'text-white/80'} group-hover:text-primary transition-colors`}>
                          {artist.name}
                        </h4>
                        <p className="text-white/40 text-xs mt-0.5">{artist.genre}</p>
                      </div>
                    ))
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile: list */}
        <div className="md:hidden space-y-4">
          {dayArtists.map((artist) => (
            <div
              key={artist.name}
              className={`p-4 border rounded-sm ${STAGE_COLORS[artist.stage]} bg-white/[0.02]`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`font-mono text-xs ${STAGE_COLORS[artist.stage].split(' ')[0]}`}>
                  {artist.startTime}–{artist.endTime}
                </span>
                <span className={`px-2 py-0.5 border text-[10px] font-mono tracking-widest ${STAGE_COLORS[artist.stage]}`}>
                  {artist.stage}
                </span>
              </div>
              <h4 className="font-display text-2xl text-white">{artist.name}</h4>
              <p className="text-white/40 text-xs mt-0.5">{artist.genre}</p>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="mt-12 flex flex-wrap gap-6 items-center justify-center text-xs font-mono">
          {stages.map((stage) => (
            <div key={stage} className="flex items-center gap-2">
              <span className={`w-3 h-3 border-2 ${STAGE_COLORS[stage]}`} />
              <span className="text-white/50">{stage} STAGE</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
