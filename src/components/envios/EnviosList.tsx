export default function EnviosList() {
  const envios = [
    {
      id: 1,
      producto: "Papa",
      cliente: "Cliente Coracora",
      ruta: "Coracora → Puquio",
      carga: "500 kg",
      precio: "S/ 250",
    },
    {
      id: 2,
      producto: "Ganado",
      cliente: "Cliente Pauza",
      ruta: "Coracora → Pauza",
      carga: "800 kg",
      precio: "S/ 400",
    },
  ];

  return (
    <section className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold">
        Solicitudes de Envío
      </h1>

      <div className="grid gap-5">
        {envios.map((envio) => (
          <div
            key={envio.id}
            className="rounded-xl border p-5 shadow-sm"
          >
            <h2 className="text-xl font-semibold">
              {envio.producto}
            </h2>

            <p>Cliente: {envio.cliente}</p>
            <p>Ruta: {envio.ruta}</p>
            <p>Carga: {envio.carga}</p>
            <p>Precio: {envio.precio}</p>

            <div className="mt-4 flex gap-3">
              <a
                href={`/envios/${envio.id}`}
                className="rounded-lg bg-blue-600 px-4 py-2 text-white"
              >
                Ver detalle
              </a>

              <button className="rounded-lg bg-green-600 px-4 py-2 text-white">
                Aceptar envío
              </button>

              <button className="rounded-lg border px-4 py-2">
                Rechazar
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}