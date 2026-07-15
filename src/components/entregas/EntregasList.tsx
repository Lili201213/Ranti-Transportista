export default function EntregasList() {
  const entregas = [
    {
      id: 1,
      producto: "Papa",
      cliente: "Cliente Coracora",
      ruta: "Coracora → Puquio",
      estado: "En tránsito",
    },
    {
      id: 2,
      producto: "Ganado",
      cliente: "Cliente Pauza",
      ruta: "Coracora → Pauza",
      estado: "Entregado",
    },
  ];

  return (
    <section className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold">
        Entregas
      </h1>

      <div className="grid gap-5">
        {entregas.map((entrega) => (
          <div
            key={entrega.id}
            className="rounded-xl border p-5 shadow-sm"
          >
            <h2 className="text-xl font-semibold">
              {entrega.producto}
            </h2>

            <p>Cliente: {entrega.cliente}</p>
            <p>Ruta: {entrega.ruta}</p>
            <p>Estado: {entrega.estado}</p>

            <div className="mt-4">
              <a
                href={`/entregas/${entrega.id}`}
                className="rounded-lg bg-blue-600 px-4 py-2 text-white"
              >
                Ver detalle
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}