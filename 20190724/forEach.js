var compra = ["agua", "sal", "leche", "pimiento", "lechuga", "huevos"];

function iteraCompra(producto, i, array){
  console.log((i+1) + ".- " + producto);
  console.log((i+1) + ".- " + array[i]);
}

compra.forEach(iteraCompra);