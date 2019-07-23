function saluda(nombre, edad){
  console.log('Hola', nombre, edad);
}

let idIntervalo = setInterval(saluda, 2 * 1000, 'David' , 22);
console.log('Justo despues');
clearInterval(idIntervalo);

// setInterval(() => {
//   console.log('Hola mundo')
// }, 2 * 1000)

setTimeout(() => {
  console.log('Desde el timeout');
}, 3 * 1000);