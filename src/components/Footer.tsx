import { ano, links, navegacao, pessoa } from '../data/site';
import { LogoSelo } from './Logo';

export function Footer() {
  return (
    <footer className="grain relative pb-28 pt-20 md:pb-12">
      <div className="mx-auto max-w-[90rem] px-5 md:px-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="flex items-center gap-5 md:gap-8">
            <LogoSelo className="size-24 shrink-0 md:size-40" corMonograma="var(--color-clay)" />
            <p className="font-display text-[clamp(3rem,9vw,8.5rem)] leading-[0.88] tracking-[-0.02em]">
              Jocelio
              <br />
              Lopes
            </p>
          </div>
          <p className="eyebrow max-w-xs text-stone md:pb-2 md:text-right">
            Barbeiro visagista
            <br />
            {pessoa.estabelecimento} · {pessoa.cidade}
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-10 border-t border-bone/15 pt-10 md:grid-cols-4">
          <div>
            <p className="eyebrow text-stone">Navegação</p>
            <ul className="mt-4 space-y-2">
              {navegacao.map((n) => (
                <li key={n.id}>
                  <a href={`#${n.id}`} className="link-line">
                    {n.rotulo}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow text-stone">Contato</p>
            <ul className="mt-4 space-y-2">
              <li>
                <a href={links.instagram} target="_blank" rel="noopener noreferrer" className="link-line">
                  Instagram {links.instagramHandle}
                </a>
              </li>
              <li>
                <a href={links.tiktok} target="_blank" rel="noopener noreferrer" className="link-line">
                  TikTok {links.tiktokHandle}
                </a>
              </li>
              <li>
                <a href={`https://wa.me/${links.whatsappNumero}`} target="_blank" rel="noopener noreferrer" className="link-line">
                  WhatsApp {links.whatsappExibicao}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="eyebrow text-stone">Atendimento</p>
            <p className="mt-4">{pessoa.estabelecimento}</p>
            <p className="text-bone/70">{pessoa.cidade} · SP</p>
            <a href={links.agendamento} target="_blank" rel="noopener noreferrer" className="link-line mt-2 inline-block text-sand">
              Agendar horário ↗
            </a>
          </div>
          <div>
            <p className="eyebrow text-stone">{pessoa.titulo}</p>
            <p className="mt-4 text-bone/70">{pessoa.especialidades.join(' · ')}</p>
          </div>
        </div>

        <div className="eyebrow mt-16 flex flex-col gap-2 text-[0.65rem] text-stone md:flex-row md:justify-between">
          <p>© {ano} {pessoa.nome}. Todos os direitos reservados.</p>
          <p>Fotografias: Instagram {links.instagramHandle}</p>
        </div>
      </div>
    </footer>
  );
}
