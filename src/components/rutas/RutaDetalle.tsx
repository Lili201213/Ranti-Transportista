import { Card, CardHeader, CardBody } from "@/src/components/ui/Card";
import { Badge } from "@/src/components/ui/Badge";
import { estadoRutaConfig, type Ruta } from "./rutasData";

type RutaDetalleProps = {
  ruta: Ruta;
};

function InfoItem({
  icono,
  etiqueta,
  valor,
}: {
  icono: string;
  etiqueta: string;
  valor: string;
}) {
  return (
    <div className="flex flex-col gap-0.5 rounded-lg bg-surface p-3">
      <span className="text-xs text-muted">
        <span aria-hidden>{icono}</span> {etiqueta}
      </span>
      <span className="text-sm font-semibold">{valor}</span>
    </div>
  );
}

export default function RutaDetalle({ ruta }: RutaDetalleProps) {
  const estado = estadoRutaConfig[ruta.estado];

  return (
    <Card>
      <CardHeader
        titulo="Detalle de Ruta"
        icono="🧭"
        accion={<Badge className={estado.clase}>{estado.label}</Badge>}
      />
      <CardBody className="flex flex-col gap-5">
        <div>
          <h3 className="flex items-center gap-2 text-lg font-bold">
            {ruta.origen}
            <span className="text-brand" aria-hidden>
              →
            </span>
            {ruta.destino}
          </h3>
        </div>

        {/* Información del viaje */}
        <section className="flex flex-col gap-2">
          <h4 className="text-sm font-semibold text-muted">
            Información del viaje
          </h4>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            <InfoItem icono="📏" etiqueta="Distancia" valor={ruta.distancia} />
            <InfoItem icono="⏱️" etiqueta="Duración" valor={ruta.duracion} />
            <InfoItem icono="📍" etiqueta="Paradas" valor={`${ruta.paradas}`} />
            <InfoItem icono="🕗" etiqueta="Salida" valor={ruta.salida} />
            <InfoItem icono="🕚" etiqueta="Llegada" valor={ruta.llegada} />
          </div>
        </section>

        {/* Ubicación */}
        <section className="flex flex-col gap-2">
          <h4 className="text-sm font-semibold text-muted">Ubicación</h4>
          <div className="rounded-lg bg-surface p-3">
            <div className="flex items-center gap-2 text-sm font-medium">
              <span aria-hidden>📌</span> {ruta.ubicacionActual}
            </div>
            <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-border">
              <div
                className="h-full rounded-full bg-brand transition-all"
                style={{ width: `${ruta.progreso}%` }}
              />
            </div>
            <div className="mt-1 text-xs text-muted">
              {ruta.progreso}% del recorrido completado
            </div>
          </div>
        </section>

        {/* Estado: clima y carga */}
        <section className="flex flex-col gap-2">
          <h4 className="text-sm font-semibold text-muted">Estado</h4>
          <div className="grid gap-2 sm:grid-cols-2">
            <div className="flex items-center gap-3 rounded-lg bg-surface p-3">
              <span className="text-2xl" aria-hidden>
                {ruta.clima.icono}
              </span>
              <div>
                <div className="text-xs text-muted">Clima</div>
                <div className="text-sm font-semibold">
                  {ruta.clima.descripcion} · {ruta.clima.temperatura}
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-surface p-3">
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted">
                  <span aria-hidden>📦</span> Carga
                </span>
                <span className="text-xs font-medium text-muted">
                  {ruta.carga.peso}
                </span>
              </div>
              <div className="mt-1 text-sm font-semibold">
                {ruta.carga.descripcion}
              </div>
              <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-border">
                <div
                  className="h-full rounded-full bg-emerald-500"
                  style={{ width: `${ruta.carga.ocupacion}%` }}
                />
              </div>
              <div className="mt-1 text-xs text-muted">
                {ruta.carga.ocupacion}% de ocupación
              </div>
            </div>
          </div>
        </section>

        {/* Iniciar Ruta */}
        <button
          type="button"
          disabled={ruta.estado === "completada"}
          className="mt-1 w-full rounded-xl bg-brand py-3 text-sm font-semibold text-brand-foreground transition-transform hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-50"
        >
          {ruta.estado === "en_curso"
            ? "Continuar Ruta"
            : ruta.estado === "completada"
              ? "Ruta Completada"
              : "🚀 Iniciar Ruta"}
        </button>
      </CardBody>
    </Card>
  );
}
