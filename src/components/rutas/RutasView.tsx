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
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">Rutas</h1>
        <p className="text-sm text-muted">
          Consulta tus rutas del día y su detalle.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Rutas de Hoy */}
        <Card>
          <CardHeader
            titulo="Rutas de Hoy"
            icono="🗺️"
            accion={
              <span className="rounded-full bg-brand-soft px-2 py-0.5 text-xs font-semibold text-brand">
                {rutasDeHoy.length}
              </span>
            }
          />
          <CardBody className="flex flex-col gap-3">
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

        {/* Detalle de la ruta seleccionada */}
        <RutaDetalle ruta={rutaSeleccionada} />
      </div>

      {/* Historial de Rutas */}
      <HistorialRutas />
    </div>
  );
}
