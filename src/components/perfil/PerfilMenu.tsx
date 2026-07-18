import Link from "next/link";

export default function PerfilMenu() {
  return (
    <div className="grid gap-6 md:grid-cols-2">

      <Link
        href="/informacion"
        className="rounded-2xl bg-white p-8 shadow transition hover:-translate-y-1 hover:shadow-xl"
      >
        <div className="flex items-center justify-between">

          <div>
            <div className="text-5xl">👤</div>

            <h2 className="mt-4 text-2xl font-bold text-gray-800">
              Mis Datos
            </h2>

            <p className="mt-2 text-gray-500">
              Consulta y edita tu información personal.
            </p>
          </div>

          <span className="text-3xl text-gray-400">→</span>

        </div>
      </Link>

      <Link
        href="/vehiculo"
        className="rounded-2xl bg-white p-8 shadow transition hover:-translate-y-1 hover:shadow-xl"
      >
        <div className="flex items-center justify-between">

          <div>
            <div className="text-5xl">🚚</div>

            <h2 className="mt-4 text-2xl font-bold text-gray-800">
              Mi Vehículo
            </h2>

            <p className="mt-2 text-gray-500">
              Consulta la información de tu vehículo.
            </p>
          </div>

          <span className="text-3xl text-gray-400">→</span>

        </div>
      </Link>

      <Link
        href="/ganancias"
        className="rounded-2xl bg-white p-8 shadow transition hover:-translate-y-1 hover:shadow-xl"
      >
        <div className="flex items-center justify-between">

          <div>
            <div className="text-5xl">💰</div>

            <h2 className="mt-4 text-2xl font-bold text-gray-800">
              Ganancias
            </h2>

            <p className="mt-2 text-gray-500">
              Revisa tus ingresos diarios y mensuales.
            </p>
          </div>

          <span className="text-3xl text-gray-400">→</span>

        </div>
      </Link>

      <Link
        href="/configuracion"
        className="rounded-2xl bg-white p-8 shadow transition hover:-translate-y-1 hover:shadow-xl"
      >
        <div className="flex items-center justify-between">

          <div>
            <div className="text-5xl">⚙️</div>

            <h2 className="mt-4 text-2xl font-bold text-gray-800">
              Configuración
            </h2>

            <p className="mt-2 text-gray-500">
              Preferencias y ajustes de la cuenta.
            </p>
          </div>

          <span className="text-3xl text-gray-400">→</span>

        </div>
      </Link>

    </div>
  );
}