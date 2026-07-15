import { Card, CardBody } from "@/src/components/ui/Card";
import { resumenDelDia } from "./inicioData";

export default function ResumenDelDia() {
  return (
    <section className="flex flex-col gap-3">
      <h2 className="flex items-center gap-2 text-base font-semibold">
        <span aria-hidden>📊</span> Resumen del Día
      </h2>
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {resumenDelDia.map((m) => (
          <Card key={m.id} className="transition-shadow hover:shadow-md">
            <CardBody className="flex flex-col gap-1">
              <span className="text-xl" aria-hidden>
                {m.icono}
              </span>
              <span className="text-2xl font-bold">{m.valor}</span>
              <span className="text-sm text-muted">{m.etiqueta}</span>
              {m.variacion && (
                <span className="text-xs font-medium text-brand">
                  {m.variacion}
                </span>
              )}
            </CardBody>
          </Card>
        ))}
      </div>
    </section>
  );
}
