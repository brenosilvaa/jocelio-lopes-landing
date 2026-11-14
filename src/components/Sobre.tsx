import { pessoa, sobre } from '../data/site';
import { Picture } from './Picture';
import { SectionLabel } from './SectionLabel';

export function Sobre() {
  return (
    <section id="sobre" aria-labelledby="sobre-titulo" className="grain relative border-t border-bone/10 bg-ink-2 py-24 text-bone md:py-36">
      <div className="mx-auto grid max-w-[90rem] gap-14 px-5 md:px-10 lg:grid-cols-12 lg:gap-6">
        <figure className="lg:col-span-5">
          <div className="reveal-img overflow-hidden">
            <Picture
              webp={sobre.foto.webp}
              fallback={sobre.foto.fallback}
              alt={sobre.foto.alt}
              width={sobre.foto.largura}
              height={sobre.foto.altura}
              sizes="(min-width: 1024px) 38vw, 100vw"
              className="block"
              imgClassName="aspect-[4/5] h-auto w-full object-cover object-top"
            />
          </div>
          <figcaption className="reveal mt-4 max-w-md font-display text-[1.15rem] italic leading-snug text-bone/70">{sobre.foto.legenda}</figcaption>
        </figure>

        <div className="lg:col-span-6 lg:col-start-7 lg:pt-10">
          <SectionLabel numero="01" texto={sobre.rotulo} />
          <h2 id="sobre-titulo" className="reveal mt-6 font-display text-[2.9rem] leading-[0.98] tracking-[-0.01em] md:text-[4.2rem]">
            {sobre.titulo}
          </h2>
          <div className="mt-8 space-y-5 text-[1.08rem] text-bone/80">
            {sobre.paragrafos.map((p) => (
              <p key={p} className="reveal">
                {p}
              </p>
            ))}
          </div>

          <blockquote className="reveal mt-12 border-l-2 border-clay pl-6">
            <p className="font-display text-[1.65rem] leading-[1.15] md:text-[2rem]">“{sobre.citacao}”</p>
            <footer className="eyebrow mt-4 text-stone">— Jocelio, sobre o visagismo</footer>
          </blockquote>

          <dl className="reveal mt-12 grid grid-cols-2 gap-6 border-t border-bone/15 pt-6">
            <div>
              <dt className="eyebrow text-stone">Especialidades</dt>
              <dd className="mt-1 font-display text-[1.6rem]">{pessoa.especialidades.join(' · ')}</dd>
            </div>
            <div>
              <dt className="eyebrow text-stone">Atendimento</dt>
              <dd className="mt-1 font-display text-[1.6rem]">{pessoa.estabelecimento}</dd>
              <dd className="text-sm text-bone/60">{pessoa.cidade}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
