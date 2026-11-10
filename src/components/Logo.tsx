/**
 * Identidade Jocelio Lopes: monograma geométrico "JL" (traços paralelos — o gancho do J
 * e o pé do L, que remete ao acabamento reto da tesoura) + nome em caixa-alta espaçada.
 */
export function LogoMark({ className = 'size-8', accent = true }: { className?: string; accent?: boolean }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden className={className}>
      <path d="M16.5 5v18.5a6.75 6.75 0 0 1-13.5 0" stroke="currentColor" strokeWidth="3" strokeLinecap="square" />
      <path d="M23.5 5v30" stroke="currentColor" strokeWidth="3" strokeLinecap="square" />
      <path d="M23.5 35H37" stroke={accent ? 'var(--color-clay)' : 'currentColor'} strokeWidth="3" strokeLinecap="square" />
    </svg>
  );
}

interface LogoProps {
  className?: string;
  /** Mostra a linha "Barbeiro visagista" abaixo do nome. */
  subtitulo?: boolean;
}

export function Logo({ className = '', subtitulo = true }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <LogoMark className="size-8 shrink-0 md:size-9" />
      <span aria-hidden className="h-8 w-px bg-current opacity-25" />
      <span className="flex flex-col leading-none">
        <span className="font-sans text-[0.82rem] font-bold uppercase tracking-[0.24em]">Jocelio Lopes</span>
        {subtitulo && <span className="mt-1.5 font-mono text-[0.6rem] uppercase tracking-[0.22em] text-stone">Barbeiro visagista</span>}
      </span>
    </span>
  );
}
