import { useMemo, useState, type FormEvent } from 'react';
import { ArrowRight } from '../components/Arrow';
import { PageShell } from '../components/PageShell';
import { links } from '../data/site';
import { enviarLead } from '../lib/enviarLead';
import { ordemArquetipos, perguntas, resultados, type Arquetipo } from '../data/teste';

type Etapa = 'inicio' | 'perguntas' | 'dados' | 'resultado';

const letras = ['A', 'B', 'C', 'D'];

/** Mantém só os dígitos e formata como (DD) 9XXXX-XXXX. */
function formatarTelefone(v: string) {
  const d = v.replace(/\D/g, '').slice(0, 11);
  if (d.length <= 2) return d ? `(${d}` : '';
  if (d.length <= 7) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

function calcular(respostas: (Arquetipo | null)[]) {
  const pontos: Record<Arquetipo, number> = { rei: 0, guerreiro: 0, mago: 0, amante: 0 };
  respostas.forEach((r) => r && (pontos[r] += 1));
  const total = respostas.filter(Boolean).length || 1;
  const ranking = [...ordemArquetipos].sort((a, b) => pontos[b] - pontos[a]);
  return { pontos, total, principal: ranking[0], ranking };
}

export function Teste() {
  const [etapa, setEtapa] = useState<Etapa>('inicio');
  const [atual, setAtual] = useState(0);
  const [respostas, setRespostas] = useState<(Arquetipo | null)[]>(() => perguntas.map(() => null));
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [aceite, setAceite] = useState(false);
  const [tentou, setTentou] = useState(false);

  // Ordem das opções embaralhada uma vez por pergunta, para não formar padrão
  const ordens = useMemo(
    () => perguntas.map((p) => [...p.opcoes.keys()].sort(() => Math.random() - 0.5)),
    [],
  );
  const res = useMemo(() => calcular(respostas), [respostas]);

  const telDigitos = telefone.replace(/\D/g, '');
  const dadosOk = nome.trim().length >= 2 && telDigitos.length >= 10 && aceite;

  const responder = (a: Arquetipo) => {
    const novas = [...respostas];
    novas[atual] = a;
    setRespostas(novas);
    window.setTimeout(() => {
      if (atual < perguntas.length - 1) setAtual(atual + 1);
      else setEtapa('dados');
      window.scrollTo({ top: 0 });
    }, 220);
  };

  const enviar = (e: FormEvent) => {
    e.preventDefault();
    setTentou(true);
    if (!dadosOk) return;
    const pct = (a: Arquetipo) => Math.round((res.pontos[a] / res.total) * 100);
    enviarLead({
      nome: nome.trim(),
      telefone,
      arquetipo: resultados[res.principal].nome,
      percentual: pct(res.principal),
      perfil: res.ranking.map((a) => `${resultados[a].nome} ${pct(a)}%`).join(' · '),
      respostas: respostas.map((a, i) => `${i + 1}:${a ? resultados[a].nome : '-'}`).join(' '),
    });
    setEtapa('resultado');
    window.scrollTo({ top: 0 });
  };

  const recomecar = () => {
    setRespostas(perguntas.map(() => null));
    setAtual(0);
    setEtapa('inicio');
  };

  return (
    <PageShell titulo="Teste de arquétipo — Jocelio Lopes">
      <div className="mx-auto max-w-3xl px-5 pb-24 pt-12 md:px-10 md:pt-20">
        {etapa === 'inicio' && (
          <section aria-labelledby="t-titulo">
            <p className="eyebrow text-sand">Teste de arquétipo</p>
            <h1 id="t-titulo" className="mt-5 font-display text-[3rem] leading-[0.95] tracking-[-0.015em] md:text-[4.6rem]">
              Qual arquétipo a sua <em className="text-clay">imagem</em> comunica?
            </h1>
            <p className="mt-6 max-w-xl text-[1.08rem] text-bone/75">
              Arquétipos são padrões de personalidade que aparecem no jeito de agir, de se vestir e de se apresentar. Descubra qual
              deles mais combina com você e como isso pode guiar o seu corte e a sua barba.
            </p>
            <ul className="eyebrow mt-8 flex flex-wrap gap-x-8 gap-y-2 text-stone">
              <li>{perguntas.length} perguntas</li>
              <li>Cerca de 2 minutos</li>
              <li>Sem resposta certa ou errada</li>
            </ul>
            <button type="button" onClick={() => setEtapa('perguntas')} className="btn btn-light mt-10">
              Começar o teste <ArrowRight />
            </button>
            <p className="mt-10 max-w-xl text-sm text-stone">
              Baseado no modelo de quatro arquétipos masculinos (Rei, Guerreiro, Mago e Amante) de Robert Moore e Douglas Gillette.
              Responda pelo que você é hoje, não pelo que gostaria de ser.
            </p>
          </section>
        )}

        {etapa === 'perguntas' && (
          <section aria-labelledby="p-enunciado">
            <div className="flex items-center justify-between">
              <p className="eyebrow text-stone">
                Pergunta {atual + 1} de {perguntas.length}
              </p>
              {atual > 0 && (
                <button type="button" onClick={() => setAtual(atual - 1)} className="eyebrow link-line pb-1 text-bone/70 hover:text-bone">
                  ← Voltar
                </button>
              )}
            </div>
            <div className="mt-4 h-px w-full bg-bone/15" role="progressbar" aria-valuemin={0} aria-valuemax={perguntas.length} aria-valuenow={atual + 1} aria-label="Progresso do teste">
              <div className="h-px bg-clay transition-[width] duration-500" style={{ width: `${((atual + 1) / perguntas.length) * 100}%` }} />
            </div>
            <h1 id="p-enunciado" key={atual} className="mt-10 font-display text-[2.2rem] leading-[1.05] md:text-[3.2rem]">
              {perguntas[atual].enunciado}
            </h1>
            <div className="mt-8 flex flex-col gap-3" role="radiogroup" aria-labelledby="p-enunciado">
              {ordens[atual].map((idx, i) => {
                const op = perguntas[atual].opcoes[idx];
                const marcada = respostas[atual] === op.arquetipo;
                return (
                  <button
                    key={op.texto}
                    type="button"
                    role="radio"
                    aria-checked={marcada}
                    onClick={() => responder(op.arquetipo)}
                    className={`flex min-h-16 items-center gap-5 rounded-2xl px-5 py-4 text-left text-[1.02rem] transition-[background-color,box-shadow] duration-200 ${
                      marcada ? 'bg-bone text-ink' : 'ring-1 ring-inset ring-bone/20 hover:bg-bone/5 hover:ring-bone/50'
                    }`}
                  >
                    <span className={`font-mono text-xs ${marcada ? 'text-clay' : 'text-stone'}`}>{letras[i]}</span>
                    <span>{op.texto}</span>
                  </button>
                );
              })}
            </div>
          </section>
        )}

        {etapa === 'dados' && (
          <section aria-labelledby="d-titulo">
            <p className="eyebrow text-sand">Quase lá</p>
            <h1 id="d-titulo" className="mt-5 font-display text-[2.6rem] leading-[1] md:text-[3.6rem]">
              Seu resultado <em className="text-clay">está pronto.</em>
            </h1>
            <p className="mt-5 max-w-xl text-bone/75">
              Informe seu nome e seu WhatsApp para ver o resultado. Ele também chega ao Jocelio, que pode te ajudar a
              transformar esse perfil em uma imagem pensada para você.
            </p>
            <form onSubmit={enviar} noValidate className="mt-9 flex max-w-xl flex-col gap-5">
              <label className="flex flex-col gap-2">
                <span className="eyebrow text-stone">Nome</span>
                <input
                  type="text"
                  autoComplete="name"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  aria-invalid={tentou && nome.trim().length < 2}
                  className="min-h-14 rounded-xl bg-ink-2 px-4 text-[1.05rem] text-bone ring-1 ring-inset ring-bone/20 placeholder:text-stone focus:outline-none focus:ring-clay"
                  placeholder="Seu nome"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="eyebrow text-stone">WhatsApp</span>
                <input
                  type="tel"
                  inputMode="numeric"
                  autoComplete="tel-national"
                  value={telefone}
                  onChange={(e) => setTelefone(formatarTelefone(e.target.value))}
                  aria-invalid={tentou && telDigitos.length < 10}
                  className="min-h-14 rounded-xl bg-ink-2 px-4 text-[1.05rem] text-bone ring-1 ring-inset ring-bone/20 placeholder:text-stone focus:outline-none focus:ring-clay"
                  placeholder="(16) 99999-9999"
                />
              </label>
              <label className="flex items-start gap-3 text-sm text-bone/80">
                <input type="checkbox" checked={aceite} onChange={(e) => setAceite(e.target.checked)} className="mt-1 size-4 accent-[var(--color-clay)]" />
                <span>
                  Autorizo o envio do meu nome, telefone e resultado ao Jocelio Lopes para contato sobre os seus serviços, conforme a{' '}
                  <a href="/privacidade" target="_blank" className="underline underline-offset-2">
                    política de privacidade
                  </a>
                  .
                </span>
              </label>
              {tentou && !dadosOk && (
                <p role="alert" className="text-sm text-clay">
                  Preencha nome, um WhatsApp com DDD e marque a autorização para continuar.
                </p>
              )}
              <button type="submit" className="btn btn-light mt-2 self-start">
                Ver meu resultado <ArrowRight />
              </button>
              <p className="text-xs text-stone">O resultado aparece aqui mesmo, na hora.</p>
            </form>
          </section>
        )}

        {etapa === 'resultado' && (
          <section aria-labelledby="r-titulo">
            <p className="eyebrow text-sand">{nome.trim().split(' ')[0]}, seu arquétipo predominante é</p>
            <h1 id="r-titulo" className="mt-5 font-name text-[4rem] uppercase leading-none tracking-[0.06em] md:text-[6.5rem]">
              {resultados[res.principal].nome}
            </h1>
            <p className="mt-4 font-display text-[1.7rem] italic leading-tight text-clay">{resultados[res.principal].essencia}</p>
            <p className="mt-6 max-w-2xl text-[1.08rem] text-bone/80">{resultados[res.principal].descricao}</p>

            <div className="mt-10 grid gap-10 md:grid-cols-2">
              <div>
                <h2 className="eyebrow text-stone">Na sua imagem</h2>
                <ul className="mt-4 space-y-3">
                  {resultados[res.principal].imagem.map((i) => (
                    <li key={i} className="flex gap-3">
                      <span aria-hidden className="mt-3 h-px w-4 shrink-0 bg-clay" />
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="eyebrow text-stone">Seu perfil completo</h2>
                <ul className="mt-4 space-y-4">
                  {res.ranking.map((a) => {
                    const pct = Math.round((res.pontos[a] / res.total) * 100);
                    return (
                      <li key={a}>
                        <div className="flex justify-between text-sm">
                          <span>{resultados[a].nome}</span>
                          <span className="font-mono text-stone">{pct}%</span>
                        </div>
                        <div className="mt-1.5 h-1.5 rounded-full bg-bone/10">
                          <div className={`h-1.5 rounded-full ${a === res.principal ? 'bg-clay' : 'bg-sand/60'}`} style={{ width: `${pct}%` }} />
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            <div className="mt-12 rounded-2xl bg-ink-2 p-7 ring-1 ring-bone/10 md:p-9">
              <p className="font-display text-[1.8rem] leading-tight">
                O arquétipo é o ponto de partida. <em className="text-sand">A consultoria transforma isso em imagem.</em>
              </p>
              <p className="mt-3 text-bone/70">
                Na consultoria de visagismo, o Jocelio cruza o seu arquétipo com os traços do seu rosto, sua rotina e seu estilo.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a href={links.agendamentoNovo} target="_blank" rel="noopener noreferrer" className="btn btn-light">
                  Agendar consultoria <ArrowRight />
                </a>
                <a
                  href={`https://wa.me/${links.whatsappNumero}?text=${encodeURIComponent(
                    `Olá, Jocelio! Fiz o teste no seu site e meu arquétipo deu ${resultados[res.principal].nome}. Quero saber mais sobre a consultoria de visagismo.`,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost-light"
                >
                  Falar no WhatsApp
                </a>
                <button type="button" onClick={recomecar} className="link-line self-center text-sm text-bone/70 sm:ml-2">
                  Refazer o teste
                </button>
              </div>
            </div>
          </section>
        )}
      </div>
    </PageShell>
  );
}
