export type EstadoEnvio =
  | "pendiente"
  | "aceptado"
  | "en_camino"
  | "entregado";


export type MetodoPago =
  | "Yape"
  | "Efectivo"
  | "Tarjeta";


export type Envio = {
  id: string;
  cliente: string;
  telefono: string;
  origen: string;
  destino: string;
  direccion: string;
  fecha: string;
  hora: string;
  peso: string;
  precio: string;
  estado: EstadoEnvio;
};



export const envios: Envio[] = [

  {
    id: "ENV-001",
    cliente: "Juan Pérez",
    telefono: "987654321",
    origen: "Coracora",
    destino: "Pauza",
    direccion: "Av. Lima 250",
    fecha: "18/07/2026",
    hora: "09:30 AM",
    peso: "18 kg",
    precio: "S/ 95.00",
    estado: "pendiente",
  },


  {
    id: "ENV-002",
    cliente: "María Torres",
    telefono: "945123678",
    origen: "Coracora",
    destino: "Parinacochas",
    direccion: "Jr. Unión 120",
    fecha: "18/07/2026",
    hora: "11:00 AM",
    peso: "8 kg",
    precio: "S/ 60.00",
    estado: "aceptado",
  },


  {
    id: "ENV-003",
    cliente: "Luis Ramos",
    telefono: "912345678",
    origen: "Coracora",
    destino: "Nazca",
    direccion: "Av. Panamericana Sur",
    fecha: "18/07/2026",
    hora: "02:00 PM",
    peso: "25 kg",
    precio: "S/ 140.00",
    estado: "en_camino",
  }

];