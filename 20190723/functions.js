console.log(precioConIva(1, "pan"));


function precioConIva(precio, producto){
  return precio * cantidadIva(producto) ;
}

function cantidadIva(nombreProducto){
  switch (nombreProducto) {
    case "carne":
      return 1.1;
      break;
    case "pan":
      return 1.04;
      break; 
    default:
      return 1.21;
      break;
  }
}
