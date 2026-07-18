"use client";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline
} from "react-leaflet";

import L from "leaflet";

import "leaflet/dist/leaflet.css";

import {
  Card,
  CardHeader,
  CardBody
} from "@/src/components/ui/Card";


// Corrección de iconos de Leaflet en Next.js
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({

  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",

  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",

  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",

});



export default function MapaEnvio() {


  const origen: [number, number] = [
    -15.327,
    -73.572
  ];


  const destino: [number, number] = [
    -14.831,
    -74.938
  ];



  return (

    <Card>


      <CardHeader
        titulo="Ruta del Envío"
        icono="🗺️"
      />


      <CardBody>


        <div className="overflow-hidden rounded-xl border border-border">


          <MapContainer

            center={origen}

            zoom={9}

            style={{
              height: "400px",
              width: "100%"
            }}

          >


            <TileLayer

              url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"

              attribution="&copy; OpenStreetMap contributors"

            />


            <Marker position={origen}>
              <Popup>
                📍 Origen: Coracora
              </Popup>
            </Marker>


            <Marker position={destino}>
              <Popup>
                🎯 Destino: Nazca
              </Popup>
            </Marker>


            <Polyline
              positions={[
                origen,
                destino
              ]}
            />


          </MapContainer>


        </div>


      </CardBody>


    </Card>

  );

}