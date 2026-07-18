export default function VehiculoHeader() {
  return (
    <div className="mb-8 rounded-2xl bg-green-600 p-8 text-white shadow-md">
      <div className="flex items-center gap-5">

        <div className="text-6xl">
          🚚
        </div>

        <div>

          <h2 className="text-3xl font-bold">
            Mi Vehículo
          </h2>

          <p className="mt-2 text-green-100">
            Información registrada del vehículo.
          </p>

        </div>

      </div>
    </div>
  );
}