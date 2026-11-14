import { useEffect, useState, type ReactNode } from 'react';
import { LogoSelo } from '../components/Logo';
import { PageShell } from '../components/PageShell';
import { ano, hero, links, pessoa } from '../data/site';

/* ---------- Ícones (traço simples, cor herdada) ---------- */
const Icone = ({ children }: { children: ReactNode }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="size-[1.15rem]">
    {children}
  </svg>
);
const IconeAgenda = () => (
  <Icone>
    <rect x="3.5" y="5" width="17" height="15.5" rx="2" />
    <path d="M3.5 9.5h17M8 3v4M16 3v4" />
  </Icone>
);
const IconeConversa = () => (
  <Icone>
    <path d="M4 19.5l1.2-3.6A8 8 0 1 1 8 18.7L4 19.5z" />
  </Icone>
);
const IconeCamera = () => (
  <Icone>
    <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
    <circle cx="12" cy="12" r="3.8" />
    <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" />
  </Icone>
);
const IconeVideo = () => (
  <Icone>
    <rect x="3.5" y="5" width="17" height="14" rx="3" />
    <path d="M10.5 9.5v5l4-2.5-4-2.5z" />
  </Icone>
);
const IconeSite = () => (
  <Icone>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M3.5 12h17M12 3.5c2.4 2.5 3.5 5.3 3.5 8.5s-1.1 6-3.5 8.5c-2.4-2.5-3.5-5.3-3.5-8.5s1.1-6 3.5-8.5z" />
  </Icone>
);
const Seta = ({ diagonal = true }: { diagonal?: boolean }) => (
  <svg viewBox="0 0 16 16" fill="none" aria-hidden className="size-4 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
    {diagonal ? (
      <path d="M4.5 11.5l7-7M5.5 4.5h6v6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square" />
    ) : (
      <path d="M2.5 8h10.5M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square" />
    )}
  </svg>
);

const externo = { target: '_blank', rel: 'noopener noreferrer' } as const;

const redes = [
  { rotulo: 'WhatsApp', detalhe: `Fale comigo · ${links.whatsappExibicao}`, href: `https://wa.me/${links.whatsappNumero}`, icone: <IconeConversa />, ext: true },
  { rotulo: 'Instagram', detalhe: `Bastidores e resultados · ${links.instagramHandle}`, href: links.instagram, icone: <IconeCamera />, ext: true },
  { rotulo: 'TikTok', detalhe: `Vídeos do dia a dia · ${links.tiktokHandle}`, href: links.tiktok, icone: <IconeVideo />, ext: true },
  { rotulo: 'Site completo', detalhe: 'Minha história, método e consultoria', href: links.site, icone: <IconeSite />, ext: false },
];

const arquetipos = ['Rei', 'Guerreiro', 'Mago', 'Amante'];

