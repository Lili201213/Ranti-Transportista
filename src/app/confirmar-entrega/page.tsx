import { Suspense } from "react";
import ConfirmarEntrega from "@/src/components/confirmarEntrega/ConfirmarEntrega";

export default function Page() {
  return (
    <Suspense fallback={<div>Cargando entrega...</div>}>
      <ConfirmarEntrega />
    </Suspense>
  );
}