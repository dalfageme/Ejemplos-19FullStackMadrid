var compra = ["leche", "galletas", "huevos"];

window.addEventListener('load', () => {
  printElements();
  // Obtenemos el boton
  var addButton = document.getElementById('addButton');
  // le añadimos el esuchador de eventos
  addButton.addEventListener('click', addItem);
});

// Añadir el contenido del input a la lista
function addItem(){
  let productInput = document.querySelector('#productInput');
  let productName = productInput.value; // Obtiene el texto del input
  compra.push(productName); // añade a la lista de la compra
  printElements(); // vuelve a dibujar los productos
}


// Se encarga de imprimir los productos
function printElements(){
  var lista = document.getElementById('lista');
  lista.innerHTML = ""; // borra todo lo que habia antes
  compra.forEach(function(producto){
    var liElement = document.createElement('li');
    liElement.innerText = producto;
    lista.appendChild(liElement); // añade el elemento al final de la lista
  })
}
