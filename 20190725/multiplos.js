/*
1.- Crea una función que compruebe si todos los números de un array son múltiplos de otro número
  ej sonMultiplos([1,2,3,4,5], 2) == false
      sonMultiplos([3,6,9,12], 3) == true
      sonMultiplos([2,4,8,20, 30], 2) == true
      sonMultiplos([2,4,6,7], 2) == false
*/

function sonMultiplos(numeros, multiplo){

  return  numeros.some(checkMultiplo);

  function checkMultiplo(n){
    console.log(n);
    return n % multiplo === 0;
  }

  // return numeros.every((n) => n % multiplo === 0);
}



console.log(sonMultiplos([1,2,3,4,5], 2))
console.log(sonMultiplos([3,6,9,12], 3))
console.log(sonMultiplos([2,4,8,20, 30], 2))
console.log(sonMultiplos([2,4,6,7], 2))