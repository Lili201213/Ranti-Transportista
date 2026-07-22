"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEntregas } from "@/src/context/EntregasContext";
import { useGanancias } from "@/src/context/GananciasContext";

export default function ConfirmarEntrega() {

  const router = useRouter();
  const searchParams = useSearchParams();

  const { marcarEntregado, obtenerEntrega } = useEntregas();
  const { agregarGanancia } = useGanancias();

  const idEntrega = Number(searchParams.get("id"));

  const entrega = obtenerEntrega(idEntrega);


  const [foto, setFoto] = useState<string | null>(null);



  function seleccionarFoto(
    e: React.ChangeEvent<HTMLInputElement>
  ) {

    const archivo = e.target.files?.[0];

    if (archivo) {
      setFoto(URL.createObjectURL(archivo));
    }

  }



  function confirmarEntrega() {

    if (entrega) {

      marcarEntregado(idEntrega);

      agregarGanancia(entrega.monto);

    }


    alert("✅ Entrega realizada correctamente");

    router.push("/entregas");

  }



  return (
    <section className="min-h-screen bg-gray-100 p-6">

      <div className="mx-auto max-w-3xl space-y-6">


        <h1 className="text-3xl font-bold text-gray-800">
          📦 Confirmar Entrega
        </h1>



        {/* Resumen */}
        <div className="rounded-2xl bg-white p-6 shadow">

          <h2 className="mb-4 text-xl font-semibold">
            Resumen de Entrega
          </h2>


          <div className="space-y-3">

            <p>
              <b>👤 Cliente:</b> {entrega?.cliente}
            </p>

            <p>
              <b>📦 Producto:</b> {entrega?.producto}
            </p>

            <p>
              <b>📍 Dirección:</b> {entrega?.direccion}
            </p>

            <p>
              <b>💰 Monto:</b> S/ {entrega?.monto}
            </p>

          </div>

        </div>




        {/* Evidencia */}
        <div className="rounded-2xl bg-white p-6 shadow">

          <h2 className="mb-4 text-xl font-semibold">
            Evidencia de Entrega
          </h2>


          <label className="flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-green-500 p-6 transition hover:bg-green-50">


            {foto ? (

              <img
                src={foto}
                alt="Evidencia"
                className="mb-4 h-56 w-full rounded-xl object-cover"
              />

            ) : (

              <>
                <span className="text-6xl">
                  📷
                </span>

                <p className="mt-3 font-semibold">
                  Tomar fotografía
                </p>

                <p className="text-sm text-gray-500">
                  Requerido para finalizar
                </p>
              </>

            )}


            <input
              type="file"
              accept="image/*"
              capture="environment"
              className="hidden"
              onChange={seleccionarFoto}
            />


          </label>

        </div>




        {/* Firma */}
        <div className="rounded-2xl bg-white p-6 shadow">

          <h2 className="mb-4 text-xl font-semibold">
            Firma del Cliente
          </h2>


          <div className="flex h-40 items-center justify-center rounded-xl border bg-gray-100 text-gray-400">
            Firma aquí
          </div>


          <button className="mt-3 font-semibold text-green-600">
            Limpiar
          </button>


        </div>




        {/* Estado */}
        <div className="rounded-xl bg-green-100 p-4">
          ✅ Listo para completar
        </div>




        {/* Botón */}
        <button
          onClick={confirmarEntrega}
          className="w-full rounded-xl bg-green-600 py-4 text-lg font-bold text-white transition hover:bg-green-700"
        >
          Marcar como Entregado
        </button>


      </div>

    </section>
  );
}