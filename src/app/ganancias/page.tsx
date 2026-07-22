import GananciasResumen from "@/src/components/ganancias/GananciasResumen";
import GananciasCards from "@/src/components/ganancias/GananciasCards";
import GananciasHistorial from "@/src/components/ganancias/GananciasHistorial";
import PagosRecibidos from "@/src/components/ganancias/PagosRecibidos";

export default function GananciasPage() {
  return (
    <section className="mx-auto max-w-6xl p-6">

      <GananciasResumen />

      <GananciasCards />

      <PagosRecibidos />

      <GananciasHistorial />

    </section>
  );
}