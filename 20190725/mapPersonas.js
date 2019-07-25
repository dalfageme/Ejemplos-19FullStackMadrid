let personas = [
  {
    nombre: 'Ana',
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

let nombres = personas.map(function(persona){
  return persona.nombre;
});

let edades = personas.map(function(persona){
  return persona.edad
});

let numLetras = personas.map(function(persona){
  return persona.nombre.length;
});

let personas2 = personas.map(function(persona){
  return {
    nombre: persona.nombre,
    edad: persona.edad,
    letras: persona.nombre.length
  }
})

console.log(nombres);
console.log(edades);
console.log(numLetras);
console.log(personas2);