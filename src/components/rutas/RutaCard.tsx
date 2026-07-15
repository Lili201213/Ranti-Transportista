import { Badge } from "@/src/components/ui/Badge";
import { estadoRutaConfig, type Ruta } from "./rutasData";

type RutaCardProps = {
  ruta: Ruta;
  seleccionada: boolean;
  onSeleccionar: (id: string) => void;
};

export default function RutaCard({
  ruta,
  seleccionada,
  onSeleccionar,
}: RutaCardProps) {
  const estado = estadoRutaConfig[ruta.estado];

  return (
    <button
      type="button"
      onClick={() => onSeleccionar(ruta.id)}
      aria-pressed={seleccionada}
      className={`w-full rounded-xl border p-4 text-left transition-colors ${
        seleccionada
          ? "border-brand bg-brand-soft"
          : "border-border bg-background hover:border-brand/40 hover:bg-surface"
      }`}
    >
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 font-semibold">
          <span>{ruta.origen}</span>
          <span className="text-brand" aria-hidden>
            →
          </span>
          <span>{ruta.destino}</span>
        </div>
        <Badge className={estado.clase}>{estado.label}</Badge>
      </div>
      <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted">
        <span>🕗 {ruta.salida}</span>
        <span>📏 {ruta.distancia}</span>
        <span>📍 {ruta.paradas} paradas</span>
      </div>
    </button>
  );
}
