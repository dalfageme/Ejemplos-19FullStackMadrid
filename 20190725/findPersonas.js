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


var encontrado = personas.find(function(persona){
  return persona.nombre === "Hector";
});

console.log(encontrado);