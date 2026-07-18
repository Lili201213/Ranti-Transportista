"use client";

import dynamic from "next/dynamic";

import { Card, CardHeader, CardBody } from "@/src/components/ui/Card";
import { hubCoracora } from "./inicioData";

const MapaLeafletHub = dynamic(
  () => import("./MapaLeafletHub"),
  {
    ssr: false,
  }
);

export default function MapaHubCoracora() {
  return (
    <Card>
      <CardHeader
        titulo="Mapa · Hub Coracora"
        icono="📍"
      />

      <CardBody className="flex flex-col gap-4">

        <MapaLeafletHub />

        <div className="flex items-start gap-3 rounded-lg bg-brand-soft p-3">

          <span
            className="text-xl leading-none"
            aria-hidden
          >
            🏢
          </span>

          <div>

            <div className="text-sm font-semibold">
              {hubCoracora.nombre}
            </div>

            <div className="text-sm text-muted">
              {hubCoracora.direccion}
            </div>

            <div className="mt-0.5 text-xs text-muted">
              {hubCoracora.coordenadas}
            </div>

          </div>

        </div>

      </CardBody>
    </Card>
  );
}