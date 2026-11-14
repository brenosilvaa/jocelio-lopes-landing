import { hero, links, pessoa } from '../data/site';
import { ArrowRight } from './Arrow';
import { Picture } from './Picture';

export function Hero() {
  return (
    <section id="topo" aria-labelledby="hero-titulo" className="grain relative overflow-hidden pt-16 md:pt-20">
      <div className="mx-auto grid max-w-[90rem] grid-cols-1 px-5 md:px-10 lg:min-h-[calc(100svh-5rem)] lg:grid-cols-12 lg:gap-x-6">
        {/* Retrato */}
        <div className="relative -mx-5 md:mx-0 lg:col-span-5 lg:col-start-8 lg:row-start-1 lg:self-center lg:py-10">
          <div className="reveal-img relative aspect-[4/5] overflow-hidden md:aspect-[5/4] lg:aspect-[4/5]">
            <Picture
              webp={hero.retrato.webp}
              fallback={hero.retrato.fallback}
              alt={hero.retrato.alt}
              width={hero.retrato.largura}
              height={hero.retrato.altura}
              sizes="(min-width: 1024px) 32vw, 100vw"
              priority
              className="absolute inset-0"
              imgClassName="h-full w-full object-cover object-[50%_18%]"
            />
            <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent lg:from-ink/60 lg:via-transparent" />
            <p className="eyebrow absolute bottom-4 right-5 hidden text-[0.65rem] text-bone/75 md:block lg:bottom-5 lg:right-5">
              {pessoa.local}
            </p>
          </div>
        </div>

        {/* Texto */}
        <div className="relative z-10 -mt-28 flex flex-col md:-mt-40 lg:col-span-8 lg:col-start-1 lg:row-start-1 lg:mt-0 lg:justify-center lg:pb-24 lg:pt-10">
          <p className="eyebrow reveal text-sand">{hero.rotulo}</p>

          <h1 id="hero-titulo" className="mt-6 font-name uppercase leading-[0.92] tracking-[0.06em]">
            <span className="reveal block text-[clamp(3.4rem,20.5vw,6.5rem)] lg:text-[clamp(6rem,10.6vw,10.25rem)]" style={{ ['--delay' as string]: '80ms' }}>
              {pessoa.primeiroNome}
            </span>
            <span
              className="reveal block text-sand text-[clamp(3.4rem,20.5vw,6.5rem)] lg:text-[clamp(6rem,10.6vw,10.25rem)]"
              style={{ ['--delay' as string]: '160ms' }}
            >
              {pessoa.sobrenome}
            </span>
            <span className="sr-only">, {pessoa.titulo.toLowerCase()} em {pessoa.cidade}</span>
          </h1>

          <div className="mt-10 max-w-xl lg:mt-12" >
            <p className="reveal font-display text-[2rem] leading-[1.05] md:text-[2.5rem]" style={{ ['--delay' as string]: '240ms' }}>
              {hero.frase[0]} <em className="text-clay">{hero.frase[1]}</em>
            </p>
            <p className="reveal mt-5 max-w-[34rem] text-bone/75" style={{ ['--delay' as string]: '300ms' }}>
              {hero.apresentacao}
            </p>
            <div className="reveal mt-8 flex flex-col gap-3 sm:flex-row" style={{ ['--delay' as string]: '360ms' }}>
              <a href={links.agendamento} target="_blank" rel="noopener noreferrer" className="btn btn-light">
                {hero.ctaPrincipal}
                <ArrowRight />
              </a>
              <a href="#resultados" className="btn btn-ghost-light">
                {hero.ctaSecundario}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Faixa inferior */}
      <div className="mx-auto mt-16 max-w-[90rem] px-5 md:px-10 lg:mt-0">
        <ul className="eyebrow flex flex-wrap items-center gap-x-8 gap-y-2 border-t border-bone/15 py-5 text-stone">
          {pessoa.especialidades.map((e) => (
            <li key={e}>{e}</li>
          ))}
          <li>{pessoa.local}</li>
          <li className="ml-auto hidden md:block">
            <a href="#sobre" className="link-line">
              Role para ver ↓
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
