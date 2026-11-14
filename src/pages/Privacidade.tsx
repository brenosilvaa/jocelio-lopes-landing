import { PageShell } from '../components/PageShell';
import { links, pessoa } from '../data/site';

export function Privacidade() {
  return (
    <PageShell titulo="Política de privacidade — Jocelio Lopes">
      <article className="mx-auto max-w-2xl px-5 pb-24 pt-12 md:px-10 md:pt-20">
        <p className="eyebrow text-sand">Privacidade</p>
        <h1 className="mt-5 font-display text-[2.8rem] leading-none md:text-[3.6rem]">Política de privacidade</h1>
        <div className="mt-8 space-y-5 text-bone/80">
          <p>
            Este site é de {pessoa.nome}, {pessoa.titulo.toLowerCase()} na {pessoa.estabelecimento}, em {pessoa.cidade}. Esta página
            explica o que acontece com os dados informados no teste de arquétipo.
          </p>
          <h2 className="pt-2 font-display text-[1.7rem] text-bone">Quais dados</h2>
          <p>Nome, telefone (WhatsApp) e o resultado do teste, informados por você ao final do teste.</p>
          <h2 className="pt-2 font-display text-[1.7rem] text-bone">Para que são usados</h2>
          <p>
            Para que o Jocelio possa entrar em contato com você sobre seus serviços, como a consultoria de visagismo e o
            agendamento de horários. Os dados não são vendidos nem repassados a outras pessoas ou empresas.
          </p>
          <h2 className="pt-2 font-display text-[1.7rem] text-bone">Onde ficam guardados</h2>
          <p>
            Ao ver o resultado, seus dados são enviados para uma planilha privada do Jocelio no Google Planilhas, que só ele
            acessa, e ele recebe um aviso por e-mail. O site em si não guarda nada no seu aparelho.
          </p>
          <h2 className="pt-2 font-display text-[1.7rem] text-bone">Seus direitos</h2>
          <p>
            Pela Lei Geral de Proteção de Dados (Lei nº 13.709/2018), você pode pedir a qualquer momento para ver, corrigir ou
            apagar seus dados. Basta falar com o Jocelio pelo WhatsApp{' '}
            <a href={`https://wa.me/${links.whatsappNumero}`} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">
              {links.whatsappExibicao}
            </a>
            .
          </p>
        </div>
      </article>
    </PageShell>
  );
}
