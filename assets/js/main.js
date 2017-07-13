function getJSON(url) {
  return new Promise(function(resolve,reject) {
    var ajax = new XMLHttpRequest();
    ajax.open("GET", url);
    ajax.send();
    ajax.onreadystatechange = function(data) {
      if (ajax.readyState == 4) {
          resolve(JSON.parse(ajax.responseText));
      };
    };
 });
};

getJSON("data/earth-like-results.json")
  .then(function(mensaje){
      return(getJSON(mensaje.results.forEach(function(planeta){
        getJSON(planeta).then(function(resultado){
          obtenerDatos(resultado)
          console.log(resultado)
        })
      })))
    });

function obtenerDatos(resultado){
  var nombre= resultado.pl_name;
  var info = "Discovered in " + resultado.pl_disc + " with " + resultado.pl_telescope;
  mostrarPlaneta(nombre,info);
}

function mostrarPlaneta(nombre,info){
  var contenedorPlanetas = document.getElementById("planetas");
  var divColumnas = document.createElement("div");
  divColumnas.className = "col s12 m6";
  var divCard = document.createElement("div");
  divCard.className="card";
  var divCardImage = document.createElement("div");
  divCardImage.className = "card-image";
  var imagen = document.createElement("img");
  imagen.src= "static/img/kepler-22.jpg";
  var divCardContenido = document.createElement("div");
  divCardContenido.className = "card-content";
  var nombrePlaneta = document.createElement("h3");
  nombrePlaneta.className = "card-title";
  nombrePlaneta.textContent = nombre;
  var infoPlaneta = document.createElement("p");
  infoPlaneta.textContent= info;


  divCardImage.appendChild(imagen);
  divCard.appendChild(divCardImage);
  divCardContenido.appendChild(nombrePlaneta);
  divCardContenido.appendChild(infoPlaneta);
  divCard.appendChild(divCardContenido);
  divColumnas.appendChild(divCard);
  contenedorPlanetas.appendChild(divColumnas);
}
