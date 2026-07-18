import Link from "next/link";

export default function CambiarVehiculo() {
  return (
    <section className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-3xl">

        <Link
          href="/vehiculo"
          className="font-semibold text-green-700 hover:underline"
        >
          ← Volver
        </Link>

        <h1 className="mt-4 text-4xl font-bold text-gray-800">
          Cambiar Vehículo
        </h1>

        <div className="mt-8 rounded-2xl bg-white p-8 shadow-md">

          <div className="grid gap-6">

            <div>
              <label className="mb-2 block font-semibold">
                Tipo de vehículo
              </label>

              <select className="w-full rounded-lg border p-3">
                <option>Camión</option>
                <option>Camioneta</option>
                <option>Furgón</option>
                <option>Pickup</option>
                <option>MotoTaxi</option>
                <option>Motocarga</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block font-semibold">
                Placa
              </label>

              <input
                type="text"
                defaultValue="ABC-123"
                className="w-full rounded-lg border p-3"
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold">
                Capacidad
              </label>

              <input
                type="text"
                defaultValue="5000 kg"
                className="w-full rounded-lg border p-3"
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold">
                Marca
              </label>

              <input
                type="text"
                defaultValue="Volvo"
                className="w-full rounded-lg border p-3"
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold">
                Modelo
              </label>

              <input
                type="text"
                defaultValue="FH"
                className="w-full rounded-lg border p-3"
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold">
                Año
              </label>

              <input
                type="number"
                defaultValue="2022"
                className="w-full rounded-lg border p-3"
              />
            </div>

            <div className="flex gap-4">

              <button className="flex-1 rounded-xl bg-green-600 py-4 font-semibold text-white transition hover:bg-green-700">
                Guardar Cambios
              </button>

              <Link
                href="/vehiculo"
                className="flex-1 rounded-xl border border-gray-300 py-4 text-center font-semibold transition hover:bg-gray-100"
              >
                Cancelar
              </Link>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}