"use client";
import { createContext, useContext, useState } from "react";

type GananciasContextType = {
  total: number;
  agregarGanancia: (monto: number) => void;
};

const GananciasContext = createContext<GananciasContextType | null>(null);

export function GananciasProvider({ children }: any) {
  const [total, setTotal] = useState(0);

  const agregarGanancia = (monto: number) => {
    setTotal((prev) => prev + monto);
  };

  return (
    <GananciasContext.Provider value={{ total, agregarGanancia }}>
      {children}
    </GananciasContext.Provider>
  );
}

export function useGanancias() {
  const context = useContext(GananciasContext);
  if (!context) throw new Error("Error en contexto");
  return context;
}