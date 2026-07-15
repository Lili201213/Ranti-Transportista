import { Card, CardHeader, CardBody } from "@/src/components/ui/Card";
import { avisos, type Aviso } from "./inicioData";

const tipoConfig: Record<
  Aviso["tipo"],
  { icono: string; borde: string; fondo: string }
> = {
  info: {
    icono: "ℹ️",
    borde: "border-l-blue-500",
    fondo: "bg-blue-500/5",
  },
  alerta: {
    icono: "⚠️",
    borde: "border-l-amber-500",
    fondo: "bg-amber-500/5",
  },
  exito: {
    icono: "✅",
    borde: "border-l-emerald-500",
    fondo: "bg-emerald-500/5",
  },
};

export default function Avisos() {
  return (
    <Card>
      <CardHeader
        titulo="Avisos"
        icono="🔔"
        accion={
          <span className="rounded-full bg-brand-soft px-2 py-0.5 text-xs font-semibold text-brand">
            {avisos.length}
          </span>
        }
      />
      <CardBody className="flex flex-col gap-3">
        {avisos.map((aviso) => {
          const cfg = tipoConfig[aviso.tipo];
          return (
            <div
              key={aviso.id}
              className={`flex gap-3 rounded-lg border-l-4 ${cfg.borde} ${cfg.fondo} p-3`}
            >
              <span className="text-lg leading-none" aria-hidden>
                {cfg.icono}
              </span>
              <div className="flex-1">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-sm font-semibold">{aviso.titulo}</span>
                  <span className="text-xs text-muted">{aviso.hora}</span>
                </div>
                <p className="text-sm text-muted">{aviso.descripcion}</p>
              </div>
            </div>
          );
        })}
      </CardBody>
    </Card>
  );
}
