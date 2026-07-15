import Link from "next/link";

export default function EnTransito() {
  const entrega = {
    ruta: "Coracora → Puquio",
    ubicacion: "Km 45 - Coracora",
    estadoViaje: "En tránsito",
    estadoCarga: "Carga segura",
    tiempo: "35 min",
  };

  return (
    <section className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold">En Tránsito</h1>

      <div className="rounded-xl border p-6 shadow-sm">
        <p><strong>Ruta activa:</strong> {entrega.ruta}</p>
        <p><strong>Ubicación actual:</strong> {entrega.ubicacion}</p>
        <p><strong>Estado del viaje:</strong> {entrega.estadoViaje}</p>
        <p><strong>Estado de la carga:</strong> {entrega.estadoCarga}</p>
        <p><strong>Tiempo estimado:</strong> {entrega.tiempo}</p>

        <Link
          href="/entregas/detalle"
          className="mt-6 inline-block rounded-lg bg-blue-600 px-4 py-2 text-white"
        >
          Ver detalle
        </Link>
      </div>
    </section>
  );
}