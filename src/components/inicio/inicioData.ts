// Datos de ejemplo estáticos para la pantalla de Inicio.
// Solo frontend, sin conexión a API.

export interface ParadaRuta {
  id: string;
  cliente: string;
  direccion: string;
  hora: string;
  estado: "pendiente" | "en_camino" | "entregado";
}

export interface MetricaResumen {
  id: string;
  etiqueta: string;
  valor: string;
  icono: string;
  variacion?: string;
}

export interface Aviso {
  id: string;
  titulo: string;
  descripcion: string;
  tipo: "info" | "alerta" | "exito";
  hora: string;
}

export const transportista = {
  nombre: "Napoleón Pérez",
  vehiculo: "Camión · ABC-123",
};

export const rutaDeHoy = {
  nombre: "Ruta Coracora – Centro",
  totalParadas: 4,
  distancia: "38 km",
  duracion: "2 h 15 min",
  paradas: [
    {
      id: "p1",
      cliente: "Comercial Andina",
      direccion: "Av. Los Incas 120",
      hora: "08:30",
      estado: "entregado",
    },
    {
      id: "p2",
      cliente: "Minimarket El Sol",
      direccion: "Jr. Bolívar 45",
      hora: "10:00",
      estado: "en_camino",
    },
    {
      id: "p3",
      cliente: "Ferretería Coracora",
      direccion: "Calle Grau 210",
      hora: "11:30",
      estado: "pendiente",
    },
    {
      id: "p4",
      cliente: "Distribuidora Puno",
      direccion: "Av. Progreso 8",
      hora: "13:00",
      estado: "pendiente",
    },
  ] as ParadaRuta[],
};

export const resumenDelDia: MetricaResumen[] = [
  { id: "m1", etiqueta: "Envíos", valor: "12", icono: "📦", variacion: "+3 hoy" },
  { id: "m2", etiqueta: "Entregas", valor: "8", icono: "✅", variacion: "de 12" },
  { id: "m3", etiqueta: "Pendientes", valor: "4", icono: "⏳" },
  { id: "m4", etiqueta: "Ganancias", valor: "$ 240.00", icono: "💰", variacion: "+12%" },
];

export const avisos: Aviso[] = [
  {
    id: "a1",
    titulo: "Nueva ruta asignada",
    descripcion: "Se agregó la Ruta Coracora – Centro para hoy.",
    tipo: "info",
    hora: "07:45",
  },
  {
    id: "a2",
    titulo: "Retraso por tráfico",
    descripcion: "Congestión reportada en Av. Los Incas. Considera una ruta alterna.",
    tipo: "alerta",
    hora: "09:10",
  },
  {
    id: "a3",
    titulo: "Entrega confirmada",
    descripcion: "Comercial Andina confirmó la recepción del pedido.",
    tipo: "exito",
    hora: "08:35",
  },
];

export const hubCoracora = {
  nombre: "Hub Coracora",
  direccion: "Av. Progreso 8, Coracora, Ayacucho",
  coordenadas: "-15.0308, -73.7797",
};
