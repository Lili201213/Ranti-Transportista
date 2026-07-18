import { envios, Envio } from "./EnviosData";
import { Card, CardBody } from "@/src/components/ui/Card";


interface Props {
  seleccionarEnvio: (envio: Envio) => void;
}



export default function EnviosList({
  seleccionarEnvio
}: Props) {



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

    <div>


      <h2 className="text-2xl font-bold mb-5">
        📦 Lista de Envíos
      </h2>




      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">



        {envios.map((envio) => (



          <Card key={envio.id}>


            <CardBody>



              <div className="flex justify-between items-center mb-4">



                <h3 className="text-lg font-bold">
                  {envio.id}
                </h3>



                <span

                  className={`px-3 py-1 rounded-full text-xs font-semibold ${colorEstado(envio.estado)}`}

                >

                  {envio.estado.replace("_", " ")}

                </span>



              </div>






              <div className="space-y-2 text-sm text-muted">



                <p>
                  👤 <b>Cliente:</b> {envio.cliente}
                </p>



                <p>
                  📞 <b>Teléfono:</b> {envio.telefono}
                </p>



                <p>
                  📍 <b>Ruta:</b> {envio.origen} → {envio.destino}
                </p>



                <p>
                  ⚖️ <b>Peso:</b> {envio.peso}
                </p>



                <p>
                  💰 <b>Precio:</b> {envio.precio}
                </p>



              </div>






              <button

                onClick={() => seleccionarEnvio(envio)}

                className="mt-5 w-full bg-brand text-brand-foreground py-2.5 rounded-xl font-medium hover:opacity-90 transition"

              >

                Ver detalle 🚚

              </button>





            </CardBody>


          </Card>



        ))}



      </div>



    </div>

  );

}