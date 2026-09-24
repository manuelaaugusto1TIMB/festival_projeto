import { useState } from 'react';
import { Check, X, Zap, Ticket, Minus, Plus } from 'lucide-react';
import { tickets, festival } from '@/data/festival';

function parsePrice(price: string): number {
  return parseFloat(price.replace(/[^\d,]/g, '').replace(',', '.'));
}

function formatPrice(value: number): string {
  return 'R$ ' + value.toFixed(2).replace('.', ',');
}

export default function Tickets() {
  const [selected, setSelected] = useState(1);
  const [quantity, setQuantity] = useState(1);

  const ticket = tickets[selected];
  const unitPrice = parsePrice(ticket.price);
  const serviceFee = 24.9 * quantity;
  const total = unitPrice * quantity + serviceFee;
  const isSoldOut = ticket.soldOut;

  const handleSelect = (i: number) => {
    if (tickets[i].soldOut) return;
    setSelected(i);
    setQuantity(1);
  };

  const decreaseQty = () => setQuantity((q) => Math.max(1, q - 1));
  const increaseQty = () => setQuantity((q) => Math.min(10, q + 1));

  return (
    <div className="animate-fade-in pt-20">
      {/* Header */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="relative text-center">
          <p className="font-mono text-xs text-primary tracking-widest mb-4">INGRESSOS</p>
          <h1 className="font-display text-6xl sm:text-8xl md:text-9xl leading-none gradient-cyber-text">
            GARANTA SEU LUGAR
          </h1>
          <p className="text-white/50 text-lg mt-4 max-w-2xl mx-auto">
            Escolha o passe que faz sentido para você. Todos incluem acesso aos 3 palcos e áreas de alimentação.
          </p>
        </div>
      </section>

      {/* Ticket Cards */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tickets.map((ticket, i) => {
            const isSelected = selected === i;
            return (
              <div
                key={ticket.name}
                className={`relative border-2 rounded-sm p-6 flex flex-col animate-fade-up transition-all duration-300 ${
                  ticket.soldOut
                    ? 'border-white/10 opacity-50'
                    : isSelected
                    ? 'border-primary bg-gradient-to-b from-primary/10 to-transparent glow-primary'
                    : ticket.highlight
                    ? 'border-primary/40 bg-gradient-to-b from-primary/5 to-transparent hover:border-primary'
                    : 'border-white/10 bg-white/[0.02] hover:border-white/25'
                }`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {ticket.highlight && !ticket.soldOut && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-[#07060f] font-mono text-xs font-bold tracking-widest rounded-sm whitespace-nowrap">
                    MAIS POPULAR
                  </div>
                )}

                {ticket.soldOut && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-error/20 text-error font-mono text-xs font-bold tracking-widest border border-error/30">
                    ESGOTADO
                  </div>
                )}

                {!ticket.soldOut && isSelected && (
                  <div className="absolute top-4 right-4 w-7 h-7 bg-primary text-[#07060f] rounded-full flex items-center justify-center font-bold">
                    <Check className="w-4 h-4" strokeWidth={3} />
                  </div>
                )}

                <div className="mb-4">
                  <h3 className="font-display text-2xl tracking-wide">{ticket.name}</h3>
                  <p className="text-white/40 text-xs mt-1">{ticket.description}</p>
                </div>

                <div className="mb-6">
                  <div className="font-display text-5xl gradient-cyber-text">{ticket.price}</div>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {ticket.perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-2 text-sm text-white/60">
                      <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>

                <button
                  disabled={ticket.soldOut}
                  onClick={() => handleSelect(i)}
                  className={`w-full py-3 font-bold uppercase tracking-wide rounded-sm transition-all duration-200 flex items-center justify-center gap-2 ${
                    ticket.soldOut
                      ? 'bg-white/5 text-white/30 cursor-not-allowed'
                      : isSelected
                      ? 'bg-primary text-[#07060f]'
                      : ticket.highlight
                      ? 'bg-primary text-[#07060f] hover:glow-primary'
                      : 'border border-white/20 text-white hover:border-primary hover:text-primary'
                  }`}
                >
                  {ticket.soldOut ? (
                    <>Esgotado <X className="w-4 h-4" /></>
                  ) : isSelected ? (
                    <>Selecionado <Check className="w-4 h-4" strokeWidth={3} /></>
                  ) : (
                    <>Selecionar <Ticket className="w-4 h-4" /></>
                  )}
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* Checkout Summary */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto pb-24">
        <div className="border border-white/10 bg-gradient-to-br from-[#0d0b1a] to-[#131022] rounded-sm p-8">
          <h2 className="font-display text-3xl mb-6 flex items-center gap-2">
            <Zap className="w-6 h-6 text-primary" fill="currentColor" />
            RESUMO DA COMPRA
          </h2>

          <div className="space-y-3 mb-6">
            <div className="flex items-center justify-between py-3 border-b border-white/10">
              <span className="text-white/60 text-sm">Ingresso selecionado</span>
              <span className="font-display text-xl text-primary">{ticket.name}</span>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-white/10">
              <span className="text-white/60 text-sm">Valor unitário</span>
              <span className="font-mono text-white/70">{ticket.price}</span>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-white/10">
              <span className="text-white/60 text-sm">Quantidade</span>
              <div className="flex items-center gap-3">
                <button
                  onClick={decreaseQty}
                  disabled={quantity <= 1}
                  className="w-8 h-8 border border-white/20 rounded-sm text-white hover:border-primary hover:text-primary transition-colors flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed"
                  aria-label="Diminuir"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="font-mono text-lg w-8 text-center tabular-nums">{quantity}</span>
                <button
                  onClick={increaseQty}
                  disabled={quantity >= 10}
                  className="w-8 h-8 border border-white/20 rounded-sm text-white hover:border-primary hover:text-primary transition-colors flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed"
                  aria-label="Aumentar"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-white/10">
              <span className="text-white/60 text-sm">Subtotal ({quantity}x)</span>
              <span className="font-mono text-white/70">{formatPrice(unitPrice * quantity)}</span>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-white/10">
              <span className="text-white/60 text-sm">Taxa de serviço</span>
              <span className="font-mono text-white/70">{formatPrice(serviceFee)}</span>
            </div>
            <div className="flex items-center justify-between py-4">
              <span className="font-display text-2xl">TOTAL</span>
              <span className="font-display text-4xl gradient-cyber-text">{formatPrice(total)}</span>
            </div>
          </div>

          <button
            disabled={isSoldOut}
            className={`w-full py-4 font-bold uppercase tracking-wide rounded-sm transition-all duration-200 flex items-center justify-center gap-2 ${
              isSoldOut
                ? 'bg-white/5 text-white/30 cursor-not-allowed'
                : 'bg-primary text-[#07060f] hover:glow-primary'
            }`}
          >
            {isSoldOut ? 'Ingresso Esgotado' : 'Finalizar Compra'}
            {!isSoldOut && <Zap className="w-5 h-5" fill="currentColor" />}
          </button>

          <p className="text-white/30 text-xs font-mono text-center mt-4">
            Pagamento seguro · Cartão, PIX ou boleto · {festival.dates}
          </p>
        </div>
      </section>
    </div>
  );
}
