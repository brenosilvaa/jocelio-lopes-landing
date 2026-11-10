# Jocelio Lopes — site de portfólio

Portfólio de marca pessoal de **Jocelio Lopes**, barbeiro visagista (Brutus Barbearia, Ribeirão Preto).

Stack: React 19 + TypeScript + Vite + Tailwind CSS v4. Sem bibliotecas de animação (IntersectionObserver + CSS, respeitando `prefers-reduced-motion`).

## Comandos

```bash
npm install
npm run dev        # desenvolvimento
npm run build      # build de produção (dist/)
npm run typecheck  # checagem de tipos
```

## Onde editar o conteúdo

Todo o conteúdo (textos, links, serviços, etapas do método, fotos) está em **`src/data/site.ts`**.
O link de agendamento (BarberCode) fica em `links.agendamento`.

## Estrutura

- `src/components/` — Header, Hero, Manifesto, Portfolio (+ Lightbox), Visagismo, Metodo, Sobre, Agendamento, InstagramSection, Footer, MobileCta
- `public/images/` — fotos otimizadas (WebP + JPG de fallback)
- `public/fonts/` — Instrument Serif, Instrument Sans e DM Mono (licença SIL OFL), auto-hospedadas
- `scripts/optimize-images.mjs` — regenera as imagens a partir de `scripts/raw/` (`npm i -D sharp` antes)
- `docs/PESQUISA.md` — relatório da pesquisa (Instagram, Linktree, BarberCode)

## Pendências a confirmar com o Jocelio

1. **WhatsApp:** o Linktree publica `wa.me/16991792077` (sem o código do país). O site usa `5516991792077`.
2. **Fotos em alta resolução:** as capas dos reels têm 360×640 px (máximo público). Originais melhorariam o portfólio.
3. **Antes e depois:** só existem nos Stories “Antes/Depois”. Com pares de fotos dá para ativar uma comparação.
4. **Autorização de imagem:** confirmar com os clientes que aparecem e com o pai do Jocelio (seção Sobre).
5. **Ronan Mendes:** confirmar o nome e a forma de citar o aprendizado de 2024.
6. **Open Graph:** trocar `/og-image.jpg` por URL absoluta quando houver domínio definitivo.
