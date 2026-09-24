# PULSE 2027 — Festival de Música Eletrônica

Site oficial do **PULSE**, um festival de música eletrônica fictício que acontece no Autódromo de Interlagos, São Paulo, nos dias 24 a 26 de setembro de 2027.

## Sobre o Festival

- **Nome:** PULSE
- **Estilo musical:** Eletrônica (Techno, House, Bass, Synthwave, Drum & Bass, Melodic Techno, Ambient, Acid, Breakbeat)
- **Cidade/Local:** São Paulo — Autódromo de Interlagos
- **Datas:** 24 a 26 de setembro de 2027 (3 dias)
- **Palcos:** Main, Nebula, Bunker
- **Artistas:** 14 artistas inventados (3 headliners + 11 atos de apoio)

## Páginas do Site

O site possui 5 páginas, todas acessíveis pelo menu de navegação:

1. **Home** — Hero com countdown ao vivo, estatísticas do festival, headliners em destaque, galeria de fotos e CTA de ingressos
2. **Lineup** — Grid completo de artistas com fotos, filtro por dia, e modal de detalhes ao clicar em cada artista
3. **Programação (Schedule)** — Timetable organizada por palco e dia, com seletor de dia interativo
4. **Ingressos (Tickets)** — 4 tiers de ingressos (Day Pass, Full Festival, VIP, Ultra Backstage), resumo de compra interativo
5. **Info & FAQ** — Informações sobre o local, palcos, como chegar (transporte público, carro, Uber), e FAQ accordion

## Tecnologias Utilizadas

- **React 18** — Framework JavaScript para UI
- **TypeScript** — Tipagem estática
- **Vite** — Build tool e dev server
- **Tailwind CSS** — Framework de estilos utilitários
- **Lucide React** — Ícones
- **Google Fonts** — Bebas Neue (display), Space Grotesk (body), JetBrains Mono (mono)

## Design

O design foi pensado para refletir a estética da música eletrônica noturna:

- **Paleta de cores:** Fundo escuro (#07060f) com acentos neon — ciano (#00ffd5), magenta (#ff2d95), e violeta (#b14cff)
- **Tipografia:** Bebas Neue condensada para títulos impactantes, Space Grotesk para texto, JetBrains Mono para detalhes técnicos
- **Efeitos:** Glow neon, gradientes cibernéticos, grid de fundo, noise texture, animações de fade-up, marquee, float e pulse
- **Responsivo:** Layout adaptativo de mobile a desktop com breakpoints em sm/md/lg

## Estrutura de Arquivos

```
src/
├── App.tsx              # Componente raiz com roteamento
├── main.tsx             # Entry point
├── index.css            # Design system global (fonts, cores, animações)
├── components/
│   ├── Navbar.tsx       # Navegação fixa com menu mobile
│   └── Footer.tsx       # Rodapé com links e contato
├── hooks/
│   └── usePage.ts       # Hook de roteamento via hash
├── data/
│   └── festival.ts      # Dados do festival (artistas, ingressos, FAQ)
└── pages/
    ├── Home.tsx         # Página inicial
    ├── Lineup.tsx       # Lineup com modal de artista
    ├── Schedule.tsx     # Programação por palco/dia
    ├── Tickets.tsx      # Ingressos e checkout
    └── Info.tsx         # Info + FAQ
```

## Como Rodar

```bash
npm install
npm run dev
```

## Como Publicar na Vercel

1. Faça push do código para um repositório no GitHub
2. Conecte o repositório à Vercel (https://vercel.com/new)
3. A Vercel detecta o Vite automaticamente
4. Build command: `npm run build`
5. Output directory: `dist`

## Desenvolvido com IA

Este site foi construído do começo ao fim com assistência de Inteligência Artificial (Bolt.new), desde a concepção do festival até o design, código e conteúdo. Cada decisão de design foi feita para refletir a personalidade de um festival de música eletrônica noturna em São Paulo.
