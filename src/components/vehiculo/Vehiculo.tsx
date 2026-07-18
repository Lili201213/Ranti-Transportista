import Link from "next/link";
import VehiculoHeader from "./VehiculoHeader";
import VehiculoDetalle from "./VehiculoDetalle";

export default function Vehiculo() {
  return (
    <section className="min-h-screen bg-gray-100 p-8">

      <div className="mx-auto max-w-5xl">

        <Link
          href="/perfil"
          className="font-semibold text-green-700 hover:underline"
        >
          ← Volver al perfil
        </Link>

        <h1 className="mt-4 mb-8 text-4xl font-bold text-gray-800">
          Mi Vehículo
        </h1>

        <VehiculoHeader />

        <VehiculoDetalle />

      </div>

    </section>
  );
}