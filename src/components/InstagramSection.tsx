import { instagram, links, trabalhos } from '../data/site';
import { ArrowUpRight } from './Arrow';
import { Picture } from './Picture';

export function InstagramSection() {
  const fotos = instagram.destaques.map((id) => trabalhos.find((t) => t.id === id)!).filter(Boolean);
  return (
    <section aria-labelledby="insta-titulo" className="border-t border-bone/10 bg-ink-2 py-24 md:py-32">
      <div className="mx-auto max-w-[90rem] px-5 md:px-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow reveal text-stone">{instagram.rotulo}</p>
            <h2 id="insta-titulo" className="reveal mt-4 font-display text-[2.6rem] leading-none md:text-[4rem]">
              {instagram.titulo}
            </h2>
            <p className="reveal mt-4 max-w-md text-bone/70">{instagram.texto}</p>
          </div>
          <a href={links.instagram} target="_blank" rel="noopener noreferrer" className="btn btn-ghost-light reveal self-start md:self-auto">
            Seguir {links.instagramHandle} <ArrowUpRight />
          </a>
        </div>

        <ul className="mt-12 grid grid-cols-3 gap-2 md:grid-cols-6 md:gap-3">
          {fotos.map((t, i) => (
            <li key={t.id} className="reveal" style={{ ['--delay' as string]: `${i * 60}ms` }}>
              <a href={t.post} target="_blank" rel="noopener noreferrer" className="group block overflow-hidden" aria-label={`Abrir publicação no Instagram: ${t.titulo}`}>
                <Picture
                  webp={t.imagem.webp}
                  fallback={t.imagem.jpg}
                  alt=""
                  width={t.imagem.largura}
                  height={t.imagem.altura}
                  sizes="(min-width: 768px) 16vw, 33vw"
                  className="block"
                  imgClassName="aspect-[9/16] h-auto w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
