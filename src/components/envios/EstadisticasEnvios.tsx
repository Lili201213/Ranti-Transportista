import { Card, CardBody } from "@/src/components/ui/Card";
import { envios } from "./EnviosData";


export default function EstadisticasEnvios() {


  const totalEnvios = envios.length;


  const enCamino = envios.filter(
    (envio) => envio.estado === "en_camino"
  ).length;



  const entregados = envios.filter(
    (envio) => envio.estado === "entregado"
  ).length;



  const ingresos = envios.reduce(
    (total, envio) =>
      total + Number(envio.precio.replace("S/ ", "")),
    0
  );



  const datos = [
    {
      titulo: "Envíos",
      valor: totalEnvios,
      icono: "📦"
    },
    {
      titulo: "En camino",
      valor: enCamino,
      icono: "🚚"
    },
    {
      titulo: "Ingresos",
      valor: `S/ ${ingresos}`,
      icono: "💰"
    },
    {
      titulo: "Entregados",
      valor: entregados,
      icono: "✅"
    }
  ];



  return (

    <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-6">


      {datos.map((item) => (

        <Card key={item.titulo}>


          <CardBody>


            <div className="flex items-center gap-3">


              <span className="text-3xl">
                {item.icono}
              </span>


              <div>


                <p className="text-sm text-muted">
                  {item.titulo}
                </p>


                <p className="text-3xl font-bold">
                  {item.valor}
                </p>


              </div>


            </div>


          </CardBody>


        </Card>


      ))}



    </div>

  );

}