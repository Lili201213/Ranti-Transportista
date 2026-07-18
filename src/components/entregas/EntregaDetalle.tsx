"use client";

import { useRouter } from "next/navigation";
import { entregasIniciales } from "./entregasData";

export default function EntregaDetalle({ id }: { id: string }) {
  const router = useRouter();

  const entrega = entregasIniciales.find(
    (e) => e.id === Number(id)
  );

  if (!entrega) return <p>Entrega no encontrada</p>;

  return (
    <div className="p-6">

      {/* BOTÓN VOLVER */}
      <button
        onClick={() => router.back()}
        className="mb-4 bg-gray-200 px-4 py-2 rounded-lg"
      >
        ← Volver
      </button>

      <h2 className="text-2xl font-bold mb-4">
        Detalle de Entrega
      </h2>

      <p><strong>Cliente:</strong> {entrega.cliente}</p>
      <p><strong>Dirección:</strong> {entrega.direccion}</p>
      <p><strong>Estado:</strong> {entrega.estado}</p>
      <p><strong>Monto:</strong> S/ {entrega.monto}</p>

    </div>
  );
}