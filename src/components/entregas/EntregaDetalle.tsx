"use client";

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

        <div className="grid md:grid-cols-2 gap-4 text-gray-700">

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
            <span className="text-green-600 font-bold">
              S/ {entrega.monto}
            </span>
          </p>

        </div>


        {/* MAPA */}
        <div className="mt-6">
          <MapaEntrega />
        </div>


        <button
          className="mt-6 w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700"
        >
          Confirmar entrega
        </button>

      </CardBody>

    </Card>
  );
}