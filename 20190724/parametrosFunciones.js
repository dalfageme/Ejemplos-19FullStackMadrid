// function saluda(nombre, edad, sexo, ciudad, fechaNacimiento){
//   console.log(`Hola me llamo ${nombre} tengo ${edad} años...` );
// }

function saluda(persona){
  console.log(`Hola me llamo ${persona.nombre} tengo ${persona.edad} años...` );
}


saluda({
  nombre: 'David',
  lugarNacimiento: 'Alicante'
});

console.log(sumaNumeros(3, 20, 1, 1,1,1,1)); // 25

function sumaNumeros(){
  var total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }

  return total;
}

