export default function MetodoPago() {
  const metodos = [
    "Yape",
    "Plin",
    "BCP / Transferencia",
    "Efectivo",
  ];

  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">
        Método de Pago
      </h2>

      <div className="grid gap-3">
        {metodos.map((metodo) => (
          <div
            key={metodo}
            className="rounded-xl border p-4"
          >
            {metodo}
          </div>
        ))}
      </div>
    </section>
  );
}