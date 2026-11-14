import { StrictMode, type JSX } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { Dossie } from './pages/Dossie';
import { Links } from './pages/Links';
import { Privacidade } from './pages/Privacidade';
import { Teste } from './pages/Teste';

const rota = window.location.pathname.replace(/\/+$/, '') || '/';
const paginas: Record<string, () => JSX.Element> = {
  '/links': Links,
  '/teste': Teste,
  '/dossie': Dossie,
  '/privacidade': Privacidade,
};
const Pagina = paginas[rota] ?? App;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Pagina />
  </StrictMode>,
);
