/**
 * Conteúdo central do site — Jocelio Lopes.
 *
 * Tudo o que aparece no site sai daqui. Informações marcadas com `confirmado: false`
 * (ou listadas em `pendencias`) ainda precisam ser validadas pelo profissional.
 * Fontes: Instagram @joceliolopes, linktr.ee/jocelio.lopes e a agenda BarberCode
 * (consultados em 10/11/2026).
 */

export const ano = new Date().getFullYear();

export const pessoa = {
  nome: 'Jocelio Lopes',
  primeiroNome: 'Jocelio',
  sobrenome: 'Lopes',
  titulo: 'Barbeiro visagista',
  local: 'Brutus Barbearia · Ribeirão Preto',
  cidade: 'Ribeirão Preto',
  estabelecimento: 'Brutus Barbearia',
  especialidades: ['Tesoura', 'Visagismo'],
} as const;

export const links = {
  /** Agenda online (BarberCode) — destino de todos os botões de agendamento. */
  agendamento: 'https://app.barbercode.com.br/client/brutus-barbearia-rp',
  /** Link direto para "Novo agendamento" (usado na página /links). */
  agendamentoNovo: 'https://app.barbercode.com.br/client/brutus-barbearia-rp/new',
  /** Endereço do site — trocar quando o domínio próprio estiver no ar. */
  site: 'https://jocelio-lopes.vercel.app',
  instagram: 'https://www.instagram.com/joceliolopes',
  instagramHandle: '@joceliolopes',
  tiktok: 'https://www.tiktok.com/@jocelilopess',
  tiktokHandle: '@jocelilopess',
  /**
   * WhatsApp publicado no Linktree como wa.me/16991792077 (sem o código do país).
   * Aqui foi acrescentado o 55 do Brasil para o link abrir corretamente — confirmar com o Jocelio.
   */
  whatsappNumero: '5516991792077',
  whatsappExibicao: '(16) 99179-2077',
  linktree: 'https://linktr.ee/jocelio.lopes',
} as const;

export const whatsappConsultoria = `https://wa.me/${links.whatsappNumero}?text=${encodeURIComponent(
  'Olá, Jocelio! Vim pelo seu site e quero saber mais sobre a consultoria de visagismo.',
)}`;

export const navegacao = [
  { id: 'trabalhos', rotulo: 'Trabalhos' },
  { id: 'visagismo', rotulo: 'Visagismo' },
  { id: 'metodo', rotulo: 'Método' },
  { id: 'sobre', rotulo: 'Sobre' },
  { id: 'agendar', rotulo: 'Agendar' },
] as const;

export const hero = {
  rotulo: 'Barbeiro visagista — Ribeirão Preto',
  frase: ['Antes da tesoura,', 'quem você é.'],
  apresentacao:
    'Cortes personalizados construídos a partir da sua rotina, do seu estilo e da imagem que você quer transmitir. Atendimento na tesoura e consultoria de visagismo na Brutus Barbearia.',
  ctaPrincipal: 'Agendar horário',
  ctaSecundario: 'Ver trabalhos',
  retrato: {
    webp: [
      { src: '/images/jocelio-retrato-640.webp', w: 640 },
      { src: '/images/jocelio-retrato-996.webp', w: 996 },
    ],
    fallback: '/images/jocelio-retrato-996.jpg',
    largura: 996,
    altura: 996,
    alt: 'Retrato em preto e branco de Jocelio Lopes, de camisa branca, com a mão apoiada no rosto.',
  },
} as const;

/** Frase do próprio Jocelio (legenda de 02/07/2026). */
export const manifesto = {
  texto: 'Cortes personalizados não seguem tendências — valorizam quem você é.',
  autor: 'Jocelio Lopes',
};

export type Categoria = 'Tesoura' | 'Visagismo' | 'Barba';

