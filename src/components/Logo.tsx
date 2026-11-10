import { useId } from 'react';

/**
 * Identidade Jocelio Lopes — "Selo autoral":
 * monograma JL em serifa itálica dentro de um selo duplo, com o nome em volta.
 */
interface SeloProps {
  className?: string;
  /** Cor do monograma (padrão: cor do texto atual). */
  corMonograma?: string;
  /** Cor do texto circular (padrão: areia). */
  corTexto?: string;
}

export function LogoSelo({ className = 'size-12', corMonograma = 'currentColor', corTexto = 'var(--color-sand)' }: SeloProps) {
  const id = useId().replace(/:/g, '');
  return (
    <svg viewBox="0 0 100 100" aria-hidden className={className}>
      <defs>
        <path id={`selo-${id}`} d="M50 50 m-38 0 a38 38 0 1 1 76 0 a38 38 0 1 1 -76 0" />
      </defs>
      <circle cx="50" cy="50" r="47" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="50" cy="50" r="29" fill="none" stroke="currentColor" strokeWidth="1" />
      <text fontFamily="'DM Mono', ui-monospace, monospace" fontSize="8" fill={corTexto}>
        <textPath href={`#selo-${id}`} textLength="236" lengthAdjust="spacing">
          JOCELIO LOPES · BARBEIRO VISAGISTA ·{' '}
        </textPath>
      </text>
      <text
        x="50"
        y="61"
        textAnchor="middle"
        fontFamily="'Instrument Serif', serif"
        fontStyle="italic"
        fontSize="34"
        fill={corMonograma}
      >
        JL
      </text>
    </svg>
  );
}

export function Logo({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <LogoSelo className="size-11 shrink-0 md:size-12" />
      <span className="flex flex-col leading-none">
        <span className="font-name text-[1.18rem] uppercase leading-none tracking-[0.14em] md:text-[1.3rem]">Jocelio Lopes</span>
        <span className="mt-1.5 font-mono text-[0.58rem] uppercase tracking-[0.26em] text-stone">Barbeiro visagista</span>
      </span>
    </span>
  );
}
