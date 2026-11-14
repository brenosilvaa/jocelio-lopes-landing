import { useEffect, type ReactNode } from 'react';
import { Logo } from './Logo';

interface Props {
  titulo: string;
  children: ReactNode;
  /** Esconde a página de buscadores (ex.: /dossie). */
  noindex?: boolean;
  /** Mostra a barra superior com o logo (padrão: sim). */
  barra?: boolean;
}

/** Moldura das páginas extras (/links, /teste, /dossie, /privacidade). */
export function PageShell({ titulo, children, noindex = false, barra = true }: Props) {
  useEffect(() => {
    document.title = titulo;
    if (noindex) {
      const m = document.createElement('meta');
      m.name = 'robots';
      m.content = 'noindex, nofollow';
      document.head.appendChild(m);
      return () => m.remove();
    }
  }, [titulo, noindex]);

  return (
    <div className="grain min-h-svh">
      {barra && (
        <header className="border-b border-bone/10">
          <div className="mx-auto flex h-16 max-w-[90rem] items-center justify-between px-5 md:h-20 md:px-10">
            <a href="/" className="text-bone" aria-label="Jocelio Lopes — página inicial">
              <Logo />
            </a>
            <a href="/" className="eyebrow link-line shrink-0 pb-1 text-bone/70 hover:text-bone">
              <span className="sm:hidden">Site</span>
              <span className="hidden sm:inline">Ir para o site</span>
            </a>
          </div>
        </header>
      )}
      <main id="conteudo">{children}</main>
    </div>
  );
}
