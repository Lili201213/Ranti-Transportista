import Link from "next/link";
import { Card, CardHeader, CardBody } from "@/src/components/ui/Card";
import { rutaDeHoy, type ParadaRuta } from "./inicioData";

const estadoConfig: Record<
  ParadaRuta["estado"],
  { label: string; punto: string; texto: string }
> = {
  entregado: {
    label: "Entregado",
    punto: "bg-emerald-500",
    texto: "text-emerald-600 dark:text-emerald-400",
  },
  en_camino: {
    label: "En camino",
    punto: "bg-brand",
    texto: "text-brand",
  },
  pendiente: {
    label: "Pendiente",
    punto: "bg-muted",
    texto: "text-muted",
  },
};

export default function RutaDeHoy() {
  return (
    <Card>
      <CardHeader
        titulo="Mi Ruta de Hoy"
        icono="🗺️"
        accion={
          <Link
            href="/rutas"
            className="text-sm font-medium text-brand hover:underline"
          >
            Ver ruta
          </Link>
        }
      />
      <CardBody className="flex flex-col gap-5">
        <div>
          <h3 className="font-semibold">{rutaDeHoy.nombre}</h3>
          <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted">
            <span>📍 {rutaDeHoy.totalParadas} paradas</span>
            <span>📏 {rutaDeHoy.distancia}</span>
            <span>⏱️ {rutaDeHoy.duracion}</span>
          </div>
        </div>

        <ol className="flex flex-col">
          {rutaDeHoy.paradas.map((parada, i) => {
            const cfg = estadoConfig[parada.estado];
            const esUltima = i === rutaDeHoy.paradas.length - 1;
            return (
              <li key={parada.id} className="flex gap-3">
                <div className="flex flex-col items-center">
                  <span
                    className={`mt-1.5 h-3 w-3 shrink-0 rounded-full ${cfg.punto}`}
                  />
                  {!esUltima && (
                    <span className="my-1 w-px flex-1 bg-border" />
                  )}
                </div>
                <div className="flex-1 pb-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-medium">{parada.cliente}</span>
                    <span className="text-sm text-muted">{parada.hora}</span>
                  </div>
                  <div className="text-sm text-muted">{parada.direccion}</div>
                  <span className={`text-xs font-medium ${cfg.texto}`}>
                    {cfg.label}
                  </span>
                </div>
              </li>
            );
          })}
        </ol>
      </CardBody>
    </Card>
  );
}