export interface Trabalho {
  id: string;
  titulo: string;
  /** Trecho da legenda publicada pelo próprio Jocelio no Instagram. */
  legenda: string;
  categorias: Categoria[];
  data: string;
  post: string;
  imagem: { webp: string; jpg: string; largura: number; altura: number };
  alt: string;
}

const img = (codigo: string) => ({
  webp: `/images/trabalhos/${codigo}.webp`,
  jpg: `/images/trabalhos/${codigo}.jpg`,
  largura: 360,
  altura: 640,
});

export const categorias: Categoria[] = ['Tesoura', 'Visagismo', 'Barba'];

export const trabalhos: Trabalho[] = [
  {
    id: 'DYniml3OLh4',
    titulo: 'Transformação planejada',
    legenda:
      'O corte, o acabamento e os detalhes foram definidos para valorizar seus traços, transmitir sua personalidade e fortalecer a imagem que você deseja comunicar.',
    categorias: ['Visagismo', 'Barba'],
    data: '21 mai 2026',
    post: 'https://www.instagram.com/joceliolopes/reel/DYniml3OLh4/',
    imagem: img('DYniml3OLh4'),
    alt: 'Cliente de perfil com cabelo ondulado curto e barba desenhada.',
  },
  {
    id: 'DcwgfN9u_5E',
    titulo: 'O corte muda. A imagem também.',
    legenda:
      'Cada detalhe do corte foi trabalhado para valorizar o formato, o caimento e a identidade do cliente.',
    categorias: ['Visagismo', 'Barba'],
    data: '01 set 2026',
    post: 'https://www.instagram.com/joceliolopes/reel/DcwgfN9u_5E/',
    imagem: img('DcwgfN9u_5E'),
    alt: 'Cliente de óculos com cabelo penteado para trás e barba cheia, de perfil.',
  },
  {
    id: 'DccJ04qOkEV',
    titulo: 'Entender antes de cortar',
    legenda:
      'Entender você primeiro, analisar o seu cabelo e, a partir disso, construir um corte que faça sentido para a sua imagem.',
    categorias: ['Tesoura'],
    data: '24 ago 2026',
    post: 'https://www.instagram.com/joceliolopes/reel/DccJ04qOkEV/',
    imagem: img('DccJ04qOkEV'),
    alt: 'Jocelio corta o cabelo de um cliente na tesoura, segurando pente e mecha.',
  },
  {
    id: 'Ddr1yscOods',
    titulo: 'Consultoria',
    legenda:
      'O corte é apenas parte do processo. A verdadeira transformação acontece quando o cliente entende a própria imagem e aprende a usá-la a seu favor.',
    categorias: ['Visagismo'],
    data: '24 set 2026',
    post: 'https://www.instagram.com/joceliolopes/reel/Ddr1yscOods/',
    imagem: img('Ddr1yscOods'),
    alt: 'Cliente de terno azul-marinho e gravata clara, cabelo curto e barba rente, diante de folhagens.',
  },
  {
    id: 'DaTyMr0ozax',
    titulo: 'Movimento natural',
    legenda: 'Cortes personalizados não seguem tendências — valorizam quem você é.',
    categorias: ['Tesoura'],
    data: '02 jul 2026',
    post: 'https://www.instagram.com/joceliolopes/reel/DaTyMr0ozax/',
    imagem: img('DaTyMr0ozax'),
    alt: 'Cabelo longo ondulado, cortado em camadas, visto de perfil.',
  },
  {
    id: 'DZ1CMyfNrYn',
    titulo: 'Mecha a mecha',
    legenda:
      'Cada mecha trabalhada na tesoura, com técnica, precisão e atenção aos detalhes.',
    categorias: ['Tesoura'],
    data: '20 jun 2026',
    post: 'https://www.instagram.com/joceliolopes/reel/DZ1CMyfNrYn/',
    imagem: img('DZ1CMyfNrYn'),
    alt: 'Cliente jovem de perfil com cabelo médio penteado para trás, regata preta.',
  },
  {
    id: 'DYsz8WLulDw',
    titulo: 'Não é apenas um corte',
    legenda:
      'Cada divisão, cada encaixe da tesoura e cada detalhe da execução têm um propósito: criar um resultado harmonioso, personalizado e fácil de manter no dia a dia.',
    categorias: ['Tesoura', 'Barba'],
    data: '23 mai 2026',
    post: 'https://www.instagram.com/joceliolopes/reel/DYsz8WLulDw/',
    imagem: img('DYsz8WLulDw'),
    alt: 'Cliente com cabelo penteado para o lado e barba curta, olhando para o lado.',
  },
  {
    id: 'DYFKnkQO69N',
    titulo: 'Finalização',
    legenda: 'Excelência e qualidade em cada detalhe.',
    categorias: ['Tesoura'],
    data: '08 mai 2026',
    post: 'https://www.instagram.com/joceliolopes/reel/DYFKnkQO69N/',
    imagem: img('DYFKnkQO69N'),
    alt: 'Mão do barbeiro ajusta o volume do cabelo de um cliente de barba, visto de perfil.',
  },
  {
    id: 'DVHczXxETIN',
    titulo: 'Tudo começa no detalhe',
    legenda:
      'Um café, uma boa conversa e um atendimento pensado em você. Do primeiro contato ao resultado final.',
    categorias: ['Visagismo'],
    data: '23 fev 2026',
    post: 'https://www.instagram.com/joceliolopes/reel/DVHczXxETIN/',
    imagem: img('DVHczXxETIN'),
    alt: 'Cliente de capa na cadeira, conversando durante o atendimento.',
  },
];