export function Links() {
  // Entrada em sequência (desligada para quem prefere menos movimento, via CSS)
  const [pronto, setPronto] = useState(false);
  useEffect(() => {
    const t = window.setTimeout(() => setPronto(true), 60);
    return () => window.clearTimeout(t);
  }, []);
  const entra = (ms: number) => ({
    className: `transition-[opacity,transform] duration-[900ms] ease-[var(--ease-out-soft)] motion-reduce:transition-none ${
      pronto ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5 motion-reduce:opacity-100 motion-reduce:translate-y-0'
    }`,
    style: { transitionDelay: `${ms}ms` },
  });

  return (
    <PageShell titulo="Jocelio Lopes — Barbeiro visagista · Links" barra={false} grao={false}>
      <div className="lg:grid lg:min-h-svh lg:grid-cols-[minmax(0,1fr)_32rem] xl:grid-cols-[minmax(0,1fr)_36rem]">
        {/* Retrato */}
        <div className="relative h-[64svh] min-h-[26rem] overflow-hidden lg:sticky lg:top-0 lg:h-svh">
          <picture>
            <source type="image/webp" srcSet="/images/jocelio-abertura-640.webp 640w, /images/jocelio-abertura-1168.webp 1168w" sizes="(min-width: 1024px) 60vw, 100vw" />
            <img
              src="/images/jocelio-abertura-1168.jpg"
              alt={hero.retrato.alt}
              width={1168}
              height={1600}
              fetchPriority="high"
              className={`h-full w-full object-cover object-[50%_14%] transition-[transform,filter] duration-[1600ms] ease-[var(--ease-out-soft)] motion-reduce:transition-none ${
                pronto ? 'scale-100 brightness-100' : 'scale-[1.06] brightness-50'
              }`}
            />
          </picture>
          <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-ink/50 via-transparent to-ink lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-ink/90" />
          <div aria-hidden className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink to-transparent lg:hidden" />
          <a href="/" className="absolute left-5 top-5 rounded-full lg:left-8 lg:top-8" aria-label="Ir para o site do Jocelio Lopes">
            <LogoSelo className="size-14 text-bone drop-shadow-[0_2px_10px_rgba(0,0,0,.5)] lg:size-16" corMonograma="var(--color-clay)" />
          </a>
          <p className="eyebrow absolute right-5 top-9 text-[0.62rem] text-bone/80 lg:hidden">{links.instagramHandle}</p>
        </div>

        {/* Conteúdo */}
        <div className="relative z-10 -mt-36 px-5 pb-10 lg:mt-0 lg:flex lg:flex-col lg:justify-center lg:px-12 lg:py-16">
          <div {...entra(150)}>
            <p className="eyebrow flex items-center gap-3 text-sand">
              <span aria-hidden className="h-px w-8 bg-clay" />
              {pessoa.titulo}
            </p>
            <h1 className="mt-4 font-name text-[3.9rem] uppercase leading-[0.86] tracking-[0.05em] sm:text-[4.6rem]">
              {pessoa.primeiroNome}
              <span className="block text-sand">{pessoa.sobrenome}</span>
            </h1>
            <p className="mt-5 font-display text-[1.6rem] leading-tight">
              {hero.frase[0]} <em className="text-clay">{hero.frase[1]}</em>
            </p>
            <p className="eyebrow mt-3 text-[0.64rem] text-stone">
              {pessoa.estabelecimento} · {pessoa.cidade}/SP
            </p>
          </div>

          <div {...entra(260)}>
            <p className="eyebrow mt-9 text-[0.64rem] text-stone">Sua imagem merece intenção</p>
          </div>

          {/* Agendar — destaque principal */}
          <div {...entra(320)}>
            <a
              href={links.agendamentoNovo}
              {...externo}
              className="group mt-3 flex items-center gap-4 rounded-2xl bg-clay px-4 py-4 text-bone shadow-[0_18px_40px_-20px_rgba(178,106,71,.8)] transition-[background-color,transform] duration-300 hover:-translate-y-0.5 hover:bg-[#bd7350]"
            >
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-ink/20 ring-1 ring-bone/25">
                <IconeAgenda />
              </span>
              <span className="flex min-w-0 flex-1 flex-col">
                <span className="text-[1.02rem] font-bold uppercase tracking-[0.06em]">Agendar horário</span>
                <span className="text-[0.82rem] text-bone/80">Agenda online pelo BarberCode</span>
              </span>
              <Seta diagonal={false} />
            </a>
          </div>

          {/* Teste de arquétipo — cartão com cabeçalho visual */}
          <div {...entra(420)}>
            <a href="/teste" className="group mt-4 block overflow-hidden rounded-2xl bg-ink-2 ring-1 ring-bone/10 transition-colors duration-300 hover:ring-clay/60">
              <div className="relative grid grid-cols-2 gap-px bg-bone/10">
                {arquetipos.map((a, i) => (
                  <div key={a} className="flex items-end justify-between bg-ink px-4 pb-3 pt-6">
                    <span className={`font-name text-[1.55rem] uppercase leading-none tracking-[0.06em] ${i === 0 ? 'text-sand' : 'text-bone/70'}`}>{a}</span>
                    <span className="font-mono text-[0.6rem] text-stone">0{i + 1}</span>
                  </div>
                ))}
              </div>
              <div className="px-5 pb-5 pt-4">
                <p className="eyebrow text-[0.62rem] text-clay">Teste gratuito · 2 minutos</p>
                <p className="mt-2 font-display text-[1.75rem] leading-[1.05]">
                  Qual arquétipo a sua <em className="text-sand">imagem</em> comunica?
                </p>
                <div className="mt-4 flex items-center gap-3 border-t border-bone/10 pt-4">
                  <span className="flex size-9 items-center justify-center rounded-full ring-1 ring-clay/70 text-clay">
                    <Seta diagonal={false} />
                  </span>
                  <span className="flex flex-col">
                    <span className="text-[0.95rem] font-bold">Fazer o teste</span>
                    <span className="text-[0.78rem] text-stone">12 perguntas · resultado na hora</span>
                  </span>
                </div>
              </div>
            </a>
          </div>

          {/* Redes e contato */}
          <div {...entra(520)}>
          <ul className="mt-6 divide-y divide-bone/10 border-y border-bone/10">
            {redes.map((r) => (
              <li key={r.rotulo}>
                <a href={r.href} {...(r.ext ? externo : {})} className="group flex items-center gap-4 py-3.5 transition-colors hover:text-sand">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-ink-2 text-sand ring-1 ring-bone/10">{r.icone}</span>
                  <span className="flex min-w-0 flex-1 flex-col">
                    <span className="text-[0.98rem] font-bold">{r.rotulo}</span>
                    <span className="truncate text-[0.78rem] text-stone">{r.detalhe}</span>
                  </span>
                  <Seta diagonal={r.ext} />
                </a>
              </li>
            ))}
          </ul>
          </div>

          <div {...entra(600)}>
          <footer className="mt-10 flex items-center justify-between">
            <span className="eyebrow text-[0.6rem] text-stone">© {ano} {pessoa.nome}</span>
            <a href="/privacidade" className="eyebrow text-[0.6rem] text-stone hover:text-bone">
              Privacidade
            </a>
          </footer>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
