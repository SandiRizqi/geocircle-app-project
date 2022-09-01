import React from 'react';
import { MapContainer } from 'react-leaflet';
import { TileLayer } from 'react-leaflet';
import { FeatureGroup, LayersControl } from 'react-leaflet';
import { EditControl } from 'react-leaflet-draw';
import 'leaflet-draw/dist/leaflet.draw.css';
import ControlMenu from './ControlMenu';

export default function MapCanvas() {
  const _onEdit = (e) => {
    e.layers.eachLayer((layer) => {
      console.log(layer._bounds);
    });
  };

  const _onCreate = (e) => {
    const { layerType, layer } = e;
    if (layerType === 'polygon' || 'rectangle') {
      const box = layer.getBounds();
      const data = [
        box.getSouthWest().lat,
        box.getSouthWest().lng,
        box.getNorthEast().lat,
        box.getNorthEast().lng,
      ];
      console.log(layer.toGeoJSON().geometry);
      console.log(data);
    } else {
      window.alert('Please draw a polygon');
    }
  };

  const _onDeleted = (e) => {
    console.log(e);
  };

  return (
    <div>
      <ControlMenu />
      <MapContainer center={[0, 120]} zoom={5}>
        <LayersControl position="bottomleft">
          <LayersControl.BaseLayer name="Contour Basemap">
            <TileLayer
              url="https://api.mapbox.com/styles/v1/geo-circle/cl28tz8gf005j15jzi1k68m5z/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZ2VvLWNpcmNsZSIsImEiOiJjbDI2MmU2YW4wMTU4M2JubTV6dW1tZTUxIn0.9ixHJIi6DnNloTYC8aQmKw"
              attribution='Map data &copy; <a href="https://www.mapbox.org/">Satellite Imagery</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
            />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="OpenStreetMap">
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="Satellite Mapbox" checked>
            <TileLayer
              url="https://api.mapbox.com/styles/v1/geo-circle/cl261vqnk000515pmze4smns1/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZ2VvLWNpcmNsZSIsImEiOiJjbDI2MmU2YW4wMTU4M2JubTV6dW1tZTUxIn0.9ixHJIi6DnNloTYC8aQmKw"
              attribution='Map data &copy; <a href="https://www.mapbox.org/">Satellite Imagery</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
            />
          </LayersControl.BaseLayer>
        </LayersControl>

        <FeatureGroup>
          <EditControl
            position="bottomright"
            onEdited={_onEdit}
            onCreated={_onCreate}
            onDeleted={_onDeleted}
            draw={{
              rectangle: true,
              polyline: false,
              circlemarker: false,
              circle: false,
              marker: false,
              showArea: true,
            }}
          />
        </FeatureGroup>
      </MapContainer>
    </div>
  );
}
