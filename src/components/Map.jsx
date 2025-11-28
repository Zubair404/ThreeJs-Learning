import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix default marker icon paths so markers render correctly
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const Map = ({ center = [31.5497, 74.3436], zoom = 8 }) => {
  return (
    <div style={{ width: '100%', height: '100%' }}> {/* Ensure full height */}
      <MapContainer center={center} zoom={zoom} style={{ width: '100%', height: '100%' }}>
        <TileLayer
          attribution='&copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[31.5497, 74.3436]}> {/* Lahore Marker */}
          <Popup>
            Lahore — customize this content as needed.
          </Popup>
        </Marker>
        <Marker position={[33.6844, 73.0479]}> {/* Islamabad Marker */}
          <Popup>
            Islamabad — customize this content as needed.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;