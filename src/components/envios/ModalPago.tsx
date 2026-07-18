"use client";

import { useState } from "react";


interface Props {
  mostrar: boolean;
  cerrar: () => void;
  monto: string;
  confirmar: (metodo: string) => void;
}


export default function ModalPago({
  mostrar,
  cerrar,
  monto,
  confirmar
}: Props) {


  const [metodo, setMetodo] = useState("Efectivo");


  const [recibido, setRecibido] = useState("");



  if (!mostrar) return null;



  const total = Number(
    monto.replace("S/", "").replace(",", ".")
  );


  const vuelto =
    Number(recibido) - total;



  const confirmarPago = () => {

    confirmar(metodo);

    cerrar();

  };



  return (

    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">


      <div className="bg-white text-gray-900 rounded-xl p-6 w-96 shadow-xl">


        <h2 className="text-2xl font-bold mb-4">
          💰 Confirmar pago recibido
        </h2>



        <p className="mb-3">
          Monto del envío:
          <b> {monto}</b>
        </p>



        <label className="font-semibold">
          Método recibido:
        </label>



        <select

          value={metodo}

          onChange={(e) => setMetodo(e.target.value)}

          className="w-full border rounded-lg p-2 mt-2 mb-4"

        >

          <option value="Efectivo">
            💵 Efectivo
          </option>


          <option value="Yape">
            📱 Yape
          </option>


          <option value="Tarjeta">
            💳 Tarjeta
          </option>


        </select>





        {metodo === "Efectivo" && (

          <div className="mb-4">


            <label className="font-medium">
              Dinero recibido:
            </label>


            <input

              type="number"

              value={recibido}

              onChange={(e) => setRecibido(e.target.value)}

              placeholder="Ejemplo: 100"

              className="w-full border rounded-lg p-2 mt-2"

            />



            {recibido && (

              <p className="mt-3 font-bold">

                Vuelto:
                {" "}
                S/ {vuelto >= 0
                  ? vuelto.toFixed(2)
                  : "Falta dinero"}

              </p>

            )}



          </div>

        )}






        {metodo === "Yape" && (

          <div className="bg-purple-100 p-3 rounded-lg mb-4">

            📱 Pago recibido por Yape

            <br />

            Verificar comprobante o QR.

          </div>

        )}






        {metodo === "Tarjeta" && (

          <div className="bg-blue-100 p-3 rounded-lg mb-4">

            💳 Pago recibido con tarjeta

            <br />

            Confirmar operación.

          </div>

        )}







        <div className="flex gap-3">


          <button

            onClick={cerrar}

            className="flex-1 bg-gray-300 py-2 rounded-lg"

          >

            Cancelar

          </button>





          <button

            onClick={confirmarPago}

            className="flex-1 bg-green-600 text-white py-2 rounded-lg"

          >

            Confirmar

          </button>



        </div>




      </div>


    </div>

  );

}