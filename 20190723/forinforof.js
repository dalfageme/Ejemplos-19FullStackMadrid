let persona = {
  nombre: 'David',
  edad: 22,
  libros: [
    'uni',
    'dos'
  ]
};

for (var JOTA in persona) {
  console.log(persona[JOTA]);
}


var compra = ['galletas', 'leche', 'huevos'];

for (var JUAN of compra){
  console.log(JUAN);
}


compra.forEach(function(e){
  console.log(e)
})