export const visagismo = {
  rotulo: 'Consultoria de visagismo',
  titulo: ['Seu rosto já diz muito.', 'O corte deveria concordar.'],
  /** Descrição usada pelo próprio Jocelio no serviço da agenda BarberCode. */
  definicao:
    'Visagismo é a técnica que cria uma imagem personalizada a partir dos traços do rosto, do estilo de vida e da personalidade de cada pessoa. O objetivo é harmonizar cabelo e barba para valorizar a sua identidade e transmitir, de forma intencional, a imagem que você deseja passar.',
  comparacao: {
    acaso: {
      titulo: 'Corte escolhido ao acaso',
      itens: [
        'Começa por uma foto de referência de outra pessoa.',
        'Segue a tendência do momento.',
        'Fica bom ao sair da cadeira — e se perde em casa.',
      ],
    },
    consultoria: {
      titulo: 'Corte com consultoria',
      itens: [
        'Começa pelos seus traços, sua rotina e seu estilo.',
        'É pensado para a imagem que você quer transmitir.',
        'Você aprende a manter e a pentear o resultado no dia a dia.',
      ],
    },
  },
  duracao: '2h30',
  notaAgenda: 'Na agenda, escolha “Consultoria visagista com Jocélio Lopez”.',
  ctaContato: 'Conversar sobre a consultoria',
  ctaAgendar: 'Agendar consultoria',
};

export interface Etapa {
  numero: string;
  nome: string;
  texto: string;
  /** `true` quando a etapa foi descrita pelo próprio Jocelio. */
  confirmado: boolean;
}

/** Método descrito pelo Jocelio em publicação de 24/09/2026: “Entender. Conscientizar. Aplicar.” */
export const metodo = {
  rotulo: 'Metodologia',
  titulo: 'Entender. Conscientizar. Aplicar.',
  abertura: 'Tudo começa no detalhe: um café, uma boa conversa e um atendimento pensado em você.',
  fonte: { texto: 'Nas palavras do Jocelio — publicação de 24/09/2026', url: 'https://www.instagram.com/joceliolopes/reel/Ddr1yscOods/' },
  etapas: [
    {
      numero: '01',
      nome: 'Entender',
      texto:
        'Antes de pensar no corte, procuro entender quem está na minha frente: sua rotina, seu estilo, suas necessidades e o que você realmente busca.',
      confirmado: true,
    },
    {
      numero: '02',
      nome: 'Conscientizar',
      texto: 'A partir disso, mostro como o cabelo pode funcionar melhor no seu dia a dia.',
      confirmado: true,
    },
    {
      numero: '03',
      nome: 'Aplicar',
      texto:
        'Ensino, de forma simples, como reproduzir o resultado em casa — inclusive a maneira correta de pentear.',
      confirmado: true,
    },
  ] satisfies Etapa[],
  fechamento:
    'Não adianta entregar um corte bonito se o cliente não sabe como usar. A verdadeira transformação acontece quando você entende a própria imagem e aprende a usá-la a seu favor.',
};

