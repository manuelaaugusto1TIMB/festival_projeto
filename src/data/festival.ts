export interface Artist {
  name: string;
  genre: string;
  day: number;
  stage: 'Main' | 'Nebula' | 'Bunker';
  startTime: string;
  endTime: string;
  headliner: boolean;
  bio: string;
  image: string;
}

export interface TicketTier {
  name: string;
  price: string;
  description: string;
  perks: string[];
  highlight: boolean;
  soldOut: boolean;
}

export const festival = {
  name: 'PULSE',
  tagline: 'São Paulo Electronic Music Festival',
  edition: '2027',
  city: 'São Paulo, BR',
  venue: 'Autódromo de Interlagos',
  dates: '24–26 de Setembro, 2027',
  days: [
    { id: 1, date: '24 SET', weekday: 'Sexta', title: 'OPENING NIGHT' },
    { id: 2, date: '25 SET', weekday: 'Sábado', title: 'PEAK NIGHT' },
    { id: 3, date: '26 SET', weekday: 'Domingo', title: 'CLOSING NIGHT' },
  ],
  stages: [
    { name: 'Main', description: 'O palco principal. Produção de luz e som de classe mundial.', capacity: '40.000' },
    { name: 'Nebula', description: 'Techno e house em um domo imersivo com projeções 360°.', capacity: '15.000' },
    { name: 'Bunker', description: 'Underground e bass music em um espaço industrial subterrâneo.', capacity: '8.000' },
  ],
};

