import { manifesto } from '../data/site';

export function Manifesto() {
  return (
    <section aria-label="Manifesto" className="border-y border-bone/10 bg-ink-2">
      <div className="mx-auto max-w-[90rem] px-5 py-20 md:px-10 md:py-28">
        <blockquote className="reveal mx-auto max-w-5xl">
          <p className="font-display text-[2.4rem] leading-[1.02] tracking-[-0.01em] md:text-[4.4rem]">
            <span aria-hidden className="mr-2 text-clay">“</span>
            {manifesto.texto.split('—')[0]}—<em className="text-sand">{manifesto.texto.split('—')[1]}</em>
          </p>
          <footer className="eyebrow mt-8 text-stone">— {manifesto.autor}</footer>
        </blockquote>
      </div>
    </section>
  );
}
