export default function GananciasResumen() {
  return (
    <section className="flex flex-col gap-6">
      <h2 className="text-2xl font-bold">Ganancias</h2>
      <p className="text-foreground/70">
        Aquí se mostrará el resumen de tus ingresos y pagos.
      </p>
      <div className="rounded-xl border border-dashed border-black/15 p-10 text-center text-foreground/50 dark:border-white/15">
        Sin datos de ganancias aún.
      </div>
    </section>
  );
}
