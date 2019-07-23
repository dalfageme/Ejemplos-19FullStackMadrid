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

console.log('Tipo del array', typeof tablaMultiplicar);
console.log('2 * 5:', tablaMultiplicar[5][2])

// Dates
var cumpleanyos = new Date(2019, 4, 6);
var cumpleanyos2 = new Date("2001/9/28"); //28 septiembre 2001
console.log(cumpleanyos2);
console.log('Año:', cumpleanyos2.getFullYear());
console.log('Mes:', cumpleanyos2.getMonth());

var meses = ['E', 'F', 'M', 'A', 'MY', 'J', 'JL', 'AG', 'S', 'O', 'N', 'D'];
console.log('Mes:', meses[cumpleanyos2.getMonth()]);
console.log('Mes:', cumpleanyos2.toLocaleString('default', { month: 'long' }) );


// Variables
var a = 2;
var b = a + 1;
//Comentado para que no pida valors todo el rato
// var c = parseInt(prompt('Dame un numero'));
// var sumando1 = +prompt('Dame un numero');
// var sumando2 = +prompt('Dame otro numero');
// var resultado = sumando1 + sumando2;
// console.log(sumando1 + ' + ' +  sumando2 +  ' = ' +  resultado );

// console.log('a:',a);
// console.log('b:',b);

// Operadores
console.log(2 * 3); // 6
console.log(5 / 2); // 2.5
console.log(parseInt(2.999)); // 2
console.log(Math.round(2.999)); // 3
console.log(5 % 2); // 1 (resto) 
console.log(2 ** 3) // 8

var numeroAIncrementar = 0;
console.log(numeroAIncrementar);
numeroAIncrementar = numeroAIncrementar + 1; //vale 1
numeroAIncrementar += 1; // vale 2
console.log(++numeroAIncrementar); // imprime 3
console.log(numeroAIncrementar); // 3
numeroAIncrementar--;
console.log(numeroAIncrementar); // 2

var mes = 0;
console.log(mes + 1);
console.log(mes);

//Operadores de comparacion
console.log( 1 == 1); // true
console.log( 1 === 1); // true
console.log( 1 == "1"); // true
console.log( 1 === "1"); // false
console.log( 1 === +"1"); // true

// Ternario
var edad = 17;
var respuesta = edad >= 18 ? 'Puedes entrar' : 'No puedes';
console.log(edad >= 18 ? 'Puedes entrar' :'No puedes');
edad = edad > 18 ? edad  : edad + 10; 
console.log(respuesta);

// Operadores logicos
console.log(true && true); // true
console.log(true && false); // false
console.log(false && false); // false

console.log(true || true); // true
console.log(false || true); // true
console.log(false || false); // false

console.log(!false); // true
console.log(!true); // false
