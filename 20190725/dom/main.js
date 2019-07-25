window.addEventListener('load', () => {
  mostrarElementos();
  addElements();
});


function addElements(){
  var lista = document.getElementById('lista');
  var compra = ["leche", "galletas", "huevos"];
  // opcion 1
  // for (let i = 0; i < compra.length; i++) {
  //   lista.innerHTML = lista.innerHTML +  "<li>" + compra[i] + "</li>";
  // }
  // opcion 2
  // var elementos = compra.map((p) => "<li>" + p + "</li>").join("");
  // lista.innerHTML = elementos;
  // OPCION 3
  compra.forEach(function(producto){
    var liElement = document.createElement('li');
    liElement.innerText = producto;
    lista.appendChild(liElement);
  })
  console.log(lista);
}

function mostrarElementos(){
  var elementoTitulo = document.getElementsByTagName('h1')[0];
  // elementoTitulo.
  elementoTitulo.innerText = 'David Alfageme';

  var conClase = document.getElementsByClassName('conClase')[0];
  console.log(conClase.innerText);

  var porId = document.getElementById('conId');
  console.log(porId.innerText);
}