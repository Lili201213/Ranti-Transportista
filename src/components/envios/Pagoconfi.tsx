import {
  Card,
  CardHeader,
  CardBody
} from "@/src/components/ui/Card";

interface Props {
  codigoPago?: string;
  monto?: string;
  metodo?: string;
}

export default function Pagoconfi({
  codigoPago = "PAY-001",
  monto = "S/ 95.00",
  metodo = "Yape"
}: Props) {

  return (

    <Card>

      <CardHeader
        titulo="Pago Confirmado"
        icono="✅"
      />

      <CardBody>

        <div className="flex flex-col items-center">

          <div className="text-6xl mb-4">
            ✅
          </div>

          <h3 className="text-2xl font-bold text-green-600">
            ¡Pago realizado con éxito!
          </h3>

          <p className="text-muted mt-2 text-center">
            El pago fue registrado correctamente.
          </p>

        </div>


        <div className="mt-8 grid gap-4 md:grid-cols-2">

          <div className="rounded-xl border border-border p-4">
            <p className="text-sm text-muted">
              🧾 Código
            </p>

            <p className="font-semibold">
              {codigoPago}
            </p>
          </div>


          <div className="rounded-xl border border-border p-4">
            <p className="text-sm text-muted">
              💰 Monto
            </p>

            <p className="font-semibold">
              {monto}
            </p>
          </div>


          <div className="rounded-xl border border-border p-4">
            <p className="text-sm text-muted">
              💳 Método
            </p>

            <p className="font-semibold">
              {metodo}
            </p>
          </div>


          <div className="rounded-xl border border-border p-4">
            <p className="text-sm text-muted">
              📦 Estado
            </p>

            <span className="inline-block mt-2 rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
              Completado
            </span>
          </div>

        </div>


        <button
          className="mt-8 w-full rounded-xl bg-brand py-3 font-semibold text-brand-foreground hover:opacity-90 transition"
        >
          🚚 Continuar envío
        </button>

      </CardBody>

    </Card>

  );

}