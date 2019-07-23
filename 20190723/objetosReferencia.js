var listaCompraDavid = ['coca cola', 'fanta', 'vino blanco'];
listaCompraDavid.push('papas');

// var listaCompraLaura = [...listaCompraDavid];
var listaCompraLaura = Array.from(listaCompraDavid);
listaCompraLaura.push('Cerveza');

listaCompraDavid.forEach(e => console.log(e));

// Objetos
var persona = {
  nombre: 'David',
  edad: 22,
};
persona.nombre = 'David Alfageme';

// var persona2 = Object.assign({}, persona);
var persona2 = {...persona};
persona2.nombre = 'Laura';

console.log(persona)