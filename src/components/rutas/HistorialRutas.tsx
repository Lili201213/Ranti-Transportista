import { Card, CardHeader, CardBody } from "@/src/components/ui/Card";
import { Badge } from "@/src/components/ui/Badge";
import { historialRutas } from "./rutasData";

const estadoHistorialConfig = {
  completada: {
    label: "Completada",
    clase: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400",
  },
  cancelada: {
    label: "Cancelada",
    clase: "bg-red-500/15 text-red-600 dark:text-red-400",
  },
} as const;

export default function HistorialRutas() {
  return (
    <Card>
      <CardHeader titulo="Historial de Rutas" icono="🕓" />
      <CardBody className="flex flex-col gap-2">
        {historialRutas.map((ruta) => {
          const estado = estadoHistorialConfig[ruta.estado];
          return (
            <div
              key={ruta.id}
              className="flex items-center justify-between gap-3 rounded-lg border border-border p-3"
            >
              <div className="min-w-0">
                <div className="flex items-center gap-2 font-medium">
                  <span className="truncate">{ruta.origen}</span>
                  <span className="text-brand" aria-hidden>
                    →
                  </span>
                  <span className="truncate">{ruta.destino}</span>
                </div>
                <div className="mt-0.5 flex flex-wrap gap-x-3 text-xs text-muted">
                  <span>📅 {ruta.fecha}</span>
                  <span>📏 {ruta.distancia}</span>
                </div>
              </div>
              <Badge className={estado.clase}>{estado.label}</Badge>
            </div>
          );
        })}
      </CardBody>
    </Card>
  );
}
