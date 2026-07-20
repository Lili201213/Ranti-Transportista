
"use client";

import { useState } from "react";
import { usuario } from "./perfilData";
import { Card, CardHeader, CardBody } from "@/src/components/ui/Card";

export default function PerfilHeader() {

  const [foto, setFoto] = useState(
    "https://i.pravatar.cc/150?img=12"
  );

  function cambiarFoto(e: React.ChangeEvent<HTMLInputElement>) {
    const archivo = e.target.files?.[0];

    if (archivo) {
      const imagen = URL.createObjectURL(archivo);
      setFoto(imagen);
    }
  }

  return (
    <Card className="mb-8">

      <CardHeader
        titulo="Información del perfil"
        icono="👤"
      />

      <CardBody>

        <div className="flex items-center gap-6">

          <div className="text-center">

            <img
              src={foto}
              alt="Perfil"
              className="h-24 w-24 rounded-full border-4 border-green-600 object-cover"
            />

            <label className="mt-3 inline-block cursor-pointer rounded-lg bg-green-600 px-4 py-2 text-sm font-semibold text-white hover:bg-green-700">

              📷 Cambiar foto

              <input
                type="file"
                accept="image/*"
                capture="environment"
                className="hidden"
                onChange={cambiarFoto}
              />

            </label>

          </div>


          <div>

            <h2 className="text-2xl font-bold text-gray-800">
              {usuario.nombre}
            </h2>

            <p className="mt-2 text-gray-600">
              DNI: {usuario.dni}
            </p>

            <p className="text-gray-600">
              Celular: {usuario.celular}
            </p>

            <p className="text-gray-600">
              Código: {usuario.codigo}
            </p>

            <span className="mt-3 inline-block rounded-full bg-green-100 px-4 py-1 text-sm font-semibold text-green-700">
              🟢 {usuario.estado}
            </span>

          </div>

        </div>

      </CardBody>

    </Card>
  );
}

