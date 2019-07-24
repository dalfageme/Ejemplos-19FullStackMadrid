dibujarPiramide(10, '8');

function dibujarPiramide(filas, caracter = "*"){
  var numCaracteresUltimaFila = filas * 2 - 1;
  var numeroEspacios = (numCaracteresUltimaFila - 1) / 2;
  var numeroCaracteres = 1;

  for( var i = 0; i < filas; i++){
    var lineaImprimir = "";
    for(var esp = 0; esp < numeroEspacios; esp++){
      lineaImprimir += " ";
    }

    for(var car = 0; car < numeroCaracteres; car++){
      lineaImprimir += caracter;
    }

    console.log(lineaImprimir);

    numeroCaracteres+=2;
    numeroEspacios--;
  }
}
