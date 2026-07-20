"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

import EstadisticasEnvios from "./EstadisticasEnvios";
import EnviosList from "./EnviosList";
import DetalleEnvio from "./DetalleEnvio";
import ModalPago from "./ModalPago";
import QRYape from "./QRYape";
import Pagoconfi from "./Pagoconfi";

import { Envio } from "./EnviosData";

// Cargar Leaflet solo en el navegador
const MapaEnvio = dynamic(
  () => import("./MapaEnvio"),
  {
    ssr: false,
  }
);

export default function EnviosView() {
  const [envioSeleccionado, setEnvioSeleccionado] =
    useState<Envio | null>(null);

  const [mostrarPago, setMostrarPago] =
    useState(false);

  const [pagoConfirmado, setPagoConfirmado] =
    useState(false);

  const [metodoPago, setMetodoPago] =
    useState("");

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

          <button
            onClick={() => setMostrarPago(true)}
            className="rounded-xl bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-700 transition"
          >
            💰 Registrar pago recibido
          </button>

          <ModalPago
            mostrar={mostrarPago}
            cerrar={() => setMostrarPago(false)}
            monto={envioSeleccionado.precio}
            confirmar={(metodo) => {
              setMetodoPago(metodo);
              setPagoConfirmado(true);
            }}
          />

          {pagoConfirmado && metodoPago === "Yape" && (
            <QRYape
              monto={envioSeleccionado.precio}
            />
          )}

          {pagoConfirmado && metodoPago !== "Yape" && (
            <Pagoconfi
              monto={envioSeleccionado.precio}
              metodo={metodoPago}
            />
          )}

        </div>

      )}

    </div>
  );
}