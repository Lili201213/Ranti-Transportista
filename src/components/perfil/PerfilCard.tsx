import GananciasResumen from "@/src/components/ganancias/GananciasResumen";

export default function PerfilCard() {
  return (
    <section className="flex flex-col gap-8">
      <div className="flex flex-col gap-6">
        <h1 className="text-3xl font-bold">Perfil</h1>
        <p className="text-foreground/70">
          Aquí se mostrarán los datos del transportista y su vehículo.
        </p>
        <div className="rounded-xl border border-black/10 p-6 dark:border-white/10">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-black/5 text-2xl dark:bg-white/10">
              🧑‍✈️
            </div>
            <div>
              <div className="text-lg font-semibold">Transportista</div>
              <div className="text-sm text-foreground/70">Datos por completar</div>
            </div>
          </div>
        </div>
      </div>

      {/* Ganancias como sección interna del Perfil */}
      <GananciasResumen />
    </section>
  );
}
