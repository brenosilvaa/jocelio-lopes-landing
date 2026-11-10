import { useEffect, useRef } from 'react';
import type { Trabalho } from '../data/site';
import { ArrowRight, ArrowUpRight } from './Arrow';
import { Picture } from './Picture';

interface Props {
  itens: Trabalho[];
  indice: number | null;
  onFechar: () => void;
  onMudar: (i: number) => void;
}

export function Lightbox({ itens, indice, onFechar, onMudar }: Props) {
  const ref = useRef<HTMLDialogElement>(null);
  const origem = useRef<HTMLElement | null>(null);
  const aberto = indice !== null;
  const t = indice !== null ? itens[indice] : null;

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (aberto && !d.open) {
      origem.current = document.activeElement as HTMLElement;
      d.showModal();
      document.body.style.overflow = 'hidden';
    } else if (!aberto && d.open) {
      d.close();
    }
  }, [aberto]);

  useEffect(() => {
    if (!aberto) return;
    const onKey = (e: KeyboardEvent) => {
      if (indice === null) return;
      if (e.key === 'ArrowRight') onMudar((indice + 1) % itens.length);
      if (e.key === 'ArrowLeft') onMudar((indice - 1 + itens.length) % itens.length);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [aberto, indice, itens.length, onMudar]);

  const aoFechar = () => {
    document.body.style.overflow = '';
    onFechar();
    origem.current?.focus();
  };

  return (
    <dialog
      ref={ref}
      onClose={aoFechar}
      onClick={(e) => {
        if (e.target === ref.current) ref.current?.close();
      }}
      aria-labelledby="lightbox-titulo"
      className="m-0 h-[100dvh] max-h-none w-screen max-w-none bg-transparent p-0 text-bone"
    >
      {t && indice !== null && (
        <div className="flex h-full flex-col md:flex-row md:items-center md:justify-center md:gap-12 md:p-10" onClick={(e) => e.target === e.currentTarget && ref.current?.close()}>
          <div className="flex min-h-0 flex-1 items-center justify-center p-4 pt-16 md:flex-none md:p-0">
            <Picture
              key={t.id}
              webp={t.imagem.webp}
              fallback={t.imagem.jpg}
              alt={t.alt}
              width={t.imagem.largura}
              height={t.imagem.altura}
              sizes="360px"
              priority
              className="block h-full max-h-[78dvh] md:max-h-[86dvh]"
              imgClassName="h-full w-auto max-w-full object-contain"
            />
          </div>

          <div className="shrink-0 border-t border-bone/10 bg-ink px-5 pb-6 pt-5 md:w-[24rem] md:border-0 md:bg-transparent md:p-0">
            <p className="eyebrow text-stone">
              {String(indice + 1).padStart(2, '0')} / {String(itens.length).padStart(2, '0')} · {t.data}
            </p>
            <h3 id="lightbox-titulo" className="mt-2 font-display text-[2rem] leading-[1.05] md:mt-4 md:text-[2.75rem]">
              {t.titulo}
            </h3>
            <p className="mt-3 text-[0.98rem] text-bone/75 md:mt-5">“{t.legenda}”</p>
            <p className="eyebrow mt-3 text-[0.65rem] text-stone">{t.categorias.join(' · ')}</p>
            <div className="mt-5 flex items-center gap-2 md:mt-8">
              <button
                type="button"
                onClick={() => onMudar((indice - 1 + itens.length) % itens.length)}
                className="btn btn-ghost-light size-12 min-h-12 px-0"
                aria-label="Trabalho anterior"
              >
                <ArrowRight className="size-4 rotate-180" />
              </button>
              <button
                type="button"
                onClick={() => onMudar((indice + 1) % itens.length)}
                className="btn btn-ghost-light size-12 min-h-12 px-0"
                aria-label="Próximo trabalho"
              >
                <ArrowRight />
              </button>
              <a href={t.post} target="_blank" rel="noopener noreferrer" className="eyebrow link-line ml-auto inline-flex items-center gap-2 pb-1 text-sand">
                Ver no Instagram <ArrowUpRight className="size-3.5" />
              </a>
            </div>
          </div>

          <button
            type="button"
            onClick={() => ref.current?.close()}
            className="eyebrow absolute right-4 top-4 flex min-h-11 items-center gap-2 rounded-full bg-ink/70 px-4 text-bone backdrop-blur md:right-8 md:top-8"
            aria-label="Fechar"
          >
            Fechar <span aria-hidden className="text-base leading-none">×</span>
          </button>
        </div>
      )}
    </dialog>
  );
}
