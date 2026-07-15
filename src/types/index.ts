// Tipos compartidos del dominio Ranti-Transportista.
// Definir aquí las interfaces de Ruta, Envio, Entrega, Ganancia, Perfil, etc.

export type EstadoEnvio = "pendiente" | "en_ruta" | "entregado" | "cancelado";

export interface Perfil {
  id: string;
  nombre: string;
  vehiculo: string;
  estado: "activo" | "inactivo";
}

export interface Ruta {
  id: string;
  origen: string;
  destino: string;
}

export interface Envio {
  id: string;
  cliente: string;
  destino: string;
  estado: EstadoEnvio;
}

export interface Entrega {
  id: string;
  envioId: string;
  fecha: string;
}

export interface Ganancia {
  id: string;
  monto: number;
  fecha: string;
}
