import { Card, CardContent } from "@/components/ui/card";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function MapComponent() {
  return (
    <Card className="w-full h-[400px] overflow-hidden rounded-none p-0">
      <CardContent className="p-0">
        <MapContainer
          center={[25.2854, 51.531]} // مثال: الدوحة
          zoom={12}
          className="h-[400px] w-full"
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={[25.2854, 51.531]}>
            <Popup>My Location</Popup>
          </Marker>
        </MapContainer>
      </CardContent>
    </Card>
  );
}
