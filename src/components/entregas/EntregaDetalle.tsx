"use client";

import Link from "next/link";
import MapaEntrega from "./mapa/MapaEntrega";
import { Card, CardHeader, CardBody } from "@/src/components/ui/Card";

export default function EntregaDetalle({
  entrega,
}: any) {
  return (
    <Card className="mt-8 overflow-hidden">

      <CardHeader
        titulo="Detalle de Entrega"
        icono="📋"
      />

      <CardBody>

        <div className="grid gap-4 text-gray-700 md:grid-cols-2">

          <p>
            👤 <strong>Cliente:</strong> {entrega.cliente}
          </p>

          <p>
            📍 <strong>Dirección:</strong> {entrega.direccion}
          </p>

          <p>
            📦 <strong>Producto:</strong> {entrega.producto}
          </p>

          <p>
            ⚖️ <strong>Carga:</strong> {entrega.carga}
          </p>

          <p>
            🚚 <strong>Ruta:</strong> {entrega.origen} → {entrega.destino}
          </p>

          <p>
            🚦 <strong>Estado:</strong>{" "}
            <span className="font-semibold text-blue-600">
              {entrega.estado}
            </span>
          </p>

          <p>
            📌 <strong>Ubicación:</strong> {entrega.ubicacion}
          </p>

          <p>
            💰 <strong>Monto:</strong>{" "}
            <span className="font-bold text-green-600">
              S/ {entrega.monto}
            </span>
          </p>

        </div>


        {/* MAPA */}
        <div className="mt-6">
          <MapaEntrega />
        </div>


        {/* CONFIRMAR ENTREGA */}
        <Link
          href={`/confirmar-entrega?id=${entrega.id}`}
          className="mt-6 block w-full rounded-xl bg-green-600 py-3 text-center font-semibold text-white transition hover:bg-green-700"
        >
          Confirmar entrega
        </Link>


      </CardBody>

    </Card>
  );
}