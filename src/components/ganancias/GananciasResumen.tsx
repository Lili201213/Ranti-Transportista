"use client";
import { useGanancias } from "@/src/context/GananciasContext";

export default function GananciasResumen() {
  const { total } = useGanancias();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Ganancias</h1>

      <div className="mt-4 bg-green-100 p-6 rounded-xl">
        <p className="text-lg">Total ganado</p>
        <h2 className="text-3xl font-bold text-green-700">
          S/ {total}
        </h2>
      </div>
    </div>
  );
}