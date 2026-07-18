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
      className={`w-full rounded-2xl border p-5 text-left shadow-sm transition-all duration-300 ${
        seleccionada
          ? "border-green-600 bg-green-50 shadow-lg dark:bg-green-950/20"
          : "border-slate-200 bg-white hover:-translate-y-1 hover:border-green-400 hover:shadow-md dark:border-slate-700 dark:bg-slate-900"
      }`}
    >
      {/* Encabezado */}
      <div className="flex items-start justify-between">
        <div>
          <h3 className="flex items-center gap-2 text-lg font-bold text-slate-800 dark:text-white">
            🚚 {ruta.origen}
            <span className="text-green-600">→</span>
            {ruta.destino}
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            Ruta asignada para hoy
          </p>
        </div>

        <Badge className={estado.clase}>{estado.label}</Badge>
      </div>

      {/* Información */}
      <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
        <div className="rounded-xl bg-slate-100 p-3 dark:bg-slate-800">
          <div className="text-xs text-slate-500">📏 Distancia</div>
          <div className="mt-1 font-semibold">{ruta.distancia}</div>
        </div>

        <div className="rounded-xl bg-slate-100 p-3 dark:bg-slate-800">
          <div className="text-xs text-slate-500">⏱ Duración</div>
          <div className="mt-1 font-semibold">{ruta.duracion}</div>
        </div>

        <div className="rounded-xl bg-slate-100 p-3 dark:bg-slate-800">
          <div className="text-xs text-slate-500">🕗 Salida</div>
          <div className="mt-1 font-semibold">{ruta.salida}</div>
        </div>

        <div className="rounded-xl bg-slate-100 p-3 dark:bg-slate-800">
          <div className="text-xs text-slate-500">📍 Paradas</div>
          <div className="mt-1 font-semibold">{ruta.paradas}</div>
        </div>
      </div>

      {/* Pie */}
      <div className="mt-5 flex items-center justify-between border-t pt-3">
        <span className="text-sm text-slate-500">
          Seleccionar para ver el detalle
        </span>

        <span className="text-lg text-green-600">➜</span>
      </div>
    </button>
  );
}