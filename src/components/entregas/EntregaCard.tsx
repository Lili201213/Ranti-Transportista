"use client";
import { useRouter } from "next/navigation";

export default function EntregaCard({
  entrega,
  marcarEntregado,
}: any) {
  const router = useRouter();

  return (
    <div className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition">

      <div className="flex justify-between items-center">
        <h3 className="text-lg font-bold">
          {entrega.cliente}
        </h3>

        <span
          className={`text-sm px-3 py-1 rounded-full ${
            entrega.estado === "Pendiente"
              ? "bg-yellow-100 text-yellow-700"
              : "bg-green-100 text-green-700"
          }`}
        >
          {entrega.estado}
        </span>
      </div>

      <p className="text-gray-500 mt-2">
        {entrega.direccion}
      </p>

      <p className="mt-2 font-semibold text-green-600">
        S/ {entrega.monto}
      </p>

      {/* BOTONES */}
      <div className="flex gap-2 mt-4">

        <button
          onClick={() => router.push(`/entregas/${entrega.id}`)}
          className="flex-1 bg-gray-200 py-2 rounded-lg"
        >
          Ver
        </button>

        {entrega.estado === "Pendiente" && (
          <button
            onClick={() => marcarEntregado(entrega.id)}
            className="flex-1 bg-green-600 text-white py-2 rounded-lg"
          >
            Entregado
          </button>
        )}

      </div>

    </div>
  );
}