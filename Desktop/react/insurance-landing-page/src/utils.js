// utils.js

export const loadGoogleMapsPlacesAPI = () => {
  return new Promise((resolve, reject) => {
    if (window.google && window.google.maps && window.google.maps.places) {
      // Jeśli biblioteka Google Maps API jest już załadowana, rozwiąż obietnicę natychmiastowo
      resolve(window.google);
    } else {
      // W przeciwnym razie, dynamicznie załaduj skrypt Google Maps Places API
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAHQzVbDSLvoAP4wJgRQpm7y8XXY1KUV9E&libraries=places`;
      script.defer = true;
      script.async = true;
      script.onload = () => {
        // Po załadowaniu skryptu, rozwiąż obietnicę z obiektem google
        resolve(window.google);
      };
      script.onerror = (error) => {
        // W przypadku błędu, odrzuć obietnicę z przyczyną błędu
        reject(error);
      };

      // Dołącz skrypt do dokumentu
      document.body.appendChild(script);
    }
  });
};
