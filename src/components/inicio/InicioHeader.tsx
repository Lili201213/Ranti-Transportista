import { transportista } from "./inicioData";

export default function InicioHeader() {
  const hoy = new Intl.DateTimeFormat("es-PE", {
    weekday: "long",
    day: "numeric",
    month: "long",
  }).format(new Date());

  return (
    <section className="flex flex-col gap-4 rounded-2xl bg-brand p-6 text-brand-foreground shadow-sm sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-col gap-1">
        <span className="text-sm font-medium opacity-90 capitalize">{hoy}</span>
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
          ¡Hola, {transportista.nombre}! 👋
        </h1>
        <p className="text-sm opacity-90">
          Tienes envíos programados para hoy. ¡Buen viaje!
        </p>
      </div>
      <div className="flex items-center gap-3 rounded-xl bg-white/15 px-4 py-3 backdrop-blur">
        <span className="text-2xl">🚚</span>
        <div className="leading-tight">
          <div className="text-xs opacity-90">Vehículo</div>
          <div className="text-sm font-semibold">{transportista.vehiculo}</div>
        </div>
      </div>
    </section>
  );
}
