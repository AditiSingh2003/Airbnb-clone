
import React from 'react'

function Map() {
    
  return (
    <ReactMapGl
    mapboxApiAccessToken={process.env.mapbox_key}
    
    />
  )
}


// import ReactMap from 'google-map-react';
// import { useState } from 'react';
// import { LocationMarkerIcon } from '@heroicons/react/solid';
// import { useRouter } from 'next/dist/client/router';

// function Map({ searchResults }) {
//     const router = useRouter();
//     const { location, startDate, endDate, noOfGuests } = router.query;
//     const [selectedLocation, setSelectedLocation] = useState({});
    
//     const coords = {
//         lat: 51.5074,
//         lng: 0.1278,
//     };
    
//     return (
//         <div className="relative h-[400px] w-[400px]">
//         <ReactMapGL
//             bootstrapURLKeys={{ key: 'AIzaSyCpqwIRwv4kvyc-eKV7gjWQVhhxPbk8MCs' }}
//             defaultCenter={coords}
//             defaultZoom={14}
//         >
//             {searchResults?.map((result) => (
//                 <div
//                     className="cursor-pointer text-2xl animate-bounce"
//                     lat={result.lat}
//                     lng={result.long}
//                     onClick={() => setSelectedLocation(result)}
//                 >
//                     <LocationMarkerIcon className="h-8 text-red-400" />
//                 </div>
//             ))}
//         </ReactMapGL>
//         </div>
//     );
// }

// export default Map;
