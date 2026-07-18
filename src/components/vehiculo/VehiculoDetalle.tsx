import { vehiculo } from "./vehiculoData";
import Link from "next/link";

export default function VehiculoDetalle() {
  return (
    <div className="rounded-2xl bg-white p-8 shadow-md">

      <div className="grid gap-6 md:grid-cols-2">

        <div>
          <p className="text-gray-500">Tipo de vehículo</p>
          <h3 className="text-xl font-semibold">{vehiculo.tipo}</h3>
        </div>

        <div>
          <p className="text-gray-500">Placa</p>
          <h3 className="text-xl font-semibold">{vehiculo.placa}</h3>
        </div>

        <div>
          <p className="text-gray-500">Capacidad</p>
          <h3 className="text-xl font-semibold">{vehiculo.capacidad}</h3>
        </div>

        <div>
          <p className="text-gray-500">Marca</p>
          <h3 className="text-xl font-semibold">{vehiculo.marca}</h3>
        </div>

        <div>
          <p className="text-gray-500">Modelo</p>
          <h3 className="text-xl font-semibold">{vehiculo.modelo}</h3>
        </div>

        <div>
          <p className="text-gray-500">Año</p>
          <h3 className="text-xl font-semibold">{vehiculo.anio}</h3>
        </div>

      </div>

      <div className="mt-8">
        <Link
          href="/cambiar-vehiculo"
          className="inline-block rounded-xl bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
        >
          Cambiar Vehículo
        </Link>
      </div>

    </div>
  );
}