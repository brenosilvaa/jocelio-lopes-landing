/**
 * Teste de arquétipo — inspirado no modelo de quatro arquétipos de Moore & Gillette
 * ("Rei, Guerreiro, Mago, Amante", 1993), o mesmo usado no teste de referência da Creative Hut.
 *
 * RASCUNHO: perguntas, descrições e sugestões de imagem foram escritas para o site e
 * devem ser revisadas pelo Jocelio. Para editar, basta mudar os textos abaixo.
 */

export type Arquetipo = 'rei' | 'guerreiro' | 'mago' | 'amante';

export interface Opcao {
  texto: string;
  arquetipo: Arquetipo;
}

export interface Pergunta {
  enunciado: string;
  opcoes: Opcao[];
}

export const perguntas: Pergunta[] = [
  {
    enunciado: 'Em um grupo de amigos, você normalmente é quem…',
    opcoes: [
      { texto: 'Organiza o plano e decide para onde vamos', arquetipo: 'rei' },
      { texto: 'Topa o desafio e puxa a turma para a ação', arquetipo: 'guerreiro' },
      { texto: 'Traz a ideia diferente e a análise do que pode dar certo', arquetipo: 'mago' },
      { texto: 'Cuida do clima e faz todo mundo se sentir bem', arquetipo: 'amante' },
    ],
  },
  {
    enunciado: 'Qual destas palavras mais combina com você?',
    opcoes: [
      { texto: 'Presença', arquetipo: 'rei' },
      { texto: 'Disciplina', arquetipo: 'guerreiro' },
      { texto: 'Estratégia', arquetipo: 'mago' },
      { texto: 'Paixão', arquetipo: 'amante' },
    ],
  },
  {
    enunciado: 'Quando você entra em um lugar novo, quer que as pessoas percebam…',
    opcoes: [
      { texto: 'Que você é alguém de confiança e de autoridade', arquetipo: 'rei' },
      { texto: 'Sua energia e sua determinação', arquetipo: 'guerreiro' },
      { texto: 'Sua inteligência e seu jeito único de pensar', arquetipo: 'mago' },
      { texto: 'Seu carisma e seu bom gosto', arquetipo: 'amante' },
    ],
  },
  {
    enunciado: 'Um lema que poderia ser seu:',
    opcoes: [
      { texto: '“Quem lidera dá o exemplo.”', arquetipo: 'rei' },
      { texto: '“Foco, força e constância.”', arquetipo: 'guerreiro' },
      { texto: '“Conhecimento abre todas as portas.”', arquetipo: 'mago' },
      { texto: '“A vida é para ser vivida com intensidade.”', arquetipo: 'amante' },
    ],
  },
  {
    enunciado: 'Diante de um problema difícil, você…',
    opcoes: [
      { texto: 'Assume a responsabilidade e coordena a solução', arquetipo: 'rei' },
      { texto: 'Vai para cima e resolve na prática', arquetipo: 'guerreiro' },
      { texto: 'Estuda, pesquisa e encontra o caminho mais inteligente', arquetipo: 'mago' },
      { texto: 'Conversa com as pessoas envolvidas e busca harmonia', arquetipo: 'amante' },
    ],
  },
  {
    enunciado: 'No seu tempo livre, você prefere…',
    opcoes: [
      { texto: 'Planejar projetos e cuidar dos seus negócios', arquetipo: 'rei' },
      { texto: 'Treinar, praticar um esporte ou se desafiar', arquetipo: 'guerreiro' },
      { texto: 'Ler, aprender algo novo ou mexer em tecnologia', arquetipo: 'mago' },
      { texto: 'Sair, boa comida, música e gente querida', arquetipo: 'amante' },
    ],
  },
  {
    enunciado: 'O que mais te incomoda em um corte de cabelo?',
    opcoes: [
      { texto: 'Parecer desleixado ou sem acabamento', arquetipo: 'rei' },
      { texto: 'Dar trabalho para manter no dia a dia', arquetipo: 'guerreiro' },
      { texto: 'Ser igual ao de todo mundo', arquetipo: 'mago' },
      { texto: 'Ficar rígido demais, sem movimento e sem charme', arquetipo: 'amante' },
    ],
  },
  {
    enunciado: 'Como você costuma se vestir?',
    opcoes: [
      { texto: 'Clássico e alinhado: peças de qualidade, poucas cores', arquetipo: 'rei' },
      { texto: 'Prático e funcional: confortável para a rotina', arquetipo: 'guerreiro' },
      { texto: 'Com um detalhe diferente: algo que ninguém está usando', arquetipo: 'mago' },
      { texto: 'Com estilo: texturas, cores e peças que chamam atenção', arquetipo: 'amante' },
    ],
  },
  {
    enunciado: 'Qual elogio mais te agrada?',
    opcoes: [
      { texto: '“Você transmite segurança.”', arquetipo: 'rei' },
      { texto: '“Você é muito determinado.”', arquetipo: 'guerreiro' },
      { texto: '“Você é muito inteligente.”', arquetipo: 'mago' },
      { texto: '“Você tem muito estilo.”', arquetipo: 'amante' },
    ],
  },
  {
    enunciado: 'Seu ambiente de trabalho ideal é…',
    opcoes: [
      { texto: 'Organizado, com cada coisa no seu lugar e você no comando', arquetipo: 'rei' },
      { texto: 'Dinâmico, com metas claras e ritmo acelerado', arquetipo: 'guerreiro' },
      { texto: 'Silencioso e cheio de referências para criar e pensar', arquetipo: 'mago' },
      { texto: 'Bonito, acolhedor e cheio de boas conversas', arquetipo: 'amante' },
    ],
  },
  {
    enunciado: 'Quando toma uma decisão importante, você confia mais…',
    opcoes: [
      { texto: 'Na sua visão de longo prazo', arquetipo: 'rei' },
      { texto: 'Na sua coragem de agir', arquetipo: 'guerreiro' },
      { texto: 'Nos fatos e na sua análise', arquetipo: 'mago' },
      { texto: 'No que você sente', arquetipo: 'amante' },
    ],
  },
  {
    enunciado: 'Como você quer ser lembrado?',
    opcoes: [
      { texto: 'Como alguém que construiu algo grande e cuidou dos seus', arquetipo: 'rei' },
      { texto: 'Como alguém que nunca desistiu', arquetipo: 'guerreiro' },
      { texto: 'Como alguém que enxergava além', arquetipo: 'mago' },
      { texto: 'Como alguém que viveu e amou de verdade', arquetipo: 'amante' },
    ],
  },
];

