/**
 * Gera o PDF do Dossiê visagista direto no navegador (pdf-lib), sem enviar nada a servidor.
 * Usa as fontes padrão do PDF (Times para títulos, Helvetica para texto, Courier para rótulos),
 * que funcionam em qualquer leitor e aceitam acentos do português.
 */
import type { PDFFont, PDFImage, PDFPage } from 'pdf-lib';
import { resultados, ordemArquetipos } from '../data/teste';

export interface DadosDossie {
  cliente: string;
  arquetipo: string;
  rosto: string;
  cabelo: string;
  proposta: string;
  imagens: File[];
}

const A4 = { w: 595.28, h: 841.89 };
const M = 48; // margem

/** Converte uma imagem enviada (qualquer formato que o navegador abre) em JPEG reduzido. */
async function paraJpeg(file: File, max = 1600): Promise<{ bytes: ArrayBuffer; w: number; h: number }> {
  const bmp = await createImageBitmap(file);
  const escala = Math.min(1, max / Math.max(bmp.width, bmp.height));
  const w = Math.round(bmp.width * escala);
  const h = Math.round(bmp.height * escala);
  const cv = document.createElement('canvas');
  cv.width = w;
  cv.height = h;
  const ctx = cv.getContext('2d')!;
  ctx.fillStyle = '#fff';
  ctx.fillRect(0, 0, w, h);
  ctx.drawImage(bmp, 0, 0, w, h);
  bmp.close();
  const blob: Blob = await new Promise((r) => cv.toBlob((b) => r(b!), 'image/jpeg', 0.86));
  return { bytes: await blob.arrayBuffer(), w, h };
}