export const artists: Artist[] = [
  { name: 'NOVA WAVES', genre: 'Techno', day: 1, stage: 'Main', startTime: '23:30', endTime: '01:00', headliner: true, bio: 'Headliner de Berlim que constrói sets hipnóticos com camadas de synths analógicos e percussão implacável.', image: 'https://images.pexels.com/photos/7315526/pexels-photo-7315526.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { name: 'KAIRO', genre: 'House', day: 1, stage: 'Main', startTime: '21:00', endTime: '23:00', headliner: false, bio: 'DJ londrino que mistura deep house com influências afro-brasileiras, criando grooves contagiantes.', image: 'https://images.pexels.com/photos/6940467/pexels-photo-6940467.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { name: 'SPECTRA', genre: 'Synthwave', day: 1, stage: 'Nebula', startTime: '22:00', endTime: '00:00', headliner: false, bio: 'Projeto solo de retrô-futurismo com sintetizadores modulares e visuais VHS customizados.', image: 'https://images.pexels.com/photos/2597901/pexels-photo-2597901.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { name: 'VOID PULSE', genre: 'Dubstep', day: 1, stage: 'Bunker', startTime: '23:00', endTime: '01:30', headliner: false, bio: 'Dupla de Bristol conhecida por drops brutais e basslines que fazem o chão tremer.', image: 'https://images.pexels.com/photos/8726478/pexels-photo-8726478.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { name: 'AZURE', genre: 'Progressive', day: 1, stage: 'Nebula', startTime: '20:00', endTime: '22:00', headliner: false, bio: 'Talentosa produtora holandesa de progressive house com melodias etéreas e builds cinematográficas.', image: 'https://images.pexels.com/photos/13989672/pexels-photo-13989672.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },

  { name: 'ECLIPSE', genre: 'Hard Techno', day: 2, stage: 'Main', startTime: '00:00', endTime: '02:00', headliner: true, bio: 'Headliner alemão de hard techno com 150+ BPM, kicks distorcidos e uma energia que não abaixa.', image: 'https://images.pexels.com/photos/6942388/pexels-photo-6942388.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { name: 'LUNA REX', genre: 'Tech House', day: 2, stage: 'Main', startTime: '22:00', endTime: '00:00', headliner: false, bio: 'DJ argentina que domina o tech house com basslines funky e vocais sampled ao vivo.', image: 'https://images.pexels.com/photos/4483349/pexels-photo-4483349.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { name: 'MODULAR', genre: 'Acid', day: 2, stage: 'Nebula', startTime: '23:00', endTime: '01:00', headliner: false, bio: 'Veterano do acid com um setup modular inteiro no palco, criando texturas TB-303 ao vivo.', image: 'https://images.pexels.com/photos/10044424/pexels-photo-10044424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { name: 'FRAGMENT', genre: 'Drum & Bass', day: 2, stage: 'Bunker', startTime: '22:30', endTime: '00:30', headliner: false, bio: 'Produtor brasileiro de D&B que traz breakbeats complexos e sub-basses profundas.', image: 'https://images.pexels.com/photos/16580468/pexels-photo-16580468.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { name: 'HALO', genre: 'Melodic Techno', day: 2, stage: 'Nebula', startTime: '21:00', endTime: '23:00', headliner: false, bio: 'Rising star do melodic techno com arranjos emocionais e atmosferas cinematográficas.', image: 'https://images.pexels.com/photos/31923252/pexels-photo-31923252.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },

  { name: 'AFTERLIFE', genre: 'Melodic Techno', day: 3, stage: 'Main', startTime: '23:00', endTime: '01:00', headliner: true, bio: 'Headliner de encerramento,Experience imersiva com melodic techno, visuais mapeados e performance ao vivo.', image: 'https://images.pexels.com/photos/7715459/pexels-photo-7715459.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { name: 'BASSLINE KID', genre: 'Bass House', day: 3, stage: 'Main', startTime: '21:00', endTime: '23:00', headliner: false, bio: 'DJ americano de bass house com womps pesados e remixes inesperados que inflam a pista.', image: 'https://images.pexels.com/photos/15262993/pexels-photo-15262993.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { name: 'IRIS', genre: 'Ambient', day: 3, stage: 'Nebula', startTime: '19:30', endTime: '21:00', headliner: false, bio: 'Sets ambient de encerramento perfeitos para o pôr-do-sol, com field recordings e pads etéreos.', image: 'https://images.pexels.com/photos/9534912/pexels-photo-9534912.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { name: 'CRASH', genre: 'Breakbeat', day: 3, stage: 'Bunker', startTime: '22:00', endTime: '00:00', headliner: false, bio: 'Dupla britânica de breakbeat com ritmo acelerado e samples old-school que respeitam as raízes.', image: 'https://images.pexels.com/photos/8448561/pexels-photo-8448561.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
];

export const tickets: TicketTier[] = [
  {
    name: 'DAY PASS',
    price: 'R$ 180',
    description: 'Acesso para um dia à sua escolta.',
    perks: ['Acesso a um dia (24, 25 ou 26 set)', 'Todos os 3 palcos', 'Áreas de alimentação', 'Reentrada permitida'],
    highlight: false,
    soldOut: false,
  },
  {
    name: 'FULL FESTIVAL',
    price: 'R$ 420',
    description: 'Os três dias completos de PULSE.',
    perks: ['Acesso aos 3 dias', 'Todos os 3 palcos', 'Áreas de alimentação', 'Reentrada permitida', 'Bebida de cortesia no 1º dia'],
    highlight: true,
    soldOut: false,
  },
  {
    name: 'VIP EXPERIENCE',
    price: 'R$ 890',
    description: 'Experiência completa com acesso VIP.',
    perks: ['Acesso aos 3 dias', 'Todos os 3 palcos', 'Lounge VIP com bar aberto', 'Vista privilegiada do Main Stage', 'Entrada expressa sem fila', 'Kit exclusivo PULSE 2027'],
    highlight: false,
    soldOut: false,
  },
  {
    name: 'ULTRA BACKSTAGE',
    price: 'R$ 1.800',
    description: 'Tudo do VIP + acesso backstage.',
    perks: ['Tudo do VIP Experience', 'Acesso backstage completo', 'Meet & greet com headliners', 'Jantar no backstage', 'Transfer ida e volta', 'Camiseta autografada da edição'],
    highlight: false,
    soldOut: true,
  },
];

export const faqs = [
  { q: 'Posso entrar e sair do festival?', a: 'Sim. Todos os ingressos permitem reentrada. Basta apresentar seu pulseira e QR code na entrada.' },
  { q: 'Qual a idade mínima?', a: 'O festival é recomendado para maiores de 18 anos. Menores de 18 podem entrar acompanhados de responsável legal com documento.' },
  { q: 'Posso levar câmera profissional?', a: 'Câmeras sem lentes destacáveis são permitidas. Câmeras profissionais precisam de credencial de imprensa.' },
  { q: 'Há estacionamento no local?', a: 'Sim, o Autódromo de Interlagos possui estacionamento com 5.000 vagas. Recomendamos chegar cedo ou usar transporte público (Linha 9–Esmeralda).' },
  { q: 'O que não posso levar?', a: 'Não são permitidos: alimentos, bebidas, objetos cortantes, fogos de artifício, laser pointers e equipamentos de drone.' },
  { q: 'Como funciona o reembolso?', a: 'Reembolsos totais são possíveis até 30 dias após a compra. Após esse período, o ingresso pode ser transferido para outra pessoa.' },
];

export const galleryImages = [
  'https://images.pexels.com/photos/9534913/pexels-photo-9534913.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/1677710/pexels-photo-1677710.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/7192861/pexels-photo-7192861.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/18447992/pexels-photo-18447992.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/7081160/pexels-photo-7081160.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/13146356/pexels-photo-13146356.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
];
