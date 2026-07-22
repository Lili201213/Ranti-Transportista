"use client";

import { createContext, useContext, useState } from "react";
import { entregasIniciales } from "@/src/components/entregas/entregasData";


const EntregasContext = createContext<any>(null);


export function EntregasProvider({
  children,
}: {
  children: React.ReactNode;
}) {


  const [entregas, setEntregas] = useState(entregasIniciales);



  const marcarEntregado = (id: number) => {

    setEntregas((prev) =>
      prev.map((entrega) => {

        if (
          entrega.id === id &&
          entrega.estado !== "Entregado"
        ) {

          return {
            ...entrega,
            estado: "Entregado",
            ubicacion: "Entrega completada",
          };

        }

        return entrega;

      })
    );

  };



  const obtenerEntrega = (id: number) => {

    return entregas.find(
      (entrega) => entrega.id === id
    );

  };



  return (
    <EntregasContext.Provider
      value={{
        entregas,
        marcarEntregado,
        obtenerEntrega,
      }}
    >
      {children}
    </EntregasContext.Provider>
  );

}



export function useEntregas() {

  return useContext(EntregasContext);

}