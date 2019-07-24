
let personas = [
  {
    nombre: 'Ana',
    edad: 22,
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
    edad: 26
  },
];

function esNombreValido(persona){
  console.log(persona.nombre);
  return persona.nombre.length > 3;
  // return persona.nombre.length > 3 ? true : false;
  // if(persona.nombre.length > 3){
  //   return true;
  // }else {
  //   return false;
  // }
}

let resultado = personas.every(esNombreValido);
console.log(resultado);