var compra = ["Leche", "galletas", "huevos"];

window.addEventListener('load', () => {
  printElements();
  // Obtenemos el boton
  var addButton = document.getElementById('addButton');
  // le añadimos el esuchador de eventos
  addButton.addEventListener('click', addItem);

  var searchButton = document.querySelector('#searchButton');
  searchButton.addEventListener('click', search);
});

// Añadir el contenido del input a la lista
function addItem() {
  let productInput = document.querySelector('#productInput');
  let productName = productInput.value; // Obtiene el texto del input
  compra.push(productName); // añade a la lista de la compra
  printElements(); // vuelve a dibujar los productos
}


// Se encarga de imprimir los productos
// elements to print toma compra como parámetro por defecto
function printElements(elementsToPrint = compra) {
  var lista = document.getElementById('lista');
  lista.innerHTML = ""; // borra todo lo que habia antes
  elementsToPrint.forEach(function (producto) {
    var liElement = document.createElement('li');
    liElement.innerText = producto;
    var deleteButton = document.createElement('button');
    deleteButton.id = producto;
    deleteButton.addEventListener('click', deleteItem);
    deleteButton.innerText = "🗑️";
    liElement.prepend(deleteButton);

    lista.appendChild(liElement); // añade el elemento al final de la lista
  })
}

function search() {
  var searchInput = document.querySelector("#searchInput");
  var searchText = searchInput.value;

  var resultadosBusqueda = compra.filter(function (producto) {
    //Convertimos producto y búsqueda a minúsculas
    return producto.toLowerCase().includes(searchText.toLowerCase());
  });

  printElements(resultadosBusqueda);
}


function deleteItem(event){

  console.log(event.target.id);
  var deleteText = event.target.id;

  // array findIndex
  var indiceBorrar = compra.findIndex(function(producto){
    return producto.toUpperCase() === deleteText.toUpperCase();
  });

  // splice 
  if(indiceBorrar >= 0){
    compra.splice(indiceBorrar, 1);
  }

  // compra = compra.filter(function(producto) {
  //   return !producto.toLowerCase().includes(deleteText.toLowerCase());
  // });

  printElements();
}