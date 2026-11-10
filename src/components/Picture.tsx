import { useState } from 'react';

interface Props {
  webp: readonly { src: string; w: number }[] | string;
  fallback: string;
  alt: string;
  width: number;
  height: number;
  sizes?: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
}

/** Imagem responsiva com WebP, fallback JPG, lazy loading e estado de erro. */
export function Picture({ webp, fallback, alt, width, height, sizes = '100vw', className = '', imgClassName = '', priority = false }: Props) {
  const [erro, setErro] = useState(false);
  const srcSet = typeof webp === 'string' ? webp : webp.map((s) => `${s.src} ${s.w}w`).join(', ');

  if (erro) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex items-center justify-center bg-ink-3 text-stone ${className}`}
        style={{ aspectRatio: `${width} / ${height}` }}
      >
        <span className="eyebrow">Imagem indisponível</span>
      </div>
    );
  }

  return (
    <picture className={className}>
      <source type="image/webp" srcSet={srcSet} sizes={sizes} />
      <img
        src={fallback}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        fetchPriority={priority ? 'high' : 'auto'}
        onError={() => setErro(true)}
        className={imgClassName}
      />
    </picture>
  );
}
