
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


// si alguien tiene más de 18 años
function esMayorDeEdad(persona){
  return persona.edad >= 18;
}

// llamar al método sort pasándole la funcion como parámetro
let puedenEntrar = personas.some(esMayorDeEdad);

// puedenEntrar = persona.some(p => p.edad > 18 );



if (puedenEntrar){
  console.log('Podeis entrar');
}else{
  console.log('No podeis entrar');
}