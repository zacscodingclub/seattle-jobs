import React, { Component } from 'react';
import ReactMapboxGl, { GeoJSONLayer } from "react-mapbox-gl";
import * as MapboxGL from 'mapbox-gl';

const geojson = require('../../data/neighborhoods.json');

const Map = ReactMapboxGl({ accessToken: process.env.REACT_APP_MAP_KEY });

const fillPaintStyle: MapboxGL.FillPaint = {
  'fill-color': '#ff8787',
  'fill-opacity': 0.5,
  'fill-antialias': true,
  'fill-outline-color': '#2F1616'
};


class MapContainer extends Component {
  constructor(props) {
    super(props)
  }

  render(){
    const mapStyle = {
      height: "90vh",
      width: "90vw"
    }

    return(
        <Map
          style="mapbox://styles/mapbox/dark-v9"
          center={[-122.3321, 47.6062]}
          containerStyle={mapStyle}>
            <GeoJSONLayer
              data={geojson}
              fillPaint={fillPaintStyle}
            />
        </Map>
    )
  }
}

export default MapContainer;
