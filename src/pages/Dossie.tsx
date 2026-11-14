import { useEffect, useMemo, useRef, useState, type FormEvent } from 'react';
import { ArrowRight } from '../components/Arrow';
import { PageShell } from '../components/PageShell';
import { opcoesArquetipo, opcoesCabelo, opcoesRosto, type GrupoOpcoes } from '../data/dossie';

const vazio = { cliente: '', arquetipo: '', rosto: '', cabelo: '', proposta: '' };

const campo =
  'min-h-14 w-full rounded-xl bg-ink-2 px-4 text-[1.02rem] text-bone ring-1 ring-inset ring-bone/20 placeholder:text-stone focus:outline-none focus:ring-clay';

function Select({ rotulo, valor, opcoes, onChange }: { rotulo: string; valor: string; opcoes: string[] | GrupoOpcoes[]; onChange: (v: string) => void }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="eyebrow text-stone">{rotulo}</span>
      <select value={valor} onChange={(e) => onChange(e.target.value)} className={`${campo} appearance-none bg-[length:12px] bg-[right_1rem_center] bg-no-repeat pr-10`}
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' fill='none' stroke='%23CDBFA8' stroke-width='1.5'/%3E%3C/svg%3E\")" }}>
        <option value="" disabled>
          Selecionar
        </option>
        {(opcoes as (string | GrupoOpcoes)[]).map((o) =>
          typeof o === 'string' ? (
            <option key={o} value={o}>
              {o}
            </option>
          ) : (
            <optgroup key={o.grupo} label={o.grupo}>
              {o.opcoes.map((op) => (
                <option key={op.valor} value={op.valor}>
                  {op.rotulo}
                </option>
              ))}
            </optgroup>
          ),
        )}
      </select>
    </label>
  );
}

export function Dossie() {
  const [f, setF] = useState(vazio);
  const [imagens, setImagens] = useState<File[]>([]);
  const [gerando, setGerando] = useState(false);
  const [aviso, setAviso] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const previews = useMemo(() => imagens.map((i) => URL.createObjectURL(i)), [imagens]);
  useEffect(() => () => previews.forEach((u) => URL.revokeObjectURL(u)), [previews]);

  const completo = f.cliente.trim() && f.arquetipo && f.rosto && f.cabelo && f.proposta.trim();
  const set = (k: keyof typeof vazio) => (v: string) => setF((s) => ({ ...s, [k]: v }));

  const adicionar = (lista: FileList | null) => {
    if (!lista) return;
    const novas = [...lista].filter((x) => x.type.startsWith('image/'));
    setImagens((s) => [...s, ...novas].slice(0, 8));
    if (inputRef.current) inputRef.current.value = '';
  };

  const exportar = async (e: FormEvent) => {
    e.preventDefault();
    if (!completo || gerando) return;
    setGerando(true);
    setAviso(null);
    try {
      const { gerarDossiePdf } = await import('../lib/dossiePdf');
      const blob = await gerarDossiePdf({ ...f, cliente: f.cliente.trim(), imagens });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `Dossie-visagista-${f.cliente.trim().replace(/\s+/g, '-')}.pdf`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.setTimeout(() => URL.revokeObjectURL(url), 10000);
      setF(vazio);
      setImagens([]);
      setAviso('PDF gerado e baixado. O formulário foi limpo.');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err) {
      console.error(err);
      setAviso('Não foi possível gerar o PDF. Tente de novo ou remova alguma imagem.');
    } finally {
      setGerando(false);
    }
  };

  return (
    <PageShell titulo="Dossiê visagista — Jocelio Lopes" noindex>
      <div className="mx-auto max-w-3xl px-5 pb-24 pt-12 md:px-10 md:pt-16">
        <p className="eyebrow text-sand">Uso interno</p>
        <h1 className="mt-5 font-display text-[2.8rem] leading-[0.95] md:text-[4rem]">
          Dossiê <em className="text-clay">visagista</em>
        </h1>
        <p className="mt-5 max-w-xl text-bone/75">
          Preencha a análise do cliente e exporte o PDF para enviar. Nada é salvo: depois de gerar o arquivo, o formulário é limpo.
        </p>

        {aviso && (
          <p role="status" className="mt-6 rounded-xl bg-moss/30 px-4 py-3 text-sm text-bone ring-1 ring-moss">
            {aviso}
          </p>
        )}

        <form onSubmit={exportar} className="mt-10 flex flex-col gap-6">
          <label className="flex flex-col gap-2">
            <span className="eyebrow text-stone">Nome do cliente</span>
            <input type="text" value={f.cliente} onChange={(e) => set('cliente')(e.target.value)} className={campo} placeholder="Nome completo" autoComplete="off" />
          </label>

          <div className="grid gap-6 md:grid-cols-3">
            <Select rotulo="Arquétipo" valor={f.arquetipo} opcoes={opcoesArquetipo} onChange={set('arquetipo')} />
            <Select rotulo="Formato de rosto" valor={f.rosto} opcoes={opcoesRosto} onChange={set('rosto')} />
            <Select rotulo="Tipo de cabelo" valor={f.cabelo} opcoes={opcoesCabelo} onChange={set('cabelo')} />
          </div>

          <label className="flex flex-col gap-2">
            <span className="eyebrow text-stone">Proposta visagista</span>
            <textarea
              value={f.proposta}
              onChange={(e) => set('proposta')(e.target.value)}
              rows={9}
              className={`${campo} py-3 leading-relaxed`}
              placeholder="Descreva a proposta pensada para o cliente: corte, barba, finalização, cuidados no dia a dia…"
            />
          </label>

          <div className="flex flex-col gap-3">
            <span className="eyebrow text-stone">Imagens (opcional, até 8)</span>
            <label className="flex min-h-24 cursor-pointer flex-col items-center justify-center gap-1 rounded-xl border border-dashed border-bone/25 px-4 py-6 text-center text-sm text-bone/70 hover:border-clay hover:text-bone">
              <span className="font-bold text-bone">Toque para anexar imagens</span>
              <span className="text-xs text-stone">Fotos do cliente, referências de corte e barba</span>
              <input ref={inputRef} type="file" accept="image/*" multiple className="sr-only" onChange={(e) => adicionar(e.target.files)} />
            </label>
            {imagens.length > 0 && (
              <ul className="grid grid-cols-3 gap-3 sm:grid-cols-4">
                {imagens.map((img, i) => (
                  <li key={`${img.name}-${i}`} className="relative">
                    <img src={previews[i]} alt={`Imagem anexada ${i + 1}`} className="aspect-square w-full rounded-lg object-cover" />
                    <button
                      type="button"
                      onClick={() => setImagens((s) => s.filter((_, j) => j !== i))}
                      className="absolute right-1.5 top-1.5 flex size-8 items-center justify-center rounded-full bg-ink/80 text-bone"
                      aria-label={`Remover imagem ${i + 1}`}
                    >
                      ×
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="mt-2 flex flex-col gap-3 border-t border-bone/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-stone">{completo ? 'Tudo pronto para exportar.' : 'Preencha nome, as três listas e a proposta para liberar o PDF.'}</p>
            <button type="submit" disabled={!completo || gerando} className="btn btn-light disabled:cursor-not-allowed disabled:opacity-40">
              {gerando ? 'Gerando PDF…' : 'Exportar PDF'} <ArrowRight />
            </button>
          </div>
        </form>
      </div>
    </PageShell>
  );
}
