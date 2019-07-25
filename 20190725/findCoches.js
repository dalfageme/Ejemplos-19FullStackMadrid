let coches = [
  {
    modelo: 'Seat Ibiza',
    precio: 15000,
  },
  {
    modelo: 'Honda Accord',
    precio: 12301,
  },
  {
    modelo: 'Tesla Model S',
    precio: 50000,
  },
  {
    modelo: 'Renault Clio',
    precio: 14000,  
  },
  {
    modelo: 'Dacia Sandero',
    precio: 14000
  },
  {
    modelo: 'Toyota Aygo',
    precio: 16000
  }
];

let encontrado = coches.sort(function(coche1, coche2){
  return coche1.precio - coche2.precio;
}).find(function(coche){
  return coche.precio > 15000;
});

console.log(encontrado);

let idEncontrado = coches.sort(function(coche1, coche2){
  return coche1.precio - coche2.precio;
}).findIndex(function(coche){
  return coche.precio > 15000;
});

console.log(idEncontrado)