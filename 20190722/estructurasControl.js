console.log('Estructuras de control');

var edad = 18;
var nombre;



if ( edad >= 18 ) {
  console.log('Puedes entrar');
} else if( edad >= 16) {
  console.log('Dame el dni')
} else {
  console.log('No puedes entrar');
}

var saludo = 'Hasta pronto';

switch (saludo.toLowerCase()) {
  case 'hola':
    console.log('Hola mundo');
    break;
  case 'adios':
    console.log('Que volvamos a vernos');
    break;
  case 'hasta pronto':
    console.log('O no!');
    break;
  default:
    console.log('No me estás saludando');
    break;
}


var i = 0;

while ( i < 10 ) {
  console.log(i * 3);
  i++
}

// do {
//   edad = +prompt('Dime edad');
//   console.log(edad);
// } while ( isNaN(edad) );

// do{
//   edad = +prompt('DIme edad');
// }while(edad < 18);

// opción equivalente con while
/*edad = +prompt('Dime edad');
while(edad < 18){
  edad = +prompt('Dime edad');
}
*/

var a = 0;
while ( a < 10){
  console.log(a)
  a++;
}

for( var b = 0; b < 10 ; b++){
  console.log('for', b);
}

var compra = ['leche', 'galvaras', 'huevos'];
for(var j = 0; j < compra.length; j++){
  console.log(compra[j]);
}

var ladoCubo = [
  [ 'R', 'A', 'B'], // R - A - B
  [ 'V', 'N', 'B'], // V - N - B
  [ 'R', 'N', 'V'] // R - N -V
];

for (var row = 0; row < ladoCubo.length; row++) {
  const filaCubo = ladoCubo[row];
  var filaImprimir = "";
  for (var column = 0; column < filaCubo.length; column++) {
    filaImprimir += ladoCubo[row][column] 
      + (column === filaCubo.length -1 ? "" :" - ");
  }
  console.log(filaImprimir);
}

for(var i = 5; i > 0; i--){
  var filaImprimir = "";
  for(var j = 0; j < i; j++){
    filaImprimir += '0';
  }
  console.log(filaImprimir);
}