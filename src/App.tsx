import { Agendamento } from './components/Agendamento';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { InstagramSection } from './components/InstagramSection';
import { Manifesto } from './components/Manifesto';
import { Metodo } from './components/Metodo';
import { MobileCta } from './components/MobileCta';
import { Portfolio } from './components/Portfolio';
import { Sobre } from './components/Sobre';
import { Visagismo } from './components/Visagismo';
import { useReveal } from './hooks/useReveal';

export default function App() {
  useReveal();
  return (
    <>
      <Header />
      <main id="conteudo">
        <Hero />
        <Manifesto />
        <Portfolio />
        <Visagismo />
        <Metodo />
        <Sobre />
        <Agendamento />
        <InstagramSection />
      </main>
      <Footer />
      <MobileCta />
    </>
  );
}
