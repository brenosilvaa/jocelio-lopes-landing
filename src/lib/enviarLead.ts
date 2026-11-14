import { integracoes } from '../data/site';

export type Lead = {
  nome: string;
  telefone: string;
  arquetipo: string;
  percentual: number;
  perfil: string;
  respostas: string;
};

/**
 * Envia o resultado do teste para a planilha do Jocelio (Google Apps Script), em segundo plano.
 * Não bloqueia a tela de resultado: se falhar ou se a URL não estiver configurada, o cliente não percebe.
 */
export function enviarLead(lead: Lead) {
  const url = integracoes.planilhaTeste;
  if (!url) return;
  try {
    // text/plain evita a pré-verificação CORS; no-cors porque o Apps Script não devolve cabeçalhos CORS.
    void fetch(url, {
      method: 'POST',
      mode: 'no-cors',
      keepalive: true,
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify({ ...lead, origem: window.location.href }),
    }).catch(() => {});
  } catch {
    /* sem efeito para o cliente */
  }
}
