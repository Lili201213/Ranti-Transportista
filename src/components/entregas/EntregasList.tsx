"use client";
import { useState } from "react";
import { entregasIniciales } from "./entregasData";
import EntregaCard from "./EntregaCard";
import { useGanancias } from "@/src/context/GananciasContext";

export default function EntregasList() {
  const [entregas, setEntregas] = useState(entregasIniciales);
  const [filtro, setFiltro] = useState("Todos");

  const { agregarGanancia } = useGanancias(); // ✅ USAR CONTEXTO

  // cambiar estado + sumar dinero
  const marcarEntregado = (id: number) => {
    const nuevas = entregas.map((e) => {
      if (e.id === id && e.estado !== "Entregado") {
        agregarGanancia(e.monto); // 💰 SUMA GANANCIA
        return { ...e, estado: "Entregado" };
      }
      return e;
    });

    setEntregas(nuevas);
  };

  // filtrar
  const entregasFiltradas =
    filtro === "Todos"
      ? entregas
      : entregas.filter((e) => e.estado === filtro);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Mis Entregas</h1>

      {/* FILTROS */}
      <div className="flex gap-3 mb-6">
        {["Todos", "Pendiente", "Entregado"].map((f) => (
          <button
            key={f}
            onClick={() => setFiltro(f)}
            className={`px-4 py-2 rounded-lg ${
              filtro === f
                ? "bg-blue-600 text-white"
                : "bg-gray-200"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* LISTA */}
      <div className="grid md:grid-cols-2 gap-4">
        {entregasFiltradas.map((entrega) => (
          <EntregaCard
            key={entrega.id}
            entrega={entrega}
            marcarEntregado={marcarEntregado}
          />
        ))}
      </div>
    </div>
  );
}