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

export const opcoesCabelo = ['Liso', 'Ondulado', 'Cacheado', 'Crespo'];
