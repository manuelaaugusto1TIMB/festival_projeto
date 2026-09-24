import { useState } from 'react';
import { MapPin, Navigation, Car, Train, Clock, Shield, HelpCircle, Plus, Minus } from 'lucide-react';
import { festival, faqs } from '@/data/festival';

const VENUE_IMG = 'https://images.pexels.com/photos/3661650/pexels-photo-3661650.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

export default function Info() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="animate-fade-in pt-20">
      {/* Header */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="relative">
          <p className="font-mono text-xs text-primary tracking-widest mb-4">INFORMAÇÕES</p>
          <h1 className="font-display text-6xl sm:text-8xl md:text-9xl leading-none gradient-cyber-text">
            INFO & FAQ
          </h1>
          <p className="text-white/50 text-lg mt-4 max-w-2xl">
            Tudo que você precisa saber para aproveitar o PULSE ao máximo.
          </p>
        </div>
      </section>

      {/* Venue */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm group">
            <img src={VENUE_IMG} alt="Venue" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07060f] to-transparent" />
            <div className="absolute bottom-4 left-4 px-4 py-2 bg-[#07060f]/80 backdrop-blur rounded-sm">
              <div className="font-mono text-xs text-primary tracking-widest">LOCAL</div>
              <div className="font-display text-2xl">{festival.venue}</div>
            </div>
          </div>

          <div>
            <h2 className="font-display text-4xl sm:text-5xl mb-6">O LOCAL</h2>
            <p className="text-white/60 leading-relaxed mb-8">
              O Autódromo de Interlagos é um dos espaços mais icônicos de São Paulo. Com 200.000 m² de área, vira um complexo de festival completo: 3 palcos, áreas VIP, zona de alimentação, ferramentas de arte e muito espaço para dançar.
            </p>

            <div className="space-y-4">
              {[
                { icon: MapPin, label: 'Endereço', value: 'Av. Senador Teotônio Vilela, 261 — Interlagos, São Paulo' },
                { icon: Clock, label: 'Horário', value: 'Abertura 18h · Encerramento 03h (todos os dias)' },
                { icon: Shield, label: 'Capacidade', value: '63.000 pessoas por dia' },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4 border border-white/10 p-4 rounded-sm bg-white/[0.02]">
                  <item.icon className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <div className="font-mono text-xs text-white/40 tracking-widest mb-1">{item.label.toUpperCase()}</div>
                    <div className="text-white/80 text-sm">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stages */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-16">
        <p className="font-mono text-xs text-primary tracking-widest mb-3">PALCOS</p>
        <h2 className="font-display text-5xl sm:text-6xl mb-10">TRÊS EXPERIÊNCIAS</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {festival.stages.map((stage, i) => {
            const colors = ['border-primary text-primary', 'border-secondary text-secondary', 'border-accent text-accent'];
            return (
              <div key={stage.name} className={`border-l-4 ${colors[i]} bg-white/[0.02] p-6 rounded-sm`}>
                <h3 className="font-display text-3xl mb-2">{stage.name} STAGE</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-4">{stage.description}</p>
                <div className="font-mono text-xs text-white/40">
                  Capacidade: {stage.capacity} pessoas
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* How to get there */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-16">
        <p className="font-mono text-xs text-primary tracking-widest mb-3">COMO CHEGAR</p>
        <h2 className="font-display text-5xl sm:text-6xl mb-10">ACESSO</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Train, title: 'Transporte Público', desc: 'Linha 9–Esmeralda da CPTM até a Estação Autódromo. De lá, 10 min a pé até a entrada.' },
            { icon: Car, title: 'Carro', desc: 'Estacionamento com 5.000 vagas no local. R$ 60 por dia. Recomendamos carona para evitar trânsito.' },
            { icon: Navigation, title: 'Uber / Táxi', desc: 'Ponto de embarque e desembarque na Portaria A. Siga as sinalizações do app.' },
          ].map((item) => (
            <div key={item.title} className="border border-white/10 p-6 rounded-sm hover:border-primary/50 transition-colors">
              <item.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-display text-2xl mb-2">{item.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto py-16 pb-24">
        <p className="font-mono text-xs text-primary tracking-widest mb-3">DÚVIDAS FREQUENTES</p>
        <h2 className="font-display text-5xl sm:text-6xl mb-10">FAQ</h2>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`border rounded-sm overflow-hidden transition-all duration-200 ${
                openFaq === i ? 'border-primary/40 bg-primary/5' : 'border-white/10'
              }`}
            >
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="flex items-center gap-3">
                  <HelpCircle className={`w-5 h-5 shrink-0 ${openFaq === i ? 'text-primary' : 'text-white/40'}`} />
                  <span className="text-white/90 text-sm sm:text-base">{faq.q}</span>
                </span>
                {openFaq === i ? <Minus className="w-5 h-5 text-primary shrink-0" /> : <Plus className="w-5 h-5 text-white/40 shrink-0" />}
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openFaq === i ? 'max-h-48' : 'max-h-0'
                }`}
              >
                <p className="px-5 pb-5 pl-13 text-white/60 text-sm leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
