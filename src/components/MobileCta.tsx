import { useEffect, useState } from 'react';
import { links } from '../data/site';
import { ArrowRight } from './Arrow';

/** Barra fixa de agendamento no mobile — aparece depois do hero e some na seção de agendamento. */
export function MobileCta() {
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const hero = document.getElementById('topo');
    const agendar = document.getElementById('agendar');
    const rodape = document.querySelector('footer');
    if (!hero || !('IntersectionObserver' in window)) return;
    const visiveis = new Set<Element>([hero]);
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting) visiveis.add(e.target);
        else visiveis.delete(e.target);
      }
      setVisivel(visiveis.size === 0);
    });
    io.observe(hero);
    if (agendar) io.observe(agendar);
    if (rodape) io.observe(rodape);
    return () => io.disconnect();
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-bone/10 bg-ink/92 px-4 pt-3 backdrop-blur-md transition-transform duration-500 lg:hidden ${
        visivel ? 'translate-y-0' : 'translate-y-full'
      }`}
      style={{ paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))' }}
      aria-hidden={!visivel}
    >
      <a
        href={links.agendamento}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={visivel ? 0 : -1}
        className="btn btn-light w-full justify-between"
      >
        Agendar horário <ArrowRight />
      </a>
    </div>
  );
}
