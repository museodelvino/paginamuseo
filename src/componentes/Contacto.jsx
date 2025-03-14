import React, { useEffect, useState } from 'react';

const Contacto = () => {

  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    if (typeof window.google === 'undefined') {
      const script = document.createElement('script');
      script.async = true;
      script.defer = true;
      // script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.APIKEY}&callback=initMap&v=weekly`;
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyD7o58OW5pRmrIqUKuLxJavQYcGyt2_sQA&callback=initMap&v=weekly`;
      script.onload = () => {
        setMapLoaded(true);
      };
      document.head.appendChild(script);
    } else {
      setMapLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (mapLoaded) {
      const loc = { lat: -32.88545560998308, lng: -68.84175746242109,};
      const map = new window.google.maps.Map(document.getElementById("map"), {
        zoom: 16,
        center: loc,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
      });
  
      const  marker = new window.google.maps.Marker({
        position: loc,
        map: map,
      });
    }
  }, [mapLoaded]);


  return (
    <div className='div-loc'>
      <h2 className='product-title'>Ubicación</h2>
      <p className='text-xl text-gray-900 mb-5 text-description'>Podés encontrarnos en Avenida Las Heras 291, Ciudad de Mendoza.</p>
      <div id="map" style={{ width: '100%', height: '500px' }}></div>
    </div>
  )
}

export default Contacto