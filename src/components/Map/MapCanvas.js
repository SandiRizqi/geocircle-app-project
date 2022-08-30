import React from 'react';
import { MapContainer } from 'react-leaflet';
import { TileLayer } from 'react-leaflet';

import ControlMenu from './ControlMenu';


export default function MapCanvas({mode}) {
  return (
    <div id="map">
      <ControlMenu mode={mode}/>
      <MapContainer center={[0, 120]} zoom={5} >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />


        
      </MapContainer>
    </div>
  );
}