export const sobre = {
  rotulo: 'Sobre',
  titulo: 'Construir resultados, não só fazer cortes.',
  paragrafos: [
    'Jocelio Lopes é barbeiro visagista e atende na Brutus Barbearia, em Ribeirão Preto. Seu trabalho é na tesoura: cada atendimento parte de uma conversa para entender a pessoa antes de definir o corte.',
    'Em 2024, passou dois dias aprendendo com o visagista Ronan Mendes. Da experiência, ficou uma convicção que hoje guia cada atendimento: o resultado é consequência de um trabalho personalizado.',
  ],
  citacao:
    'O visagismo não é só uma consultoria, não é só um corte de cabelo. É elevar a imagem de outra pessoa, fazer ela se reconectar e enxergar o potencial que ela tem.',
  foto: {
    webp: [
      { src: '/images/jocelio-e-pai-768.webp', w: 768 },
      { src: '/images/jocelio-e-pai-1200.webp', w: 1200 },
    ],
    fallback: '/images/jocelio-e-pai-1200.jpg',
    largura: 1200,
    altura: 1600,
    alt: 'Jocelio Lopes em pé, com a mão no ombro do pai, sentado na cadeira da barbearia.',
    legenda:
      '“Desde que me tornei barbeiro, ainda não tinha tido a oportunidade de cortar o cabelo do meu pai. Hoje, finalmente, consegui.” — agosto de 2026',
  },
};

/** Serviços em que o Jocelio aparece na agenda BarberCode (sem preços). */
export const servicos = [
  'Consultoria visagista',
  'Corte',
  'Cabelo longo na tesoura',
  'Barba',
  'Barba com ozonioterapia',
  'Sobrancelha',
  'Coloração de barba',
  'Hidratação com vapor de ozônio',
  'Selante',
  'Platinado + corte',
  'Luzes',
  'Corte infantil (até 6 anos)',
];

export const agendamento = {
  rotulo: 'Agendamento',
  titulo: ['Seu horário', 'está a um toque.'],
  texto:
    'A agenda é online, pelo BarberCode da Brutus Barbearia. Você escolhe o serviço, o profissional e o horário disponível — sem precisar ligar.',
  passos: [
    'Toque em “Agendar horário” e depois em “Novo agendamento”.',
    'Escolha “Consultoria visagista” ou um serviço em “Atendimento: Uilian, Dionatan e Jocelio”.',
    'Selecione Jocélio Lopes como profissional e confirme o horário.',
  ],
  cta: 'Agendar horário',
};

export const instagram = {
  rotulo: 'Instagram',
  titulo: 'Mais trabalhos, toda semana.',
  texto: 'Reels de cortes, bastidores do atendimento e o processo da consultoria.',
  destaques: ['DYsz8WLulDw', 'Ddr1yscOods', 'DcwgfN9u_5E', 'DaTyMr0ozax', 'DccJ04qOkEV', 'DYniml3OLh4'],
};

export const seo = {
  titulo: 'Jocelio Lopes — Barbeiro visagista em Ribeirão Preto',
  descricao:
    'Cortes personalizados na tesoura e consultoria de visagismo com Jocelio Lopes, na Brutus Barbearia em Ribeirão Preto. Veja os trabalhos e agende online.',
};
