import React, { Component } from 'react';
import ReactMapboxGl, { GeoJSONLayer, ZoomControl } from "react-mapbox-gl";
import * as MapboxGL from 'mapbox-gl';

const geojson = require('../../data/neighborhoods.json');

const Map = ReactMapboxGl({ accessToken: process.env.REACT_APP_MAP_KEY });

const fillPaintStyle: MapboxGL.FillPaint = {
  'fill-color': '#ff8787',
  'fill-opacity': 0.5,
  'fill-antialias': true,
  'fill-outline-color': '#2F1616',
};

// const symbolLayoutStyle: MapboxGL.SymbolLayout = {
//   'text-field': '{nhood}',
//   'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
//   'text-offset': [0, 0.6],
//   'text-anchor': 'top'
// }

class MapContainer extends Component {
  constructor(props) {
    super(props)

    this.onNeighborhoodClick = this.onNeighborhoodClick.bind(this);
  }

  onNeighborhoodClick(e) {
    console.log(e)
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
          containerStyle={mapStyle}
          onClick={this.onNeighborhoodClick}>
            <ZoomControl />
            <GeoJSONLayer
              data={geojson}
              fillPaint={fillPaintStyle}
            />
        </Map>
    )
  }
}

export default MapContainer;
