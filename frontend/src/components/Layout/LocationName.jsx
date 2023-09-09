import React, { useEffect, useState } from 'react';

function LocationName({ latitude, longitude }) {
  const [placeName, setPlaceName] = useState('');

  useEffect(() => {
    // Ensure you replace 'YOUR_API_KEY' with your actual Google Maps Geocoding API key
    const API_KEY = 'YOUR_API_KEY';

    // Create the URL for the Geocoding API request
    const geocodingUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${API_KEY}`;

    // // Make the API request
    // axios
    //   .get(geocodingUrl)
    //   .then((response) => {
    //     const results = response.data.results;
    //     if (results.length > 0) {
    //       // Extract the formatted address from the first result
    //       const formattedAddress = results[0].formatted_address;
    //       setPlaceName(formattedAddress);
    //     } else {
    //       setPlaceName('Place not found');
    //     }
    //   })
    //   .catch((error) => {
    //     console.error('Error fetching place name:', error);
    //     setPlaceName('Error fetching place name');
    //   });
  }, [latitude, longitude]);

  return (
    <div>
      <h2>Place Name:</h2>
      <p>{placeName}</p>
    </div>
  );
}

export default LocationName;
