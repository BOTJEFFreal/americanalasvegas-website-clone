import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './openStreetMap.css'

const OpenStreetMap = () => {
  useEffect(() => {
    // Function to initialize the map
    function initMap() {
      // Set the initial coordinates and zoom level
      const map = L.map('map').setView([36.129074, -115.165291], 13);

      // Add the OpenStreetMap base layer
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      }).addTo(map);

      // Customize the marker icon with a blue icon
      const blueIcon = new L.Icon({
        iconUrl: 'https://unpkg.com/leaflet@1.3.1/dist/images/marker-icon-2x.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        tooltipAnchor: [16, -28],
      });

      // Add a marker to the map with the custom blue icon
      L.marker([36.129074, -115.165291], { icon: blueIcon }).addTo(map)
        .openPopup();

    }

    // Call the initMap function after the component has mounted
    initMap();
  }, []);

  return <div id="map" style={{ height: '500px' }}></div>;
};

export default OpenStreetMap;
