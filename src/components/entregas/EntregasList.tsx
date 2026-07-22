"use client";

import { useState } from "react";
import EntregaCard from "./EntregaCard";
import EntregaDetalle from "./EntregaDetalle";
import { useEntregas } from "@/src/context/EntregasContext";

export default function EntregasList() {

  const { entregas, marcarEntregado } = useEntregas();

  const [filtro, setFiltro] = useState("Todos");
  const [entregaSeleccionada, setEntregaSeleccionada] = useState<any>(null);


  const entregasFiltradas =
    filtro === "Todos"
      ? entregas
      : entregas.filter((e: any) => e.estado === filtro);


  return (
    <div className="p-6">

      <h1 className="text-3xl font-bold mb-4">
        Mis Entregas
      </h1>


      {/* FILTROS */}
      <div className="flex gap-3 mb-6">

        {["Todos", "Pendiente", "Entregado"].map((f) => (

          <button
            key={f}
            onClick={() => setFiltro(f)}
            className={`px-4 py-2 rounded-lg ${
              filtro === f
                ? "bg-green-600 text-white"
                : "bg-gray-200"
            }`}
          >
            {f}
          </button>

        ))}

      </div>


      {/* LISTA */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">

        {entregasFiltradas.map((entrega: any) => (

          <EntregaCard
            key={entrega.id}
            entrega={entrega}
            marcarEntregado={marcarEntregado}
            verDetalle={() => setEntregaSeleccionada(entrega)}
          />

        ))}

      </div>


      {/* DETALLE */}
      {entregaSeleccionada && (

        <div className="mt-8">

          <EntregaDetalle entrega={entregaSeleccionada} />

        </div>

      )}


    </div>
  );
}