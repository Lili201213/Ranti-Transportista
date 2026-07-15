export default function Perfil() {
  const usuario = {
    nombre: "Juan Pérez",
    dni: "12345678",
    telefono: "987654321",
    vehiculo: "Camión",
    placa: "ABC-123",
    capacidad: "5000 kg",
    gananciaDia: "S/ 350",
    gananciaMes: "S/ 4,500",
  };

  return (
    <section className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold">
        Perfil
      </h1>

      <div className="rounded-xl border p-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-3">
          Datos Personales
        </h2>

        <p><strong>Nombre:</strong> {usuario.nombre}</p>
        <p><strong>DNI:</strong> {usuario.dni}</p>
        <p><strong>Teléfono:</strong> {usuario.telefono}</p>
      </div>

      <div className="rounded-xl border p-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-3">
          Vehículo
        </h2>

        <p><strong>Tipo:</strong> {usuario.vehiculo}</p>
        <p><strong>Placa:</strong> {usuario.placa}</p>
        <p><strong>Capacidad:</strong> {usuario.capacidad}</p>
      </div>

      <div className="rounded-xl border p-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-3">
          Ganancias
        </h2>

        <p><strong>Hoy:</strong> {usuario.gananciaDia}</p>
        <p><strong>Este mes:</strong> {usuario.gananciaMes}</p>
      </div>

      <div className="flex gap-3">
        <button className="rounded-lg bg-green-600 px-4 py-2 text-white">
          Editar perfil
        </button>

        <button className="rounded-lg border px-4 py-2">
          Cerrar sesión
        </button>
      </div>
    </section>
  );
}