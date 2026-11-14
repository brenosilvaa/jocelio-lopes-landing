import { Agendamento } from './components/Agendamento';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Metodo } from './components/Metodo';
import { MobileCta } from './components/MobileCta';
import { Portfolio } from './components/Portfolio';
import { Sobre } from './components/Sobre';
import { Visagismo } from './components/Visagismo';
import { useReveal } from './hooks/useReveal';

/** Ordem da proposta: 01 Sobre · 02 Consultoria/Teste · 03 Metodologia · 04 Resultados · 05 Agendamento. */
export default function App() {
  useReveal();
  return (
    <>
      <Header />
      <main id="conteudo">
        <Hero />
        <Sobre />
        <Visagismo />
        <Metodo />
        <Portfolio />
        <Agendamento />
      </main>
      <Footer />
      <MobileCta />
    </>
  );
}
