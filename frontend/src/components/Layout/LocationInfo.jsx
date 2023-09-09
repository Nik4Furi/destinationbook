import React, { useEffect, useState } from 'react';
import LocationName from './LocationName';

function LocationInfo() {
  const [locationData, setLocationData] = useState(null);

  useEffect(() => {
    // Check if the Geolocation API is available in the browser
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        // Access the user's geolocation coordinates
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        // Store the location data in state
        setLocationData({ latitude, longitude });
      });
    } else {
      // Geolocation is not available in this browser
      setLocationData(null);
    }
  }, []);

  return (
    <div>
      <h1>Geolocation Data</h1>
      {locationData ? (
        <div>
          {/* <p>Latitude: {locationData.latitude}</p>
          <p>Longitude: {locationData.longitude}</p> */}
          <LocationName latitude={locationData.latitude} longitude={locationData.longitude} />
        </div>
      ) : (
        <p>Geolocation is not available in this browser.</p>
      )}
    </div>
  );
}

export default LocationInfo;
