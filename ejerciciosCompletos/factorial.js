// function factorial(number){
//   var resultado = 1;
//   for (let i = 1; i <= number; i++) {
//     resultado = resultado * i;
//   }
//   return resultado;
// }

function factorial(number){
  if(number <= 1){
    return 1;
  }else {
    return factorial(number - 1) * number;
  }
}


var resultado = factorial(3);
console.log(resultado);