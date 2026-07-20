"use client";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";

export default function Mapa() {

  const posicion: [number, number] = [
    -15.327,
    -74.575,
  ];

  return (
    <div className="mt-6 rounded-xl overflow-hidden border">

      <h3 className="font-bold p-4">
        🗺️ Ubicación de entrega
      </h3>

      <MapContainer
        center={posicion}
        zoom={13}
        style={{
          height: "350px",
          width: "100%",
        }}
      >

        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={posicion}>
          <Popup>
            Punto de entrega
          </Popup>
        </Marker>

      </MapContainer>

    </div>
  );
}