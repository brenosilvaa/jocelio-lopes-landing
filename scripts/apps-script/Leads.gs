/**
 * Teste de arquétipo — Jocelio Lopes
 * Recebe cada resultado enviado pelo site, grava uma linha na planilha e manda um e-mail de aviso.
 * Instalação: veja LEIA-ME.md nesta mesma pasta.
 */

// E-mail que recebe o aviso de cada novo lead. Vazio = o e-mail da conta dona do script.
const EMAIL_AVISO = '';
const ABA = 'Leads';
const CABECALHO = ['Data', 'Nome', 'WhatsApp', 'Arquétipo', '%', 'Perfil completo', 'Respostas', 'Origem', 'Status'];

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const d = JSON.parse((e && e.postData && e.postData.contents) || '{}');
    const nome = limpar(d.nome, 80);
    const telefone = limpar(d.telefone, 25);
    if (nome.length < 2 || telefone.replace(/\D/g, '').length < 10) return resposta({ ok: false });

    const aba = obterAba();
    aba.appendRow([
      new Date(),
      nome,
      telefone,
      limpar(d.arquetipo, 20),
      Number(d.percentual) || '',
      limpar(d.perfil, 120),
      limpar(d.respostas, 200),
      limpar(d.origem, 120),
      'Novo',
    ]);

    const digitos = telefone.replace(/\D/g, '');
    const wa = 'https://wa.me/' + (digitos.length <= 11 ? '55' + digitos : digitos);
    MailApp.sendEmail({
      to: EMAIL_AVISO || Session.getEffectiveUser().getEmail(),
      subject: 'Novo teste de arquétipo: ' + nome + ' — ' + limpar(d.arquetipo, 20),
      htmlBody:
        '<p><b>' + html(nome) + '</b> fez o teste de arquétipo no site.</p>' +
        '<p>Arquétipo predominante: <b>' + html(limpar(d.arquetipo, 20)) + '</b> (' + html(String(d.percentual || '')) + '%)<br>' +
        'Perfil completo: ' + html(limpar(d.perfil, 120)) + '</p>' +
        '<p>WhatsApp: <a href="' + wa + '">' + html(telefone) + '</a></p>' +
        '<p><a href="' + obterPlanilha().getUrl() + '">Abrir a planilha de leads</a></p>',
    });
    return resposta({ ok: true });
  } catch (err) {
    return resposta({ ok: false });
  } finally {
    lock.releaseLock();
  }
}

/** Rode uma vez pelo editor: cria a planilha (se preciso), a aba Leads e autoriza o script. */
function configurar() {
  obterAba();
  MailApp.getRemainingDailyQuota();
  Logger.log('Planilha: ' + obterPlanilha().getUrl());
}

// Funciona tanto colado dentro de uma planilha (Extensões → Apps Script) quanto como projeto avulso,
// que cria a própria planilha na primeira execução e guarda o ID.
function obterPlanilha() {
  const ativa = SpreadsheetApp.getActiveSpreadsheet();
  if (ativa) return ativa;
  const props = PropertiesService.getScriptProperties();
  const id = props.getProperty('PLANILHA_ID');
  if (id) return SpreadsheetApp.openById(id);
  const nova = SpreadsheetApp.create('Leads — Teste de arquétipo (Jocelio Lopes)');
  props.setProperty('PLANILHA_ID', nova.getId());
  return nova;
}

function obterAba() {
  const planilha = obterPlanilha();
  let aba = planilha.getSheetByName(ABA);
  if (!aba) {
    aba = planilha.insertSheet(ABA);
    aba.appendRow(CABECALHO);
    aba.setFrozenRows(1);
    aba.getRange(1, 1, 1, CABECALHO.length).setFontWeight('bold');
    aba.getRange('A:A').setNumberFormat('dd/MM/yyyy HH:mm');
    const padrao = planilha.getSheetByName('Página1') || planilha.getSheetByName('Sheet1');
    if (padrao && planilha.getSheets().length > 1) planilha.deleteSheet(padrao);
  }
  return aba;
}

// Corta o tamanho e impede que um texto vire fórmula na planilha.
function limpar(v, max) {
  const s = String(v == null ? '' : v).replace(/[\r\n\t]+/g, ' ').trim().slice(0, max);
  return /^[=+\-@]/.test(s) ? "'" + s : s;
}

function html(s) {
  return String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
}

function resposta(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
