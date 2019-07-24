// Cada 3 seg mostrar algo setInterval
// parar a los 10 segundos setTimeout

function saluda(texto) {
  console.log(texto);
}

var idIntervalo = setInterval(saluda, 3 * 1000, 'hola mundo');

function clean(id){
  clearInterval(id);
}

setTimeout(clean, 10 * 1000, idIntervalo);


