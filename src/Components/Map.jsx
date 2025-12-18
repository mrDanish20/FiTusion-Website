import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './Map.css'; // ✅ We'll add responsive CSS separately

// Fix marker icon issues in React Leaflet
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

export default function Map() {
  return (
    <section className="Map-section">
      <h2 className="Cards-title">

        <span className="highlighted-text">Our Location</span>
      </h2>
      <p className="Cards-subtitle">
        Visit our gym center and experience world-class training facilities.
        We’re conveniently located for your fitness journey!
      </p>

      <div className="Map-container">
        <MapContainer
          center={[51.505, -0.09]}
          zoom={13}
          scrollWheelZoom={false}
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              A sample location <br /> You can put any info here.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </section>
  );
}
