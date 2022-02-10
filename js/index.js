// Note: This example requires that you consent to location sharing when
// prompted by your browser. If you see the error "The Geolocation service
// failed.", it means you probably did not give permission for the browser to
// locate you.
var x = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {

  //var geolocalizacion = "https://wa.me/56984431800?text=Emergencia,%20en%20https://www.openstreetmap.org/?mlat="+ position.coords.latitude +"&&mlon="+ position.coords.longitude + "#map=17/"+ position.coords.latitude +"/"+ position.coords.longitude;
  //var geolocalizacion = "https://wa.me/56984431800?text=Emergencia,%20en%20https://www.openstreetmap.org/#map=17/"+ position.coords.latitude +"/"+ position.coords.longitude;
  //var geolocalizacion = "https://wa.me/56984431800?text=Me%20comunico%20desde%20TuWeb,%20tengouna%20emergencia%20en%20coordenadas%20Latitude:%20" + position.coords.latitude + ",%20Longitude:%20" + position.coords.longitude;
  var geolocalizacion = "https://wa.me/56984431800?text=Me%20comunico%20desde%20TuWeb,%20tengouna%20emergencia%20en%20https://www.google.com/maps/@-33.4467865,-70.6495814,16.69z"
  document.getElementById("miUbicacion").setAttribute("href", geolocalizacion);
    x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude + "<br>Url: " + geolocalizacion;
}
window.onload = getLocation;