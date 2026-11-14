import { useMemo, useState } from 'react';
import { categorias, links, trabalhos, type Categoria, type Trabalho } from '../data/site';
import { useReveal } from '../hooks/useReveal';
import { ArrowUpRight } from './Arrow';
import { Lightbox } from './Lightbox';
import { Picture } from './Picture';
import { SectionLabel } from './SectionLabel';

type Filtro = 'Todos' | Categoria;

const proporcoes = ['aspect-[4/5]', 'aspect-[9/16]', 'aspect-[3/4]', 'aspect-[9/16]', 'aspect-[3/4]', 'aspect-[4/5]'];

function Tile({ t, indice, onAbrir }: { t: Trabalho; indice: number; onAbrir: () => void }) {
  return (
    <figure className="reveal group" style={{ ['--delay' as string]: `${(indice % 3) * 90}ms` }}>
      <button
        type="button"
        onClick={onAbrir}
        className="relative block w-full overflow-hidden bg-ink-3 text-left"
        aria-label={`Ampliar: ${t.titulo}`}
      >
        <div className={`${proporcoes[indice % proporcoes.length]} overflow-hidden`}>
          <Picture
            webp={t.imagem.webp}
            fallback={t.imagem.jpg}
            alt={t.alt}
            width={t.imagem.largura}
            height={t.imagem.altura}
            sizes="(min-width: 1024px) 22vw, 50vw"
            className="block h-full w-full"
            imgClassName="h-full w-full object-cover transition-transform duration-[1.2s] ease-[var(--ease-out-soft)] group-hover:scale-[1.04]"
          />
        </div>
        <span
          aria-hidden
          className="eyebrow absolute left-3 top-3 rounded-full bg-ink/70 px-3 py-1.5 text-[0.65rem] text-bone opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
        >
          Ampliar
        </span>
      </button>
      <figcaption className="mt-3 md:mt-4">
        <p className="eyebrow flex justify-between gap-2 text-[0.65rem] text-stone">
          <span>{String(indice + 1).padStart(2, '0')}</span>
          <span className="truncate">{t.categorias.join(' · ')}</span>
        </p>
        <p className="mt-1.5 font-display text-[1.35rem] leading-[1.1] md:text-[1.6rem]">{t.titulo}</p>
      </figcaption>
    </figure>
  );
}

export function Portfolio() {
  const [filtro, setFiltro] = useState<Filtro>('Todos');
  const [aberto, setAberto] = useState<number | null>(null);

  const lista = useMemo(() => (filtro === 'Todos' ? trabalhos : trabalhos.filter((t) => t.categorias.includes(filtro))), [filtro]);
  useReveal([filtro]);

  // Distribui em colunas (3 no desktop, 2 no mobile) para criar o grid editorial desencontrado
  const colunas = (n: number) => Array.from({ length: n }, (_, c) => lista.map((t, i) => ({ t, i })).filter(({ i }) => i % n === c));
  const desloc3 = ['', 'lg:mt-36', 'lg:mt-14'];
  const desloc2 = ['', 'mt-16'];

  const filtros: Filtro[] = ['Todos', ...categorias];

  return (
    <section id="resultados" aria-labelledby="trabalhos-titulo" className="grain relative border-t border-bone/10 bg-ink-2 py-24 md:py-36">
      <div className="mx-auto grid max-w-[90rem] gap-12 px-5 md:px-10 lg:grid-cols-12 lg:gap-6">
        <div className="lg:col-span-3">
          <div className="lg:sticky lg:top-32">
            <SectionLabel numero="04" texto="Resultados" />
            <h2 id="trabalhos-titulo" className="reveal mt-6 font-display text-[2.9rem] leading-[0.95] md:text-[3.6rem]">
              Feito na tesoura, <em className="text-sand">pensado para cada rosto.</em>
            </h2>
            <p className="reveal mt-6 max-w-sm text-bone/70">
              Cada transformação tem uma intenção. Conheça alguns resultados construídos a partir de técnica, análise e personalidade. Toque em uma foto para ampliar.
            </p>

            <div role="group" aria-label="Filtrar trabalhos" className="reveal mt-8 flex flex-wrap gap-2">
              {filtros.map((f) => {
                const qtd = f === 'Todos' ? trabalhos.length : trabalhos.filter((t) => t.categorias.includes(f)).length;
                const ativo = filtro === f;
                return (
                  <button
                    key={f}
                    type="button"
                    aria-pressed={ativo}
                    onClick={() => setFiltro(f)}
                    className={`eyebrow min-h-10 rounded-full px-4 text-[0.7rem] transition-colors duration-300 ${
                      ativo ? 'bg-bone text-ink' : 'text-bone/75 ring-1 ring-inset ring-bone/20 hover:ring-bone/60'
                    }`}
                  >
                    {f} <span className={ativo ? 'text-ink/50' : 'text-stone'}>{qtd}</span>
                  </button>
                );
              })}
            </div>

            <a
              href={links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="eyebrow link-line mt-10 inline-flex items-center gap-2 pb-1 text-sand"
            >
              Ver tudo no Instagram <ArrowUpRight className="size-3.5" />
            </a>
          </div>
        </div>

        <div className="lg:col-span-9 lg:col-start-4 lg:pl-10">
          {/* Mobile / tablet: 2 colunas */}
          <div className="grid grid-cols-2 gap-x-4 lg:hidden">
            {colunas(2).map((col, c) => (
              <div key={c} className={`flex flex-col gap-10 ${desloc2[c]}`}>
                {col.map(({ t, i }) => (
                  <Tile key={t.id} t={t} indice={i} onAbrir={() => setAberto(i)} />
                ))}
              </div>
            ))}
          </div>
          {/* Desktop: 3 colunas desencontradas */}
          <div className="hidden grid-cols-3 gap-x-8 lg:grid">
            {colunas(3).map((col, c) => (
              <div key={c} className={`flex flex-col gap-16 ${desloc3[c]}`}>
                {col.map(({ t, i }) => (
                  <Tile key={t.id} t={t} indice={i} onAbrir={() => setAberto(i)} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <Lightbox itens={lista} indice={aberto} onFechar={() => setAberto(null)} onMudar={setAberto} />
    </section>
  );
}
