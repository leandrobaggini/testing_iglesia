window.onload = () => {
    let places = staticLoadPlaces();
    renderPlaces(places);
};

//carga de locaciones

function staticLoadPlaces() {
   return [
       {
           name: 'Magnemite',
           location: {
               //lat: -37.177227,
               //lng: -62.761658,
                lat: -37.1794983797962,
                lng: -62.7611384913325,
           }
       },
   ];
}

function renderPlaces(places) {
   let scene = document.querySelector('a-scene');

   places.forEach((place) => {
       let latitude = place.location.lat;
       let longitude = place.location.lng;

       let model = document.createElement('a-entity');
       model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
       model.setAttribute('gltf-model', './assets/magnemite/scene.gltf');
       model.setAttribute('rotation', '0 180 0');
       model.setAttribute('animation-mixer', '');
       model.setAttribute('position', '0 0 -5'); 
       model.setAttribute('scale', '0.15 0.15 0.15');

       model.addEventListener('loaded', () => {
           window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
       });

       scene.appendChild(model);
   });
}