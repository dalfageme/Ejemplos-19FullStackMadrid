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
    precio: 15000
  }
];

function comparaCoches(coche1, coche2){
  var diferenciaPrecios = coche1.precio - coche2.precio
  if(diferenciaPrecios === 0){
    return coche1.modelo > coche2.modelo ? 1 : -1;
  }else{
    return diferenciaPrecios;
  }
}

coches.sort(comparaCoches);

console.log(coches);