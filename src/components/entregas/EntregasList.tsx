export default function EntregasList() {
  return (
    <section className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold">Entregas</h1>
      <p className="text-foreground/70">
        Aquí se mostrará el historial y el estado de las entregas.
      </p>
      <div className="rounded-xl border border-dashed border-black/15 p-10 text-center text-foreground/50 dark:border-white/15">
        Sin entregas aún.
      </div>
    </section>
  );
}