export interface Resultado {
  nome: string;
  essencia: string;
  descricao: string;
  imagem: string[];
}

export const resultados: Record<Arquetipo, Resultado> = {
  rei: {
    nome: 'Rei',
    essencia: 'Liderança, ordem e presença',
    descricao:
      'Você transmite autoridade e confiança. Gosta de organizar, decidir e cuidar de quem está ao seu redor. Sua imagem fala de responsabilidade, de visão de longo prazo e de alguém em quem as pessoas confiam.',
    imagem: [
      'Cortes clássicos e bem alinhados, com acabamento impecável',
      'Linhas definidas e contornos limpos',
      'Barba aparada com precisão, ou rosto limpo',
    ],
  },
  guerreiro: {
    nome: 'Guerreiro',
    essencia: 'Foco, disciplina e ação',
    descricao:
      'Você é movido a desafios. Tem energia, determinação e não foge da luta. Sua imagem fala de força, de praticidade e de alguém que faz acontecer.',
    imagem: [
      'Cortes práticos e fáceis de manter no dia a dia',
      'Laterais mais baixas e volume controlado no topo',
      'Barba curta e marcada, com aparência firme',
    ],
  },
  mago: {
    nome: 'Mago',
    essencia: 'Conhecimento, estratégia e transformação',
    descricao:
      'Você enxerga além do óbvio. Curioso e analítico, gosta de entender como as coisas funcionam e de encontrar soluções inteligentes. Sua imagem fala de originalidade e de profundidade.',
    imagem: [
      'Cortes com um detalhe autoral, que fogem do padrão',
      'Texturas e assimetrias controladas',
      'Acessórios e barba como parte de um estilo pensado',
    ],
  },
  amante: {
    nome: 'Amante',
    essencia: 'Sensibilidade, estética e conexão',
    descricao:
      'Você vive com intensidade e valoriza a beleza, o prazer e as relações. Tem carisma natural e gosta de se expressar pelo estilo. Sua imagem fala de charme e de autenticidade.',
    imagem: [
      'Cortes com movimento, textura e caimento natural',
      'Comprimentos médios e acabamento mais suave',
      'Barba bem cuidada, com contorno macio',
    ],
  },
};

export const ordemArquetipos: Arquetipo[] = ['rei', 'guerreiro', 'mago', 'amante'];
