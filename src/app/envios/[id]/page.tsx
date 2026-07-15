export default function DetalleEnvioPage() {
  const envio = {
    cliente: "Cliente Coracora",
    producto: "Papa",
    carga: "500 kg",
    ruta: "Coracora → Puquio",
    precio: "S/ 250",
    estadoPago: "Pendiente",
  };

  const metodosPago = [
    "Yape",
    "Plin",
    "BCP / Transferencia",
    "Efectivo",
  ];

  return (
    <section className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold">
        Detalle de Envío
      </h1>

      <div className="rounded-xl border p-6 shadow-sm">
        <h2 className="mb-4 text-xl font-semibold">
          Información del envío
        </h2>

        <div className="flex flex-col gap-2">
          <p>
            <strong>Cliente:</strong> {envio.cliente}
          </p>

          <p>
            <strong>Producto:</strong> {envio.producto}
          </p>

          <p>
            <strong>Carga activa:</strong> {envio.carga}
          </p>

          <p>
            <strong>Ruta:</strong> {envio.ruta}
          </p>

          <p>
            <strong>Precio del servicio:</strong> {envio.precio}
          </p>
        </div>
      </div>

      <div className="rounded-xl border p-6 shadow-sm">
        <h2 className="mb-4 text-xl font-semibold">
          Método de Pago
        </h2>

        <div className="grid gap-3">
          {metodosPago.map((metodo) => (
            <div
              key={metodo}
              className="rounded-lg border p-3"
            >
              {metodo}
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-xl border p-6 shadow-sm">
        <h2 className="mb-4 text-xl font-semibold">
          Estado del Pago
        </h2>

        <p className="rounded-lg border p-3">
          {envio.estadoPago}
        </p>
      </div>

      <div className="flex gap-3">
        <button className="rounded-lg bg-green-600 px-5 py-2 text-white">
          Aceptar envío
        </button>

        <button className="rounded-lg border px-5 py-2">
          Rechazar
        </button>
      </div>
    </section>
  );
}