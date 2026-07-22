import { entregasIniciales } from "@/src/components/entregas/entregasData";

export default function GananciasHistorial() {
  const pagos = entregasIniciales.filter(
    (entrega) => entrega.estado === "Entregado"
  );

  return (
    <div className="mt-10 bg-white p-6 rounded-xl shadow">

      <h2 className="text-xl font-semibold mb-4">
        📄 Historial de pagos
      </h2>

      {pagos.length === 0 ? (
        <p className="text-gray-500">
          No hay pagos registrados.
        </p>
      ) : (
        <ul className="space-y-4">

          {pagos.map((pago) => (
            <li
              key={pago.id}
              className="border-b pb-3"
            >

              <div className="flex justify-between">

                <div>
                  <p className="font-semibold">
                    🚚 {pago.cliente}
                  </p>

                  <p className="text-sm text-gray-500">
                    {pago.origen} → {pago.destino}
                  </p>

                  <p className="text-sm text-gray-500">
                    Fecha: 21/07/2026
                  </p>
                </div>

                <p className="font-bold text-green-600">
                  S/ {pago.monto}
                </p>

              </div>

            </li>
          ))}

        </ul>
      )}

    </div>
  );
}