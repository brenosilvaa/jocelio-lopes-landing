// Gera as imagens otimizadas do site a partir de scripts/raw (fotos públicas do Instagram @joceliolopes).
// Uso: npm i -D sharp && node scripts/optimize-images.mjs
import sharp from 'sharp';
import { mkdirSync } from 'node:fs';

const RAW = new URL('./raw/', import.meta.url);
const OUT = new URL('../public/images/', import.meta.url);
mkdirSync(new URL('trabalhos/', OUT), { recursive: true });

const p = (base, f) => new URL(f, base).pathname;

// Retrato do hero: foto de perfil do Instagram @joceliolopes (996x996, P&B original)
for (const w of [640, 996]) {
  await sharp(p(RAW, 'perfil.jpg')).resize({ width: w }).webp({ quality: 84 }).toFile(p(OUT, `jocelio-retrato-${w}.webp`));
}
await sharp(p(RAW, 'perfil.jpg')).jpeg({ quality: 84, mozjpeg: true }).toFile(p(OUT, 'jocelio-retrato-996.jpg'));

// Retrato da abertura (foto enviada pelo Breno, 1168x1600)
for (const w of [640, 1168]) {
  await sharp(p(RAW, 'retrato-abertura.png')).resize({ width: w }).webp({ quality: 82 }).toFile(p(OUT, `jocelio-abertura-${w}.webp`));
}
await sharp(p(RAW, 'retrato-abertura.png')).jpeg({ quality: 80, mozjpeg: true }).toFile(p(OUT, 'jocelio-abertura-1168.jpg'));

// Foto completa (Sobre)
for (const w of [768, 1200]) {
  await sharp(p(RAW, 'DcM_IP8twry.jpg')).resize({ width: w }).webp({ quality: 78 }).toFile(p(OUT, `jocelio-e-pai-${w}.webp`));
}
await sharp(p(RAW, 'DcM_IP8twry.jpg')).resize({ width: 1200 }).jpeg({ quality: 78, mozjpeg: true }).toFile(p(OUT, 'jocelio-e-pai-1200.jpg'));

// Trabalhos (capas originais 360x640 — sem ampliação artificial)
const works = ['DYniml3OLh4', 'DcwgfN9u_5E', 'Ddr1yscOods', 'DaTyMr0ozax', 'DZ1CMyfNrYn', 'DYsz8WLulDw', 'DccJ04qOkEV', 'DYFKnkQO69N', 'DVHczXxETIN'];
for (const c of works) {
  await sharp(p(RAW, `${c}.jpg`)).resize({ width: 360, height: 640, fit: 'cover' }).webp({ quality: 86 }).toFile(p(OUT, `trabalhos/${c}.webp`));
  await sharp(p(RAW, `${c}.jpg`)).resize({ width: 360, height: 640, fit: 'cover' }).jpeg({ quality: 86, mozjpeg: true }).toFile(p(OUT, `trabalhos/${c}.jpg`));
}
console.log('ok');
