import { links, trabalhos, visagismo, whatsappConsultoria } from '../data/site';
import { ArrowRight, ArrowUpRight } from './Arrow';
import { Picture } from './Picture';
import { SectionLabel } from './SectionLabel';

const foto = trabalhos.find((t) => t.id === 'Ddr1yscOods')!;

export function Visagismo() {
  const { acaso, consultoria } = visagismo.comparacao;
  return (
    <section id="visagismo" aria-labelledby="visagismo-titulo" className="grain relative bg-bone py-24 text-ink md:py-36">
      <div className="mx-auto max-w-[90rem] px-5 md:px-10">
        <SectionLabel numero="02" texto={visagismo.rotulo} tom="escuro" />

        <div className="mt-8 grid gap-12 lg:grid-cols-12 lg:gap-6">
          <h2 id="visagismo-titulo" className="reveal font-display text-[3rem] leading-[0.95] tracking-[-0.015em] md:text-[5.2rem] lg:col-span-8">
            {visagismo.titulo[0]} <em className="text-moss">{visagismo.titulo[1]}</em>
          </h2>
          <p className="reveal self-end text-[1.1rem] text-ink/75 lg:col-span-4">{visagismo.definicao}</p>
        </div>

        <div className="mt-16 grid gap-10 md:mt-24 lg:grid-cols-12 lg:gap-6">
          {/* Comparação */}
          <div className="grid gap-px overflow-hidden rounded-sm bg-ink/15 md:grid-cols-2 lg:col-span-8">
            <div className="reveal bg-bone-2 p-7 md:p-10">
              <p className="eyebrow text-stone-dark">Sem processo</p>
              <h3 className="mt-3 font-display text-[1.9rem] leading-tight text-ink/60">{acaso.titulo}</h3>
              <ol className="mt-8 space-y-5">
                {acaso.itens.map((item, i) => (
                  <li key={item} className="flex gap-4 text-ink/60">
                    <span className="font-mono text-xs leading-7 text-stone-dark">0{i + 1}</span>
                    <span className="decoration-ink/30">{item}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div className="reveal bg-ink p-7 text-bone md:p-10" style={{ ['--delay' as string]: '120ms' }}>
              <p className="eyebrow text-sand">Com consultoria</p>
              <h3 className="mt-3 font-display text-[1.9rem] leading-tight">{consultoria.titulo}</h3>
              <ol className="mt-8 space-y-5">
                {consultoria.itens.map((item, i) => (
                  <li key={item} className="flex gap-4">
                    <span className="font-mono text-xs leading-7 text-clay">0{i + 1}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Cartão da consultoria */}
          <aside aria-label="Sobre a consultoria" className="reveal flex flex-col lg:col-span-4 lg:pl-6">
            <div className="flex gap-5">
              <Picture
                webp={foto.imagem.webp}
                fallback={foto.imagem.jpg}
                alt={foto.alt}
                width={foto.imagem.largura}
                height={foto.imagem.altura}
                sizes="140px"
                className="block w-28 shrink-0 md:w-36"
                imgClassName="aspect-[3/4] h-auto w-full object-cover"
              />
              <dl className="flex flex-col justify-end gap-4">
                <div>
                  <dt className="eyebrow text-stone-dark">Duração prevista</dt>
                  <dd className="font-display text-[2.6rem] leading-none">{visagismo.duracao}</dd>
                </div>
                <div>
                  <dt className="eyebrow text-stone-dark">Onde</dt>
                  <dd className="text-[0.95rem]">Brutus Barbearia, Ribeirão Preto</dd>
                </div>
              </dl>
            </div>
            <p className="mt-6 text-[0.95rem] text-ink/70">{visagismo.notaAgenda}</p>
            <div className="mt-6 flex flex-col gap-3">
              <a href={links.agendamento} target="_blank" rel="noopener noreferrer" className="btn btn-dark">
                {visagismo.ctaAgendar} <ArrowRight />
              </a>
              <a href={whatsappConsultoria} target="_blank" rel="noopener noreferrer" className="btn btn-ghost-dark">
                {visagismo.ctaContato} <ArrowUpRight />
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
