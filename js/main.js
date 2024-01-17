//llama al evento LOAD cada vez ue se actualiza la pagina 
  //y llama a la funcion solicitudaPI que tiene la rutina de llamar a la api desde axios 
  
  //$url = "https://api.ipgeolocation.io/ipgeo?apiKey=a7b99949c7604621b435d12121c52e24&ip=". $ipCliente;
  
  
  //alert("Hola Mundo");

let ip=document.getElementById("ip");
let pais=document.getElementById("pais");
let continente=document.getElementById("continente");
let zona_horaria=document.getElementById("zona_horaria");

const SolicitudAPI = () => {
  
    console.log('La página se ha cargado completamente.');
    // Puedes agregar aquí cualquier código adicional que desees ejecutar al cargar la página.
  
  axios.get('https://itp-bdd-mfma-01.000webhostapp.com/php-geoip-api/')
  .then(function (response) {
    // manejar respuesta exitosa
    console.log(response.data.ip.pais);
    if (ip) ip.innerHTML = response.data.ip;
    if (pais) pais.innerHTML = response.data.pais;
    if (continente) continente.innerHTML = response.data.continente;
    if (zona_horaria) zona_horaria.innerHTML = response.data.zona_horaria;
  })
  .catch(function (error) {
    // manejar error
    console.log(error);
  })
  .finally(function () {
    // siempre sera executado
  });
};

// Llama al evento LOAD cada vez que se refresca o se actualiza la pagina 
// Y llama a la función solicitud API que tiene la rutina de llama a la API
// desde el Axios 
window.addEventListener('load', SolicitudAPI);