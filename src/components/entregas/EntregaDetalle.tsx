"use client";

import MapaEntrega from "./mapa/MapaEntrega";

export default function EntregaDetalle({
  entrega,
}: any) {
  return (
    <div className="mt-8 bg-white rounded-2xl shadow-md p-6 border">

      <h2 className="text-2xl font-bold mb-6">
        📋 Detalle de Entrega
      </h2>

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
          🚦 <strong>Estado:</strong> {entrega.estado}
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
      <MapaEntrega />

      <button
        className="mt-6 w-full bg-green-600 text-white py-3 rounded-xl font-semibold"
      >
        Confirmar entrega
      </button>

    </div>
  );
}