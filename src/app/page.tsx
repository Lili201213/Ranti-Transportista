import {
  InicioHeader,
  RutaDeHoy,
  ResumenDelDia,
  Avisos,
  MapaHubCoracora,
} from "@/src/components/inicio";

export default function Home() {
  return (
    <div className="flex flex-col gap-6">
      <InicioHeader />

      <ResumenDelDia />

      <div className="grid gap-6 lg:grid-cols-2">
        <RutaDeHoy />
        <div className="flex flex-col gap-6">
          <Avisos />
          <MapaHubCoracora />
        </div>
      </div>
    </div>
  );
}
