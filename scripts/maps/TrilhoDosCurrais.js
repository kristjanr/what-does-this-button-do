import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-gpx';

const LeafletMap = () => {
  useEffect(() => {
    const map = L.map('map').setView([38.889248, -77.050636], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
    }).addTo(map);

    const gpx = '/public/gpx/PR3_Trilho_dos_Currais.gpx';
    new L.GPX(gpx, {
      async: true,
      marker_options: {
        startIconUrl: 'https://leafletjs.com/examples/custom-icons/leaf-green.png',
        endIconUrl: 'https://leafletjs.com/examples/custom-icons/leaf-red.png',
        shadowUrl: 'https://leafletjs.com/examples/custom-icons/leaf-shadow.png',
      },
    }).on('loaded', function (e) {
      map.fitBounds(e.target.getBounds());
    }).addTo(map);
  }, []);

  return <div id="map" style={{ width: '100%', height: '500px' }} />;
};

export default TrilhoDosCurrais;
