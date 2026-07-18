"use client";

import { useState } from "react";
import { Envio } from "./EnviosData";
import { Card, CardBody, CardHeader } from "@/src/components/ui/Card";


interface Props {
  envio: Envio;
}



export default function DetalleEnvio({ envio }: Props) {


  const [estado, setEstado] = useState(envio.estado);



  const colorEstado = (estado: string) => {

    switch (estado) {

      case "pendiente":
        return "bg-yellow-500/20 text-yellow-400";

      case "aceptado":
        return "bg-blue-500/20 text-blue-400";

      case "en_camino":
        return "bg-indigo-500/20 text-indigo-400";

      case "entregado":
        return "bg-green-500/20 text-green-400";

      default:
        return "bg-gray-500/20 text-gray-400";

    }

  };




  return (

    <Card>


      <CardHeader
        titulo="Detalle del Envío"
        icono="📦"
      />



      <CardBody>



        <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6">


          <p className="text-muted">
            Información completa del pedido
          </p>




          <span
            className={`px-4 py-2 rounded-full text-sm font-semibold h-fit ${colorEstado(estado)}`}
          >
            {estado.replace("_", " ")}
          </span>



        </div>






        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">



          <p>
            📦 <b>Código:</b> {envio.id}
          </p>


          <p>
            👤 <b>Cliente:</b> {envio.cliente}
          </p>


          <p>
            📞 <b>Teléfono:</b> {envio.telefono}
          </p>


          <p>
            📍 <b>Origen:</b> {envio.origen}
          </p>


          <p>
            🏠 <b>Dirección:</b> {envio.direccion}
          </p>


          <p>
            🎯 <b>Destino:</b> {envio.destino}
          </p>


          <p>
            📅 <b>Fecha:</b> {envio.fecha}
          </p>


          <p>
            ⏰ <b>Hora:</b> {envio.hora}
          </p>


          <p>
            ⚖️ <b>Peso:</b> {envio.peso}
          </p>


          <p>
            💰 <b>Total:</b> {envio.precio}
          </p>



        </div>








        <div className="flex flex-wrap gap-3 mt-8">



          <button

            onClick={() => setEstado("aceptado")}

            className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-xl"

          >

            ✅ Aceptar

          </button>






          <button

            onClick={() => setEstado("en_camino")}

            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl"

          >

            🚚 Iniciar ruta

          </button>







          <button

            onClick={() => setEstado("entregado")}

            className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-xl"

          >

            📦 Entregado

          </button>



        </div>



      </CardBody>



    </Card>


  );

}