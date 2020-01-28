
document.getElementById("btn-loc").addEventListener("click",getPosition);

function getPosition(){
  if (!navigator.geolocation) {
    alert('Geolocation is not supported by your browser');
  } else {
    navigator.geolocation.getCurrentPosition(positionCb, errorCb);
  }
}

function positionCb(position){
  const latitude  = position.coords.latitude;
  const longitude = position.coords.longitude;
  locLogFun(latitude,longitude)
}

function locLogFun(lat, long){
  document.getElementById("lat").innerHTML = "the latititude is "+lat;
  document.getElementById("long").innerHTML = "the longitude is "+long;
}

function errorCb(){
  alert('error finding position')
}