export async function gerarDossiePdf(d: DadosDossie): Promise<Blob> {
  const { PDFDocument, StandardFonts, rgb } = await import('pdf-lib');

  const cor = {
    ink: rgb(0x15 / 255, 0x13 / 255, 0x0f / 255),
    bone: rgb(0xef / 255, 0xe9 / 255, 0xdf / 255),
    bone2: rgb(0xe6 / 255, 0xdd / 255, 0xcf / 255),
    sand: rgb(0xcd / 255, 0xbf / 255, 0xa8 / 255),
    stone: rgb(0x6b / 255, 0x62 / 255, 0x56 / 255),
    stoneClaro: rgb(0x9a / 255, 0x8f / 255, 0x80 / 255),
    clay: rgb(0xb2 / 255, 0x6a / 255, 0x47 / 255),
    texto: rgb(0x2f / 255, 0x2b / 255, 0x26 / 255),
  };

  const pdf = await PDFDocument.create();
  pdf.setTitle(`Dossiê visagista — ${d.cliente}`);
  pdf.setAuthor('Jocelio Lopes');
  pdf.setCreator('joceliolopes — dossiê visagista');

  const serif = await pdf.embedFont(StandardFonts.TimesRoman);
  const serifItalico = await pdf.embedFont(StandardFonts.TimesRomanItalic);
  const sans = await pdf.embedFont(StandardFonts.Helvetica);
  const mono = await pdf.embedFont(StandardFonts.Courier);

  /** Remove caracteres que as fontes padrão do PDF não conseguem desenhar (ex.: emojis). */
  const limpar = (t: string, f: PDFFont) =>
    [...t.replace(/\r/g, '')]
      .map((ch) => {
        if (ch === '\n') return ch;
        try {
          f.widthOfTextAtSize(ch, 10);
          return ch;
        } catch {
          return '';
        }
      })
      .join('');

  const espacado = (page: PDFPage, texto: string, x: number, y: number, size: number, color: ReturnType<typeof rgb>, track = 1.6) => {
    let cx = x;
    for (const ch of limpar(texto.toUpperCase(), mono)) {
      page.drawText(ch, { x: cx, y, size, font: mono, color });
      cx += mono.widthOfTextAtSize(ch, size) + track;
    }
    return cx;
  };

  const quebrar = (texto: string, f: PDFFont, size: number, largura: number) => {
    const linhas: string[] = [];
    for (const par of limpar(texto, f).split('\n')) {
      if (!par.trim()) {
        linhas.push('');
        continue;
      }
      let linha = '';
      for (const palavra of par.split(/\s+/)) {
        const tentativa = linha ? `${linha} ${palavra}` : palavra;
        if (f.widthOfTextAtSize(tentativa, size) <= largura) linha = tentativa;
        else {
          if (linha) linhas.push(linha);
          linha = palavra;
        }
      }
      if (linha) linhas.push(linha);
    }
    return linhas;
  };

  const data = new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' });
  const paginas: PDFPage[] = [];

  const novaPagina = () => {
    const p = pdf.addPage([A4.w, A4.h]);
    p.drawRectangle({ x: 0, y: 0, width: A4.w, height: A4.h, color: cor.bone });
    paginas.push(p);
    return p;
  };

  // Selo
  let selo: PDFImage | null = null;
  try {
    const bytes = await (await fetch('/images/selo-dossie.png')).arrayBuffer();
    selo = await pdf.embedPng(bytes);
  } catch {
    selo = null;
  }

  // ---------- Página 1: capa do dossiê ----------
  let page = novaPagina();
  const capaH = 300;
  page.drawRectangle({ x: 0, y: A4.h - capaH, width: A4.w, height: capaH, color: cor.ink });
  if (selo) page.drawImage(selo, { x: M, y: A4.h - M - 62, width: 62, height: 62 });
  espacado(page, 'Dossiê visagista', A4.w - M - 150, A4.h - M - 26, 7.5, cor.sand);
  espacado(page, data, A4.w - M - 150, A4.h - M - 40, 7, cor.stoneClaro, 1.2);

  espacado(page, 'Preparado para', M, A4.h - 170, 7.5, cor.stoneClaro);
  const nomeLinhas = quebrar(d.cliente, serif, 40, A4.w - 2 * M);
  let y = A4.h - 212;
  for (const l of nomeLinhas.slice(0, 2)) {
    page.drawText(l, { x: M, y, size: 40, font: serif, color: cor.bone });
    y -= 42;
  }
  page.drawText(limpar('por Jocelio Lopes, barbeiro visagista', serifItalico), {
    x: M,
    y: A4.h - capaH + 30,
    size: 14,
    font: serifItalico,
    color: cor.sand,
  });

  // Cartões: arquétipo, rosto, cabelo
  const cartoes = [
    { rotulo: 'Arquétipo', valor: d.arquetipo },
    { rotulo: 'Formato de rosto', valor: d.rosto },
    { rotulo: 'Tipo de cabelo', valor: d.cabelo },
  ];
  const gap = 12;
  const cw = (A4.w - 2 * M - 2 * gap) / 3;
  const ch = 96;
  const cy = A4.h - capaH - 32 - ch;
  cartoes.forEach((c, i) => {
    const cx = M + i * (cw + gap);
    page.drawRectangle({ x: cx, y: cy, width: cw, height: ch, color: cor.bone2 });
    page.drawRectangle({ x: cx, y: cy + ch - 2, width: cw, height: 2, color: cor.clay });
    espacado(page, c.rotulo, cx + 14, cy + ch - 24, 6.8, cor.stone, 1.2);
    const linhas = quebrar(c.valor, serif, 20, cw - 28);
    let vy = cy + ch - 52;
    for (const l of linhas.slice(0, 2)) {
      page.drawText(l, { x: cx + 14, y: vy, size: 20, font: serif, color: cor.ink });
      vy -= 22;
    }
  });

  y = cy - 34;

  // Essência do arquétipo, quando for um dos quatro do teste
  const arq = ordemArquetipos.find((a) => resultados[a].nome === d.arquetipo);
  if (arq) {
    const r = resultados[arq];
    page.drawText(limpar(`${r.nome}: ${r.essencia.toLowerCase()}`, serifItalico), { x: M, y, size: 13, font: serifItalico, color: cor.clay });
    y -= 18;
    for (const l of quebrar(r.descricao, sans, 9.5, A4.w - 2 * M)) {
      page.drawText(l, { x: M, y, size: 9.5, font: sans, color: cor.stone });
      y -= 14;
    }
    y -= 30;
  }

  // ---------- Proposta ----------
  const titulo = (p: PDFPage, texto: string, yy: number) => {
    p.drawText(texto, { x: M, y: yy, size: 24, font: serif, color: cor.ink });
    p.drawRectangle({ x: M, y: yy - 10, width: 36, height: 1.5, color: cor.clay });
    return yy - 34;
  };
  const rodapeLimite = 80;

  y = titulo(page, 'Proposta visagista', y);
  const corpo = 10.5;
  const lh = 16;
  for (const l of quebrar(d.proposta, sans, corpo, A4.w - 2 * M)) {
    if (y < rodapeLimite) {
      page = novaPagina();
      y = A4.h - M - 10;
    }
    if (l) page.drawText(l, { x: M, y, size: corpo, font: sans, color: cor.texto });
    y -= l ? lh : lh * 0.7;
  }

  // ---------- Imagens ----------
  if (d.imagens.length) {
    const convertidas = await Promise.all(d.imagens.map((f) => paraJpeg(f)));
    const embutidas = await Promise.all(convertidas.map((c) => pdf.embedJpg(c.bytes)));
    const colW = (A4.w - 2 * M - gap) / 2;
    const celH = 300;
    if (y < rodapeLimite + 120) {
      page = novaPagina();
      y = A4.h - M - 10;
    } else y -= 20;
    y = titulo(page, 'Referências', y);
    let col = 0;
    for (const img of embutidas) {
      if (col === 0 && y - celH < rodapeLimite) {
        page = novaPagina();
        y = A4.h - M - 10;
      }
      const esc = Math.min(colW / img.width, celH / img.height);
      const w = img.width * esc;
      const h = img.height * esc;
      const x = M + col * (colW + gap) + (colW - w) / 2;
      page.drawImage(img, { x, y: y - h, width: w, height: h });
      col += 1;
      if (col === 2) {
        col = 0;
        y -= celH + gap;
      }
    }
  }

  // ---------- Rodapé em todas as páginas ----------
  paginas.forEach((p, i) => {
    p.drawRectangle({ x: M, y: 50, width: A4.w - 2 * M, height: 0.6, color: cor.stoneClaro });
    espacado(p, 'Jocelio Lopes · Barbeiro visagista · Brutus Barbearia, Ribeirão Preto', M, 34, 6.2, cor.stone, 1);
    const num = `${String(i + 1).padStart(2, '0')} / ${String(paginas.length).padStart(2, '0')}`;
    p.drawText(num, { x: A4.w - M - mono.widthOfTextAtSize(num, 7), y: 34, size: 7, font: mono, color: cor.stone });
  });

  const bytes = await pdf.save();
  return new Blob([bytes as BlobPart], { type: 'application/pdf' });
}
