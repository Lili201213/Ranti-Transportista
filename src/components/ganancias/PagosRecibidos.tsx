const pagos = [
  {
    cliente: "Juan Pérez",
    entrega: "Coracora → Puquio",
    monto: 250,
  },
  {
    cliente: "María López",
    entrega: "Coracora → Nazca",
    monto: 180,
  },
];

export default function PagosRecibidos() {
  return (
    <div className="bg-white p-6 rounded-xl shadow mt-6">

      <h2 className="text-xl font-semibold mb-4">
        📥 Pagos recibidos
      </h2>

      <div className="space-y-4">
        {pagos.map((pago, index) => (
          <div
            key={index}
            className="flex justify-between border-b pb-3"
          >
            <div>
              <p className="font-semibold">
                🚚 {pago.cliente}
              </p>
              <p className="text-gray-500">
                {pago.entrega}
              </p>
            </div>

            <p className="font-bold text-green-600">
              S/ {pago.monto}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
}