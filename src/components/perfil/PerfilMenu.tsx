
import Link from "next/link";
import { Card, CardHeader, CardBody } from "@/src/components/ui/Card";

const opciones = [
  {
    titulo: "Mis Datos",
    descripcion: "Consulta y edita tu información personal.",
    icono: "👤",
    ruta: "/informacion",
  },
  {
    titulo: "Mi Vehículo",
    descripcion: "Consulta la información de tu vehículo.",
    icono: "🚚",
    ruta: "/vehiculo",
  },
  {
    titulo: "Ganancias",
    descripcion: "Revisa tus ingresos diarios y mensuales.",
    icono: "💰",
    ruta: "/ganancias",
  },
  {
    titulo: "Configuración",
    descripcion: "Preferencias y ajustes de la cuenta.",
    icono: "⚙️",
    ruta: "/configuracion",
  },
];

export default function PerfilMenu() {
  return (
    <div className="grid gap-6 md:grid-cols-2">

      {opciones.map((opcion) => (
        <Link
          key={opcion.titulo}
          href={opcion.ruta}
          className="transition hover:-translate-y-1"
        >

          <Card className="h-full hover:shadow-xl">

            <CardHeader
              titulo={opcion.titulo}
              icono={opcion.icono}
              accion={
                <span className="text-3xl text-gray-400">
                  →
                </span>
              }
            />

            <CardBody>

              <p className="text-gray-500">
                {opcion.descripcion}
              </p>

            </CardBody>

          </Card>

        </Link>
      ))}

    </div>
  );
}

