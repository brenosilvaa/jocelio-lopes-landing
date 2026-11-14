/**
 * Opções do Dossiê visagista (/dossie).
 * RASCUNHO: listas padrão de visagismo — o Jocelio pode trocar, incluir ou remover itens aqui.
 */
import { ordemArquetipos, resultados } from './teste';

export const opcoesArquetipo = ordemArquetipos.map((a) => resultados[a].nome);

export const opcoesRosto = [
  'Oval',
  'Redondo',
  'Quadrado',
  'Retangular',
  'Oblongo',
  'Triangular',
  'Triângulo invertido',
  'Diamante',
];

export interface GrupoOpcoes {
  grupo: string;
  opcoes: { valor: string; rotulo: string }[];
}

/** Classificação de curvatura 1A a 4C, agrupada por família. O valor vai para o PDF (ex.: "Ondulado 2B"). */
export const opcoesCabelo: GrupoOpcoes[] = (
  [
  { grupo: 'Lisos', tipo: 'Liso', n: 1 },
  { grupo: 'Ondulados', tipo: 'Ondulado', n: 2 },
  { grupo: 'Cacheados', tipo: 'Cacheado', n: 3 },
  { grupo: 'Crespos', tipo: 'Crespo', n: 4 },
  ] as const
).map(({ grupo, tipo, n }) => ({
  grupo,
  opcoes: ['A', 'B', 'C'].map((l) => ({ valor: `${tipo} ${n}${l}`, rotulo: `${n}${l} · ${tipo}` })),
}));
