import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-border bg-background shadow-sm ${className}`}
    >
      {children}
    </div>
  );
}

type CardHeaderProps = {
  titulo: string;
  icono?: string;
  accion?: ReactNode;
};

export function CardHeader({ titulo, icono, accion }: CardHeaderProps) {
  return (
    <div className="flex items-center justify-between border-b border-border px-5 py-4">
      <h2 className="flex items-center gap-2 text-base font-semibold">
        {icono && (
          <span className="text-lg leading-none" aria-hidden>
            {icono}
          </span>
        )}
        {titulo}
      </h2>
      {accion}
    </div>
  );
}

export function CardBody({ children, className = "" }: CardProps) {
  return <div className={`p-5 ${className}`}>{children}</div>;
}
