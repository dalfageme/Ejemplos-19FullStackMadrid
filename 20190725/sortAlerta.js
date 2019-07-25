let nivelesAlerta = [
  "azul",
  "verde",
  "amarillo",
  "rojo",
  "negro"
];

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

function compararAlertaCiudades(ciudad1, ciudad2){
  return nivelesAlerta.indexOf(ciudad2.nivel) - 
      nivelesAlerta.indexOf(ciudad1.nivel)
}

ciudades.sort(compararAlertaCiudades);

console.log(ciudades);