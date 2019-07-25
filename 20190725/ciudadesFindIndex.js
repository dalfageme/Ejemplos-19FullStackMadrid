
let ciudades = [
  {
    nombre: 'madrid',
    nivel: 'negro'
  },
  {
    nombre: 'Alicante',
    nivel: 'azul',
  },
  {
    nombre: 'Zaragoza',
    nivel: 'verde'
  },
  {
    nombre: 'Barcelona',
    nivel: 'rojo'
  }
];

// ordenar ciduades alfabéticamente
ciudades.sort(function(ciudad1, ciudad2){
  return ciudad1.nombre > ciudad2.nombre ? 1 : -1;
});

//Encontrar la posicion de la ciudad
let indiceCiudad = ciudades.findIndex(function(ciudad){
  return ciudad.nombre === "Barcelona";
});

// Cortar el array hasta la posicion de la ciudad buscada (esa ciudad está incluida gracias al +1)
let ciudadesHastaBarcelona = ciudades.slice(0,indiceCiudad + 1);
console.log(ciudadesHastaBarcelona);