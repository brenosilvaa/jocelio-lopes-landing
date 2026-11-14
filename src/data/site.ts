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
  { id: 'sobre', rotulo: 'Sobre' },
  { id: 'consultoria', rotulo: 'Consultoria' },
  { id: 'metodo', rotulo: 'Metodologia' },
  { id: 'resultados', rotulo: 'Resultados' },
  { id: 'agendar', rotulo: 'Agendar' },
] as const;

export const hero = {
  rotulo: 'Barbeiro visagista — Ribeirão Preto',
  frase: ['Antes da tesoura,', 'quem você é.'],
  apresentacao:
    'Cada rosto tem características. Cada pessoa tem uma identidade. Meu trabalho é compreender esses elementos para construir uma imagem que represente você.',
  ctaPrincipal: 'Agendar horário',
  ctaSecundario: 'Conheça meu trabalho',
  retrato: {
    webp: [
      { src: '/images/jocelio-abertura-640.webp', w: 640 },
      { src: '/images/jocelio-abertura-1168.webp', w: 1168 },
    ],
    fallback: '/images/jocelio-abertura-1168.jpg',
    largura: 1168,
    altura: 1600,
    alt: 'Jocelio Lopes, barbeiro visagista, de camisa branca, sentado e com a mão apoiada no rosto.',
  },
} as const;

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
  pergunta: 'Você sabe se o corte que usa hoje realmente valoriza suas características faciais?',
  definicao:
    'Na consultoria, analiso características faciais, linhas, proporções, perfil comportamental e identidade para desenvolver uma proposta de imagem alinhada àquilo que você deseja comunicar.',
  frase: 'Não se trata apenas de como você quer se ver, mas de como deseja ser percebido.',
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
  rotulo: 'Método Jocelio Lopes',
  titulo: 'Entender. Conscientizar. Aplicar.',
  abertura: 'A arquitetura da imagem masculina. Tudo começa no detalhe: um café, uma boa conversa e um atendimento pensado em você.',
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
  titulo: 'Tudo começou com uma decisão, em 2021.',
  paragrafos: [
    'Quando decidi entrar para a barbearia, talvez ainda não imaginasse o quanto essa escolha transformaria a minha trajetória.',
    'Comecei aprendendo, observando e desenvolvendo minhas habilidades. Com o tempo, percebi que não queria apenas dominar técnicas de corte: queria compreender melhor as pessoas e o impacto que uma imagem bem construída pode ter na vida de alguém.',
    'Foi essa busca por conhecimento que me aproximou do visagismo. Passei a entender que cada rosto tem proporções, características e particularidades, e que um bom profissional precisa saber interpretar tudo isso antes de executar qualquer técnica.',
    'Hoje, atuo como barbeiro visagista na Brutus Barbearia, em Ribeirão Preto, unindo técnica, análise e identidade em cada atendimento.',
  ],
  citacao: 'Minha profissão é a barbearia. Meu compromisso é ajudar pessoas a expressarem sua identidade através da imagem.',
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
  titulo: ['Sua próxima transformação', 'começa aqui.'],
  texto:
    'A agenda é online, pelo BarberCode da Brutus Barbearia. Você escolhe o serviço, o profissional e o horário disponível — sem precisar ligar.',
  passos: [
    'Toque em “Agendar horário” e depois em “Novo agendamento”.',
    'Escolha “Consultoria visagista” ou um serviço em “Atendimento: Uilian, Dionatan e Jocelio”.',
    'Selecione Jocélio Lopes como profissional e confirme o horário.',
  ],
  cta: 'Agendar horário',
};

export const seo = {
  titulo: 'Jocelio Lopes — Barbeiro visagista em Ribeirão Preto',
  descricao:
    'Cortes personalizados na tesoura e consultoria de visagismo com Jocelio Lopes, na Brutus Barbearia em Ribeirão Preto. Veja os trabalhos e agende online.',
};
