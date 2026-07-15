// Datos de ejemplo estáticos para la pantalla de Rutas.
// Solo frontend, sin conexión a API.

export type EstadoRuta = "programada" | "en_curso" | "completada";

export interface Clima {
  descripcion: string;
  temperatura: string;
  icono: string;
}

export interface Ruta {
  id: string;
  origen: string;
  destino: string;
  distancia: string;
  duracion: string;
  salida: string;
  llegada: string;
  paradas: number;
  estado: EstadoRuta;
  ubicacionActual: string;
  progreso: number; // 0-100
  clima: Clima;
  carga: {
    descripcion: string;
    peso: string;
    ocupacion: number; // 0-100
  };
}

export interface RutaHistorial {
  id: string;
  origen: string;
  destino: string;
  fecha: string;
  distancia: string;
  estado: "completada" | "cancelada";
}

export const rutasDeHoy: Ruta[] = [
  {
    id: "r1",
    origen: "Coracora",
    destino: "Puquio",
    distancia: "168 km",
    duracion: "3 h 20 min",
    salida: "08:00",
    llegada: "11:20",
    paradas: 3,
    estado: "en_curso",
    ubicacionActual: "Cruce Pauza – km 62",
    progreso: 45,
    clima: { descripcion: "Despejado", temperatura: "18°C", icono: "☀️" },
    carga: {
      descripcion: "Abarrotes y bebidas",
      peso: "2.4 t",
      ocupacion: 78,
    },
  },
  {
    id: "r2",
    origen: "Coracora",
    destino: "Pauza",
    distancia: "96 km",
    duracion: "2 h 05 min",
    salida: "13:00",
    llegada: "15:05",
    paradas: 2,
    estado: "programada",
    ubicacionActual: "Hub Coracora",
    progreso: 0,
    clima: { descripcion: "Parcialmente nublado", temperatura: "15°C", icono: "⛅" },
    carga: {
      descripcion: "Materiales de construcción",
      peso: "3.1 t",
      ocupacion: 92,
    },
  },
  {
    id: "r3",
    origen: "Coracora",
    destino: "Huanca Sancos",
    distancia: "142 km",
    duracion: "3 h 00 min",
    salida: "07:30",
    llegada: "10:30",
    paradas: 4,
    estado: "programada",
    ubicacionActual: "Hub Coracora",
    progreso: 0,
    clima: { descripcion: "Lluvia ligera", temperatura: "12°C", icono: "🌧️" },
    carga: {
      descripcion: "Productos perecibles",
      peso: "1.8 t",
      ocupacion: 60,
    },
  },
];

export const historialRutas: RutaHistorial[] = [
  {
    id: "h1",
    origen: "Coracora",
    destino: "Puquio",
    fecha: "12 jul 2026",
    distancia: "168 km",
    estado: "completada",
  },
  {
    id: "h2",
    origen: "Coracora",
    destino: "Pauza",
    fecha: "11 jul 2026",
    distancia: "96 km",
    estado: "completada",
  },
  {
    id: "h3",
    origen: "Coracora",
    destino: "Huanca Sancos",
    fecha: "10 jul 2026",
    distancia: "142 km",
    estado: "cancelada",
  },
  {
    id: "h4",
    origen: "Coracora",
    destino: "Puquio",
    fecha: "09 jul 2026",
    distancia: "168 km",
    estado: "completada",
  },
];

export const estadoRutaConfig: Record<
  EstadoRuta,
  { label: string; clase: string }
> = {
  programada: {
    label: "Programada",
    clase: "bg-muted/15 text-muted",
  },
  en_curso: {
    label: "En curso",
    clase: "bg-brand-soft text-brand",
  },
  completada: {
    label: "Completada",
    clase: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400",
  },
};
