"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

import EstadisticasEnvios from "./EstadisticasEnvios";
import EnviosList from "./EnviosList";
import DetalleEnvio from "./DetalleEnvio";

import { Envio } from "./EnviosData";


// Cargar Leaflet solo en el navegador
const MapaEnvio = dynamic(
  () => import("./MapaEnvio"),
  {
    ssr: false
  }
);


export default function EnviosView() {


  const [envioSeleccionado, setEnvioSeleccionado] =
    useState<Envio | null>(null);



  return (

    <div className="min-h-screen bg-background text-foreground p-6">


      <div className="mb-6">


        <h1 className="text-3xl font-bold">
          🚚 Gestión de Envíos
        </h1>


        <p className="text-muted mt-2">
          Administra tus envíos asignados, rutas y entregas.
        </p>


      </div>





      <EstadisticasEnvios />





      <div className="mt-6">


        <EnviosList
          seleccionarEnvio={setEnvioSeleccionado}
        />


      </div>







      {envioSeleccionado && (


        <div className="mt-8 space-y-6">



          <DetalleEnvio
            envio={envioSeleccionado}
          />



          <MapaEnvio />



        </div>


      )}




    </div>

  );

}