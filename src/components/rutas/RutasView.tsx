"use client";

import { useState } from "react";
import { Card, CardHeader, CardBody } from "@/src/components/ui/Card";
import RutaCard from "./RutaCard";
import RutaDetalle from "./RutaDetalle";
import HistorialRutas from "./HistorialRutas";
import { rutasDeHoy } from "./rutasData";

export default function RutasView() {
  const [seleccionadaId, setSeleccionadaId] = useState(rutasDeHoy[0].id);

  const rutaSeleccionada =
    rutasDeHoy.find((r) => r.id === seleccionadaId) ?? rutasDeHoy[0];

  return (
    <div className="flex flex-col gap-8">

      {/* Encabezado */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-800 dark:text-white">
            Gestión de Rutas
          </h1>

          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            Consulta las rutas asignadas, revisa su recorrido y administra el
            estado de cada viaje.
          </p>
        </div>

        <div className="w-full lg:w-80">
          <input
            type="text"
            placeholder="🔍 Buscar ruta..."
            className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 shadow-sm outline-none transition focus:border-green-600 dark:border-slate-700 dark:bg-slate-900"
          />
        </div>
      </div>

      {/* Contenido principal */}
      <div className="grid gap-6 xl:grid-cols-[380px_1fr]">

        {/* Lista de rutas */}
        <Card className="shadow-md">
          <CardHeader
            titulo="Rutas Disponibles"
            icono="🚚"
            accion={
              <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                {rutasDeHoy.length}
              </span>
            }
          />

          <CardBody className="flex flex-col gap-4">
            {rutasDeHoy.map((ruta) => (
              <RutaCard
                key={ruta.id}
                ruta={ruta}
                seleccionada={ruta.id === seleccionadaId}
                onSeleccionar={setSeleccionadaId}
              />
            ))}
          </CardBody>
        </Card>

        {/* Detalle */}
        <RutaDetalle ruta={rutaSeleccionada} />
      </div>

      {/* Historial */}
      <HistorialRutas />
    </div>
  );
}