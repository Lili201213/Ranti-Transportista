export default function DetalleEnvio() {
  const detalle = {
    cliente: "Cliente Coracora",
    producto: "Papa",
    carga: "500 kg",
    ruta: "Coracora → Puquio",
    precio: "S/ 250",
  };

  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">
        Detalle de Envío
      </h2>

      <div className="rounded-xl border p-5 shadow-sm">
        <p>
          <strong>Cliente:</strong> {detalle.cliente}
        </p>

        <p>
          <strong>Producto:</strong> {detalle.producto}
        </p>

        <p>
          <strong>Carga activa:</strong> {detalle.carga}
        </p>

        <p>
          <strong>Ruta:</strong> {detalle.ruta}
        </p>

        <p>
          <strong>Precio:</strong> {detalle.precio}
        </p>
      </div>
    </section>
  );
}