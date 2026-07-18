import { ganancias } from "./gananciasData";

export default function GananciasCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">

      <div className="bg-white p-6 rounded-xl shadow">
        <p className="text-gray-500">Hoy</p>
        <h2 className="text-2xl font-bold text-green-600">
          S/ {ganancias.hoy}
        </h2>
      </div>

      <div className="bg-white p-6 rounded-xl shadow">
        <p className="text-gray-500">Semana</p>
        <h2 className="text-2xl font-bold text-green-600">
          S/ {ganancias.semana}
        </h2>
      </div>

      <div className="bg-white p-6 rounded-xl shadow">
        <p className="text-gray-500">Mes</p>
        <h2 className="text-2xl font-bold text-green-600">
          S/ {ganancias.mes}
        </h2>
      </div>

    </div>
  );
}