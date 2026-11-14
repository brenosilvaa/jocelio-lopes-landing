# Planilha de leads do teste de arquétipo

Cada pessoa que termina o teste vê o resultado na tela e, em segundo plano, o site envia
nome, WhatsApp e resultado para uma planilha Google. A cada novo lead chega um e-mail de aviso.
Custo: zero (Google Planilhas + Apps Script; o e-mail tem limite diário de cerca de 100 avisos em conta Gmail comum).

## Instalação (uma vez, ~5 minutos)

1. Em https://sheets.new crie uma planilha e dê o nome **Leads — Teste de arquétipo**.
2. Menu **Extensões → Apps Script**. Apague o conteúdo e cole o arquivo `Leads.gs`.
   - Opcional: em `EMAIL_AVISO` coloque o e-mail do Jocelio (vazio = e-mail da conta dona da planilha).
3. Salve (ícone de disquete). Na barra de cima escolha a função **configurar** e clique em **Executar**.
   O Google pede autorização: escolha a conta → *Avançado* → *Acessar (não seguro)* → *Permitir*.
   (O aviso aparece porque o script é seu e não passou por verificação do Google; é normal.)
4. **Implantar → Nova implantação** → engrenagem → **App da Web**:
   - Executar como: **Eu**
   - Quem pode acessar: **Qualquer pessoa**
   Clique em **Implantar** e copie a **URL do App da Web** (termina em `/exec`).
5. Cole essa URL em `src/data/site.ts`, em `integracoes.planilhaTeste`, e publique o site.
6. Compartilhe a planilha com o Jocelio (botão Compartilhar) se ela estiver na sua conta.

## Alterou o script depois?
Use **Implantar → Gerenciar implantações → editar (lápis) → Versão: Nova versão**, para manter a mesma URL.

A coluna **Status** começa como "Novo" — o Jocelio pode trocar para "Contatado", "Agendou" etc.
