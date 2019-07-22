// David Alfageme 22-7-2019
/*
  Este es el primer ejercicio de JS
  Funciona en varias lineas
*/
console.log('Hola mundo desde el main.js');

//STRINGS
console.log('Hola mi nombre es: \n \'David\'😀');

// OBJETOS
var persona = {
  nombre: 'Laura',
  edad: 31,
  'fecha nacimiento': '07/07/88', // No recomendado
  tipoPelo: 'rizado'
};

console.log('Edad:', persona.edad);
console.log('Nombre:', persona['nombre']);
var nombrePropiedad = 'nombre';
console.log('Fecha nacimiento:', persona['fecha nacimiento']);
console.log(persona.estaNoExiste);

var libro = {
  titulo: 'Un bonito libro',
  fechaLanzamiento: 20190722,
  isbn: 1234567890,
  autor: {
    nombre: 'David',
    apellidos: 'Alfageme Sempere',
    edad: 22,
    lugarNacimiento: {
      ciudad: 'Madrid',
      pais: 'España',
    }
  },
  paginas: 100,
};

console.log('Título del libro:', libro.titulo);
console.log('Autor:', libro.autor.nombre);
console.log('Ciudad:', libro.autor.lugarNacimiento.ciudad);

//ARRAYS
var compra = [
  'Leche',
  'Huevos',
  'Galletas',
];

console.log('Primer elemento:', compra[0]); // Leche
console.log('No existe elemento:', compra[1000]); // Undefined


var libreria = [
  {
    titulo: 'Mi primer libro',
    autor: 'David',
  },
  {
    titulo: 'Los pilares de la tierra',
    autor: 'Ken Follet'
  },
  libro
];

console.log('Titulo segundo libro', libreria[1].titulo);
console.log('Ciudad del autor ultimo libro:', 
  libreria[libreria.length -1].autor.lugarNacimiento.ciudad);

// ARRAY DE ARRAYS

var tablaMultiplicar = [
  [0, 2, 0],
  [1, 2, 2],
  [2, 2, 4],
  [3, 2, 6],
  [4, 2, 8],
  [5, 2, 10],
  [6, 2, 12],
];

console.log('2 * 5:', tablaMultiplicar[5][2])