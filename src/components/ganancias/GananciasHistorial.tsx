import { historial } from "./gananciasData";

export default function GananciasHistorial() {
  return (
    <div className="mt-10 bg-white p-6 rounded-xl shadow">

      <h2 className="text-xl font-semibold mb-4">
        Historial
      </h2>

      <ul className="space-y-4">
        {historial.map((item) => (
          <li
            key={item.id}
            className="flex justify-between border-b pb-2"
          >
            <span>{item.fecha}</span>
            <span className="font-semibold text-green-600">
              S/ {item.monto}
            </span>
          </li>
        ))}
      </ul>

    </div>
  );
}