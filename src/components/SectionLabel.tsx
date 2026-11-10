interface Props {
  numero: string;
  texto: string;
  tom?: 'claro' | 'escuro';
}

export function SectionLabel({ numero, texto, tom = 'claro' }: Props) {
  const cor = tom === 'claro' ? 'text-stone' : 'text-stone-dark';
  return (
    <p className={`eyebrow reveal flex items-center gap-4 ${cor}`}>
      <span>{numero}</span>
      <span aria-hidden className="h-px w-10 bg-current opacity-60" />
      <span>{texto}</span>
    </p>
  );
}
