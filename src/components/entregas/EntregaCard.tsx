"use client";

export default function EntregaCard({
  entrega,
  marcarEntregado,
  verDetalle,
}: any) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-5 border border-gray-200">

      <div className="flex justify-between items-center">
        <h3 className="text-lg font-bold">
          🚚 Entrega #{entrega.id}
        </h3>

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
      </div>

      <div className="mt-4 space-y-2">
        <p><strong>👤 Cliente:</strong> {entrega.cliente}</p>
        <p><strong>📦 Producto:</strong> {entrega.producto}</p>
        <p><strong>⚖️ Carga:</strong> {entrega.carga}</p>
        <p><strong>📍 Ruta:</strong> {entrega.origen} → {entrega.destino}</p>
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

    </div>
  );
}