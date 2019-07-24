function capitalize(text){
  return text[0].toUpperCase() + text.substr(1);
}
console.log(capitalize("hola mundo"));

function upperEachWord(text){
  var words = text.split(' ');
  var result = "";
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    result += capitalize(word) + " ";
  }
  return result;
}

console.log(upperEachWord('hola mundo cruel'));