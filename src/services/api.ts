// Cliente base para futuras llamadas a la API.
// Aún sin implementar: aquí se configurará la conexión con el backend.

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "";

export async function apiFetch<T>(path: string): Promise<T> {
  throw new Error(`apiFetch no implementado todavía (${path})`);
}
