import { useEffect, useRef, useState } from 'react';
import { links, navegacao, pessoa } from '../data/site';

export function Header() {
  const [rolou, setRolou] = useState(false);
  const [aberto, setAberto] = useState(false);
  const botaoRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setRolou(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = aberto ? 'hidden' : '';
    if (!aberto) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setAberto(false);
        botaoRef.current?.focus();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [aberto]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-500 ${
        rolou || aberto ? 'border-b border-bone/10 bg-ink/90 backdrop-blur-md' : 'border-b border-transparent'
      }`}
    >
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-full focus:bg-bone focus:px-4 focus:py-2 focus:text-ink"
      >
        Pular para o conteúdo
      </a>
      <div className="mx-auto flex h-16 max-w-[90rem] items-center justify-between px-5 md:h-20 md:px-10">
        <a href="#topo" className="font-display text-[1.6rem] leading-none tracking-tight" aria-label={`${pessoa.nome} — início`}>
          Jocelio <span className="italic text-sand">Lopes</span>
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-9 lg:flex">
          {navegacao.slice(0, 4).map((item) => (
            <a key={item.id} href={`#${item.id}`} className="eyebrow link-line pb-1 text-bone/80 hover:text-bone">
              {item.rotulo}
            </a>
          ))}
          <a href={links.agendamento} target="_blank" rel="noopener noreferrer" className="btn btn-light min-h-11 px-6 text-sm">
            Agendar horário
          </a>
        </nav>

        <button
          ref={botaoRef}
          type="button"
          className="eyebrow -mr-2 flex min-h-11 items-center gap-3 px-2 lg:hidden"
          aria-expanded={aberto}
          aria-controls="menu-mobile"
          onClick={() => setAberto((v) => !v)}
        >
          {aberto ? 'Fechar' : 'Menu'}
          <span aria-hidden className="relative block h-3 w-6">
            <span className={`absolute left-0 h-px w-6 bg-current transition-transform duration-300 ${aberto ? 'top-1.5 rotate-45' : 'top-0'}`} />
            <span className={`absolute left-0 h-px w-6 bg-current transition-transform duration-300 ${aberto ? 'top-1.5 -rotate-45' : 'top-3'}`} />
          </span>
        </button>
      </div>

      <div
        id="menu-mobile"
        hidden={!aberto}
        className="grain h-[calc(100svh-4rem)] overflow-y-auto bg-ink px-5 pb-10 pt-6 lg:hidden"
      >
        <nav aria-label="Menu" className="flex flex-col">
          {navegacao.map((item, i) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setAberto(false)}
              className="flex items-baseline justify-between border-b border-bone/10 py-4 font-display text-[2.6rem] leading-none"
            >
              {item.rotulo}
              <span className="font-mono text-xs text-stone">0{i + 1}</span>
            </a>
          ))}
        </nav>
        <a href={links.agendamento} target="_blank" rel="noopener noreferrer" className="btn btn-light mt-10 w-full">
          Agendar horário
        </a>
        <a href={links.instagram} target="_blank" rel="noopener noreferrer" className="eyebrow mt-6 block text-center text-stone">
          {links.instagramHandle}
        </a>
      </div>
    </header>
  );
}
