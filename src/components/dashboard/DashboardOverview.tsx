export default function DashboardOverview() {
  return (
    <section className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <p className="text-foreground/70">
        Resumen general de tu actividad como transportista.
      </p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {["Rutas", "Envíos", "Entregas", "Ganancias"].map((label) => (
          <div
            key={label}
            className="rounded-xl border border-black/10 p-5 dark:border-white/10"
          >
            <div className="text-sm text-foreground/70">{label}</div>
            <div className="mt-2 text-2xl font-bold">—</div>
          </div>
        ))}
      </div>
    </section>
  );
}
