let personas = [
  {
    nombre: 'ana',
    edad: 16,
  },
  {
    nombre: 'David',
    edad: 22,
  },
  {
    nombre: 'Hector',
    edad: 17
  },
  {
    nombre: 'Francisco',
    edad: 16
  },
];

var mayores = personas.filter(function(persona){
  return persona.edad >= 18;
})

console.log(mayores[0].edad);

var nombresCorrectos = personas.filter(function(persona){
  return persona.nombre[0] === persona.nombre[0].toUpperCase();
}).map(function(persona){
  return persona.nombre;
});
// }).map(function(nombre){
//   return nombre.length
// }).filter(function(numLetras){
//   return numLetras > 5;
// });

console.log(nombresCorrectos);