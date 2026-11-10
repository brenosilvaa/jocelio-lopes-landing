import { agendamento, links, servicos, whatsappConsultoria } from '../data/site';
import { ArrowRight, ArrowUpRight } from './Arrow';
import { SectionLabel } from './SectionLabel';

export function Agendamento() {
  return (
    <section id="agendar" aria-labelledby="agendar-titulo" className="grain relative overflow-hidden py-24 md:py-36">
      <div className="mx-auto max-w-[90rem] px-5 md:px-10">
        <SectionLabel numero="05" texto={agendamento.rotulo} />
        <h2 id="agendar-titulo" className="reveal mt-8 font-display text-[clamp(3.4rem,14vw,5rem)] leading-[0.9] tracking-[-0.02em] md:text-[clamp(5rem,9.5vw,9.5rem)]">
          {agendamento.titulo[0]} <em className="text-sand">{agendamento.titulo[1]}</em>
        </h2>

        <div className="mt-14 grid gap-14 lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-span-5">
            <p className="reveal max-w-md text-[1.1rem] text-bone/75">{agendamento.texto}</p>
            <a
              href={links.agendamento}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-light reveal mt-8 min-h-16 w-full justify-between px-8 text-[1.05rem] sm:w-auto sm:min-w-[22rem]"
            >
              {agendamento.cta}
              <ArrowRight className="size-5" />
            </a>
            <p className="eyebrow reveal mt-4 text-[0.65rem] text-stone">Abre a agenda BarberCode em uma nova aba</p>

            <ol className="mt-12 space-y-5 border-t border-bone/15 pt-8">
              {agendamento.passos.map((p, i) => (
                <li key={p} className="reveal flex gap-5" style={{ ['--delay' as string]: `${i * 90}ms` }}>
                  <span className="font-mono text-sm leading-7 text-clay">0{i + 1}</span>
                  <span className="text-bone/85">{p}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <div className="reveal rounded-sm bg-ink-2 p-7 ring-1 ring-bone/10 md:p-10">
              <p className="eyebrow text-stone">Serviços com o Jocelio na agenda</p>
              <ul className="mt-6 grid grid-cols-1 gap-x-8 sm:grid-cols-2">
                {servicos.map((s) => (
                  <li key={s} className="border-b border-bone/10 py-3 text-[0.98rem] text-bone/85">
                    {s}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-stone">Valores e horários disponíveis aparecem direto na agenda.</p>
            </div>

            <div className="reveal mt-6 flex flex-col gap-5 rounded-sm p-7 ring-1 ring-bone/15 md:flex-row md:items-center md:justify-between md:p-10">
              <div>
                <p className="font-display text-[1.7rem] leading-tight">Dúvidas sobre a consultoria?</p>
                <p className="mt-1 text-sm text-bone/65">Fale direto com o Jocelio pelo WhatsApp.</p>
              </div>
              <a href={whatsappConsultoria} target="_blank" rel="noopener noreferrer" className="btn btn-ghost-light shrink-0">
                WhatsApp <ArrowUpRight />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
