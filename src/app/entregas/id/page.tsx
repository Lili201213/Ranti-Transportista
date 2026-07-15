export default function DetalleEntregaPage() {
  const entrega = {
    cliente: "Cliente Coracora",
    producto: "Papa",
    carga: "500 kg",
    ruta: "Coracora → Puquio",
    estado: "En tránsito",
    ubicacion: "Km 35 - Coracora",
  };

  return (
    <section className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold">
        Detalle de Entrega
      </h1>

      <div className="rounded-xl border p-6 shadow-sm">
        <p><strong>Cliente:</strong> {entrega.cliente}</p>
        <p><strong>Producto:</strong> {entrega.producto}</p>
        <p><strong>Carga:</strong> {entrega.carga}</p>
        <p><strong>Ruta:</strong> {entrega.ruta}</p>
        <p><strong>Estado:</strong> {entrega.estado}</p>
        <p><strong>Ubicación:</strong> {entrega.ubicacion}</p>

        <div className="mt-6 flex gap-3">
          <button className="rounded-lg bg-green-600 px-4 py-2 text-white">
            Confirmar entrega
          </button>

          <button className="rounded-lg border px-4 py-2">
            Ver historial
          </button>
        </div>
      </div>
    </section>
  );
}