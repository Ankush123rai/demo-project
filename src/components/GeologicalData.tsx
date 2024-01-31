// GoogleMapAutocomplete.tsx
import React from 'react';
import { GoogleMap, LoadScript, Autocomplete, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px',
};

const center = {
  lat: 37.7749,
  lng: -122.4194,
};

const GeologicalData = () => {
  const onPlaceSelected = (place) => {
    console.log(place);
  };

  return (
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        <Autocomplete onLoad={(autocomplete) => console.log(autocomplete)} onPlaceChanged={onPlaceSelected}>
          <input type="text" placeholder="Enter a location" />
        </Autocomplete>
        {/* Add a Marker to show the selected location (optional) */}
        {/* <Marker position={selectedLocation} /> */}
      </GoogleMap>
    </LoadScript>
  );
};

export default GeologicalData;
