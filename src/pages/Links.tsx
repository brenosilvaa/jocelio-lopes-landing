import { hero, links, pessoa } from '../data/site';
import { ArrowRight, ArrowUpRight } from '../components/Arrow';
import { LogoSelo } from '../components/Logo';
import { PageShell } from '../components/PageShell';

interface Item {
  rotulo: string;
  detalhe: string;
  href: string;
  externo: boolean;
  destaque?: 'principal' | 'teste';
}

const itens: Item[] = [
  { rotulo: 'Agendar horário', detalhe: 'Agenda online · BarberCode', href: links.agendamentoNovo, externo: true, destaque: 'principal' },
  { rotulo: 'Descubra seu arquétipo', detalhe: 'Teste gratuito · 2 minutos', href: '/teste', externo: false, destaque: 'teste' },
  { rotulo: 'Falar no WhatsApp', detalhe: links.whatsappExibicao, href: `https://wa.me/${links.whatsappNumero}`, externo: true },
  { rotulo: 'Instagram', detalhe: links.instagramHandle, href: links.instagram, externo: true },
  { rotulo: 'TikTok', detalhe: links.tiktokHandle, href: links.tiktok, externo: true },
  { rotulo: 'Site completo', detalhe: 'Trabalhos, método e consultoria', href: links.site, externo: false },
];

export function Links() {
  return (
    <PageShell titulo="Jocelio Lopes — Links" barra={false}>
      <div className="mx-auto flex min-h-svh max-w-md flex-col px-5 pb-10 pt-12">
        <div className="flex flex-col items-center text-center">
          <div className="relative">
            <img
              src="/images/jocelio-retrato-640.webp"
              alt="Retrato em preto e branco de Jocelio Lopes"
              width={112}
              height={112}
              className="size-28 rounded-full object-cover object-[40%_30%] ring-1 ring-bone/20"
            />
            <LogoSelo className="absolute -bottom-3 -right-4 size-14 rounded-full bg-ink" corMonograma="var(--color-clay)" />
          </div>
          <h1 className="mt-7 font-name text-[2.4rem] uppercase leading-none tracking-[0.08em]">
            {pessoa.primeiroNome} <span className="text-sand">{pessoa.sobrenome}</span>
          </h1>
          <p className="eyebrow mt-3 text-stone">{pessoa.titulo} · {pessoa.cidade}</p>
          <p className="mt-5 font-display text-[1.55rem] leading-tight">
            {hero.frase[0]} <em className="text-clay">{hero.frase[1]}</em>
          </p>
        </div>

        <nav aria-label="Links" className="mt-9 flex flex-col gap-3">
          {itens.map((it) => {
            const estilo =
              it.destaque === 'principal'
                ? 'bg-bone text-ink hover:bg-white'
                : it.destaque === 'teste'
                  ? 'bg-clay/15 text-bone ring-1 ring-inset ring-clay/70 hover:bg-clay/25'
                  : 'text-bone ring-1 ring-inset ring-bone/20 hover:ring-bone/60';
            return (
              <a
                key={it.rotulo}
                href={it.href}
                {...(it.externo ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className={`group flex min-h-16 items-center justify-between gap-4 rounded-2xl px-5 py-3 transition-[background-color,box-shadow] duration-300 ${estilo}`}
              >
                <span className="flex flex-col">
                  <span className="text-[1.02rem] font-bold">{it.rotulo}</span>
                  <span className={`font-mono text-[0.68rem] uppercase tracking-[0.14em] ${it.destaque === 'principal' ? 'text-ink/55' : 'text-stone'}`}>
                    {it.detalhe}
                  </span>
                </span>
                {it.externo ? <ArrowUpRight className="size-4 shrink-0" /> : <ArrowRight className="size-4 shrink-0" />}
              </a>
            );
          })}
        </nav>

        <p className="eyebrow mt-auto pt-12 text-center text-[0.62rem] text-stone">
          {pessoa.local}
        </p>
      </div>
    </PageShell>
  );
}
