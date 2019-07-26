import films from './films.js';

window.addEventListener('load', () =>{
  printFilms();
});

function printFilms(filmsToPrint = films){
  var filmsSection = document.querySelector('#peliculas');

  films.forEach(function(pelicula){
    var filmArticle = document.createElement('article');
    filmArticle.innerHTML = `<h1>${pelicula.title}</h1>`;
    filmsSection.appendChild(filmArticle);
  })
  console.log(filmsSection);
}