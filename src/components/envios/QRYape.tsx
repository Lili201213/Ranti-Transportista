"use client";

import { QRCodeCanvas } from "qrcode.react";


interface Props {
  monto: string;
}


export default function QRYape({ monto }: Props) {


  const datosPago =
    `Ranti Transporte | Pago Yape | Monto: ${monto}`;



  return (

    <div className="bg-white text-gray-900 shadow-md rounded-xl p-6 text-center">


      <h2 className="text-2xl font-bold mb-4">
        📱 Pago con Yape
      </h2>



      <p className="text-gray-600 mb-4">
        📱 Presiona Confirmar para mostrar el QR de Yape
      </p>

      




      <div className="flex justify-center mb-5">

        <QRCodeCanvas

          value={datosPago}

          size={220}

        />

      </div>




      <div className="bg-purple-100 rounded-lg p-3 mb-4">

        <p className="font-semibold">
          Monto a pagar
        </p>


        <p className="text-xl font-bold text-purple-700">
          {monto}
        </p>

      </div>





      <p className="text-sm text-gray-500">

        📲 Yape a:
        <br />

        987 654 321

      </p>



      <p className="text-sm text-gray-500 mt-2">
        🚚 Transporte Ranti
      </p>



    </div>

  );

}