// snazzy maps

import React, { useState } from "react";
// import {PropTypes} from 'prop-types';
// import L from 'leaflet'
// import 'leaflet/dist/leaflet.css'
// import styled from 'styled-components'
//
// const Wrapper = styled.div`
//   width: ${props => props.width}
//   height: ${props => props.height}
// `
//
// export default class Map extends React.Component {
//
//   componentDidMount(){
//     this.map = L.map('map', {
//       center: [34.05, -118.24],
//       zoom: 10,
//       zoomControl: false,
//       // id: 'mapbox.streets'
//     })
//
//     L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}{r}.png', {
//       detectRetina: true,
//       maxZoom: 20,
//       maxNativeZoom: 17
//     }).addTo(this.map)
//
//   }
//     render(){
//       return <Wrapper width="30em" height="25em" id="map" />
//     }
// }
////////////////////////////////////////////////////////
// https://tomchentw.github.io/react-google-maps/#googlemap

// import { compose, withProps, lifecycle } from "recompose"
// import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
//
// const _ = require('lodash');
//
// const google=window.google
//
// const { SearchBox } = require("react-google-maps/lib/components/places/SearchBox");

// const MapWithASearchBox = compose(
//   withProps({
//     googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places",
//     loadingElement: <div style={{ height: `100%` }} />,
//     containerElement: <div style={{ height: `400px` }} />,
//     mapElement: <div style={{ height: `100%` }} />,
//   }),
//   lifecycle({
//     componentWillMount() {
//       const refs = {}
//
//       this.setState({
//         bounds: null,
//         center: {
//           lat: 41.9, lng: -87.624
//         },
//         markers: [],
//         onMapMounted: ref => {
//           refs.map = ref;
//         },
//         onBoundsChanged: () => {
//           this.setState({
//             bounds: refs.map.getBounds(),
//             center: refs.map.getCenter(),
//           })
//         },
//         onSearchBoxMounted: ref => {
//           refs.searchBox = ref;
//         },
//         onPlacesChanged: () => {
//           const places = refs.searchBox.getPlaces();
//           const bounds = new google.maps.LatLngBounds();
//
//           places.forEach(place => {
//             if (place.geometry.viewport) {
//               bounds.union(place.geometry.viewport)
//             } else {
//               bounds.extend(place.geometry.location)
//             }
//           });
//           const nextMarkers = places.map(place => ({
//             position: place.geometry.location,
//           }));
//           const nextCenter = _.get(nextMarkers, '0.position', this.state.center);
//
//           this.setState({
//             center: nextCenter,
//             markers: nextMarkers,
//           });
//           // refs.map.fitBounds(bounds);
//         },
//       })
//     },
//   }),
//   withScriptjs,
//   withGoogleMap
// )(props =>
//   <GoogleMap
//     ref={props.onMapMounted}
//     defaultZoom={15}
//     center={props.center}
//     onBoundsChanged={props.onBoundsChanged}
//   >
//     <SearchBox
//       ref={props.onSearchBoxMounted}
//       bounds={props.bounds}
//       controlPosition={google.maps.ControlPosition.TOP_LEFT}
//       onPlacesChanged={props.onPlacesChanged}
//     >
//       <input
//         type="text"
//         placeholder="Customized your placeholder"
//         style={{
//           boxSizing: `border-box`,
//           border: `1px solid transparent`,
//           width: `240px`,
//           height: `32px`,
//           marginTop: `27px`,
//           padding: `0 12px`,
//           borderRadius: `3px`,
//           boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
//           fontSize: `14px`,
//           outline: `none`,
//           textOverflow: `ellipses`,
//         }}
//       />
//     </SearchBox>
//     {props.markers.map((marker, index) =>
//       <Marker key={index} position={marker.position} />
//     )}
//   </GoogleMap>
// );


// const MyMapComponent = compose(
//   withProps({
//     googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAPn53_Wsk8zZ1pejFk09piJawMPOWwDOk&callback=initMap",
//     loadingElement: <div style={{ height: `100%` }} />,
//     containerElement: <div style={{ height: `300px` }} />,
//     mapElement: <div style={{ height: `100%` }} />,
//   }),
//   withScriptjs,
//   withGoogleMap
// )
//
// (
//   props =>
//   <GoogleMap
//     defaultZoom={8}
//     defaultCenter={{ lat: 34.05, lng: -118.24 }}
//   >
//     {props.isMarkerShown
//       &&
//     <Marker position={{ lat: 34.05, lng: -118.24 }} onClick={props.onMarkerClick} />}
//
//   </GoogleMap>
// )
//
// class Map extends React.PureComponent {
//   state = {
//     isMarkerShown: false,
//   }
//
//   componentDidMount() {
//     this.delayedShowMarker()
//   }
//
//   delayedShowMarker = () => {
//     setTimeout(() => {
//       this.setState({ isMarkerShown: true })
//     }, 3000)
//   }
//
//   handleMarkerClick = (e) => {
//     debugger
//     this.setState({ isMarkerShown: false })
//
//     this.delayedShowMarker()
//   }
//
//   render() {
//     return (
//
//       <MyMapComponent
//         isMarkerShown={this.state.isMarkerShown}
//         onMarkerClick={this.handleMarkerClick}
//       />
//     )
//   }
// }
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from "react-google-maps"
import * as parksData from '../data/skateParks.json'
import mapStyles from './mapStyles'

function Map() {
  const [selectedPark, setSelectedPark] = useState(null)
  //selected park is value of our state and setselectedpark will be the setter for it
  //hook value and setter
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 45.4211, lng: -75.6903 }}
defaultOptions={{styles: mapStyles}}
    >
      {parksData.features.map(park =>(
        <Marker key={park.properties.PARK_ID} position={{lat: park.geometry.coordinates[1], lng: park.geometry.coordinates[0]}}
        onClick={() => {
          setSelectedPark(park)
        }}
        icon={{
          url: '/skater.svg',
          scaledSize: new window.google.maps.Size(25,25)
        }}
        />
        //below if selectedpark is true and infowindow position is true then show info box
      ))}
      {selectedPark && (
        <InfoWindow
          position={{
            lat:selectedPark.geometry.coordinates[1], lng: selectedPark.geometry.coordinates[0]
          }}
          onCloseClick={() => {
            setSelectedPark(null)
          }}
        >
        <div>
          <h2>{selectedPark.properties.NAME}</h2>
          <p>{selectedPark.properties.DESCRIPTIO}</p>
        </div>
        </InfoWindow>
      )}
    </GoogleMap>
  )
}

const WrappedMap = withScriptjs(withGoogleMap(Map))

export default WrappedMap
