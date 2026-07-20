"use client";

import { Card, CardHeader, CardBody } from "@/src/components/ui/Card";

export default function EntregaCard({
  entrega,
  marcarEntregado,
  verDetalle,
}: any) {
  return (
    <Card className="overflow-hidden">

      <CardHeader
        titulo={`Entrega #${entrega.id}`}
        icono="🚚"
        accion={
          <span
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              entrega.estado === "Pendiente"
                ? "bg-yellow-100 text-yellow-700"
                : entrega.estado === "Entregado"
                ? "bg-green-100 text-green-700"
                : "bg-blue-100 text-blue-700"
            }`}
          >
            {entrega.estado}
          </span>
        }
      />

      <CardBody>

        <div className="space-y-2 text-gray-700">

          <p>
            <strong>👤 Cliente:</strong> {entrega.cliente}
          </p>

          <p>
            <strong>📦 Producto:</strong> {entrega.producto}
          </p>

          <p>
            <strong>⚖️ Carga:</strong> {entrega.carga}
          </p>

          <p>
            <strong>📍 Ruta:</strong> {entrega.origen} → {entrega.destino}
          </p>

          <p className="text-green-600 font-bold">
            💰 S/ {entrega.monto}
          </p>

        </div>


        <div className="flex gap-3 mt-5">

          <button
            onClick={verDetalle}
            className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
          >
            Ver detalle
          </button>


          {entrega.estado === "Pendiente" && (
            <button
              onClick={() => marcarEntregado(entrega.id)}
              className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
            >
              Entregado
            </button>
          )}

        </div>

      </CardBody>

    </Card>
  );
}