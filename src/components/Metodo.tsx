import { links, metodo } from '../data/site';
import { ArrowRight, ArrowUpRight } from './Arrow';
import { SectionLabel } from './SectionLabel';

export function Metodo() {
  const etapas = metodo.etapas.filter((e) => e.confirmado);
  const palavras = metodo.titulo.split(' ');
  return (
    <section id="metodo" aria-labelledby="metodo-titulo" className="grain relative overflow-hidden py-24 md:py-36">
      <div className="mx-auto max-w-[90rem] px-5 md:px-10">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-span-4">
            <SectionLabel numero="03" texto={metodo.rotulo} />
            <p className="reveal mt-8 max-w-sm font-display text-[1.6rem] italic leading-[1.15] text-sand">{metodo.abertura}</p>
          </div>
          <h2 id="metodo-titulo" className="font-display leading-[0.88] tracking-[-0.02em] lg:col-span-8">
            {palavras.map((p, i) => (
              <span
                key={p}
                className={`reveal block text-[clamp(3.3rem,13vw,4.6rem)] md:text-[clamp(4.6rem,8.6vw,8.4rem)] ${i === 1 ? 'italic text-clay md:pl-[0.6em]' : ''} ${i === 2 ? 'md:pl-[1.6em]' : ''}`}
                style={{ ['--delay' as string]: `${i * 110}ms` }}
              >
                {p}
              </span>
            ))}
          </h2>
        </div>

        <ol className="relative mt-20 grid gap-0 md:mt-28 md:grid-cols-3 md:gap-8">
          <span aria-hidden className="absolute left-[0.3rem] top-2 bottom-2 w-px bg-bone/15 md:left-0 md:right-0 md:top-[0.3rem] md:bottom-auto md:h-px md:w-auto" />
          {etapas.map((e, i) => (
            <li key={e.numero} className="reveal relative pb-12 pl-10 md:pb-0 md:pl-0 md:pt-12" style={{ ['--delay' as string]: `${i * 140}ms` }}>
              <span aria-hidden className="absolute left-0 top-1 size-[0.65rem] rounded-full bg-clay ring-4 ring-ink md:top-0" />
              <p className="font-mono text-sm text-stone">{e.numero}</p>
              <h3 className="mt-2 font-display text-[2.6rem] leading-none md:text-[3.2rem]">{e.nome}</h3>
              <p className="mt-5 max-w-sm text-bone/75">{e.texto}</p>
            </li>
          ))}
        </ol>

        <div className="mt-20 grid gap-10 border-t border-bone/15 pt-12 md:mt-28 lg:grid-cols-12 lg:gap-6">
          <blockquote className="reveal lg:col-span-7">
            <p className="font-display text-[1.9rem] leading-[1.12] md:text-[2.5rem]">{metodo.fechamento}</p>
            <footer className="mt-5">
              <a href={metodo.fonte.url} target="_blank" rel="noopener noreferrer" className="eyebrow link-line inline-flex items-center gap-2 pb-1 text-stone hover:text-bone">
                {metodo.fonte.texto} <ArrowUpRight className="size-3.5" />
              </a>
            </footer>
          </blockquote>
          <div className="reveal flex flex-col gap-3 self-end sm:flex-row lg:col-span-5 lg:justify-end">
            <a href={links.agendamento} target="_blank" rel="noopener noreferrer" className="btn btn-light">
              Agendar consultoria <ArrowRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
