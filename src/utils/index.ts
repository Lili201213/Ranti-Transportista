// Funciones utilitarias compartidas.

export function formatearMoneda(monto: number): string {
  return new Intl.NumberFormat("es-EC", {
    style: "currency",
    currency: "USD",
  }).format(monto);
}
