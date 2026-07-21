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
  imagen: string;
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
    imagen: "/images/envios/papa.jpg",
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
    imagen: "/images/envios/queso.jpg",
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
    imagen: "/images/envios/frutas.jpg",
  },


  {
    id: "ENV-012",
    cliente: "Marco Gutiérrez",
    telefono: "944112233",
    origen: "Puquio",
    destino: "Pauza",
    direccion: "Jr. Ayacucho 410",
    fecha: "21/07/2026",
    hora: "04:00 PM",
    peso: "20 kg",
    precio: "S/ 110.00",
    estado: "entregado",
    imagen: "/images/envios/queso.jpg",
  },

  {
    id: "ENV-011",
    cliente: "Elena Vargas",
    telefono: "955678123",
    origen: "Puquio",
    destino: "Nazca",
    direccion: "Av. Libertad 330",
    fecha: "21/07/2026",
    hora: "01:15 PM",
    peso: "24 kg",
    precio: "S/ 145.00",
    estado: "aceptado",
    imagen: "/images/envios/frutas.jpg",
  },



  {
    id: "ENV-009",
    cliente: "Lucía Salas",
    telefono: "943215678",
    origen: "Nazca",
    destino: "Puquio",
    direccion: "Av. Principal 560",
    fecha: "20/07/2026",
    hora: "03:30 PM",
    peso: "18 kg",
    precio: "S/ 120.00",
    estado: "en_camino",
    imagen: "/images/envios/queso.jpg",
  },
];