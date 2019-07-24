var edades = [30, 10, 15, 2, 17];

function comparaNumeros(n1, n2){
  return n1 - n2;
  // if (n1 > n2) {
  //   return 1;
  // }else if (n2 > n1) {
  //   return -1;
  // }else {
  //   return 0;
  // }
}

edades.sort(comparaNumeros);
console.log(edades);

let personas = [
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
  }
];

function comparaPersonas(persona1, persona2){
  return persona1.edad - persona2.edad;
  // if(persona1.edad > persona2.edad){
  //   return 1;
  // } else if(persona2.edad > persona1.edad){
  //   return -1;
  // }else {
  //   return 0;
  // }
}

personas.sort(comparaPersonas);
console.log(personas);