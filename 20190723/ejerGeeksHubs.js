for (let i = 0; i < 100; i++) {
  var mostrar = "";

  if(i % 3 === 0){
    mostrar = "geeks";
  } 
  if ( i % 5 === 0){
    mostrar = mostrar + "hubs";
  }

  console.log(mostrar ? mostrar : i);
}