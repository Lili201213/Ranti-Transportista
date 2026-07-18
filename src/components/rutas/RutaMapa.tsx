"use client";

import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const marcadorRuta = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

export default function RutaMapa() {
  return (
    <MapContainer
      center={[-14.3407, -73.8772]}
      zoom={8}
      scrollWheelZoom={true}
      className="h-80 w-full rounded-2xl"
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={[-14.3407, -73.8772]} icon={marcadorRuta}>
        <Popup>Coracora - Inicio de la ruta 🚚</Popup>
      </Marker>
    </MapContainer>
  );
}