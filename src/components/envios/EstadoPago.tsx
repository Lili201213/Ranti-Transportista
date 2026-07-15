export default function EstadoPago() {
  const estados = [
    {
      nombre: "Pendiente",
      descripcion: "El pago todavía no fue confirmado.",
    },
    {
      nombre: "Pagado",
      descripcion: "El pago fue recibido correctamente.",
    },
  ];

  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">
        Estado del Pago
      </h2>

      <div className="grid gap-3">
        {estados.map((estado) => (
          <div
            key={estado.nombre}
            className="rounded-xl border p-4"
          >
            <h3 className="font-semibold">
              {estado.nombre}
            </h3>

            <p className="text-sm text-foreground/70">
              {estado.descripcion}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}