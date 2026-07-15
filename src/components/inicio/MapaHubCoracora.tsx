import { Card, CardHeader, CardBody } from "@/src/components/ui/Card";
import { hubCoracora } from "./inicioData";

export default function MapaHubCoracora() {
  return (
    <Card>
      <CardHeader titulo="Mapa · Hub Coracora" icono="📍" />
      <CardBody className="flex flex-col gap-4">
        {/* Placeholder de mapa (sin integración todavía) */}
        <div className="relative flex h-48 items-center justify-center overflow-hidden rounded-xl border border-border bg-surface">
          {/* Retícula decorativa */}
          <div
            className="absolute inset-0 opacity-60"
            style={{
              backgroundImage:
                "linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
            aria-hidden
          />
          <div className="relative flex flex-col items-center gap-1 text-center">
            <span className="text-4xl">🗺️</span>
            <span className="text-sm font-medium">Mapa no disponible</span>
            <span className="text-xs text-muted">
              La integración del mapa se agregará próximamente
            </span>
          </div>
        </div>

        <div className="flex items-start gap-3 rounded-lg bg-brand-soft p-3">
          <span className="text-xl leading-none" aria-hidden>
            🏢
          </span>
          <div>
            <div className="text-sm font-semibold">{hubCoracora.nombre}</div>
            <div className="text-sm text-muted">{hubCoracora.direccion}</div>
            <div className="mt-0.5 text-xs text-muted">
              {hubCoracora.coordenadas}
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
