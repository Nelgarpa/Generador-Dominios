import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
/*
  - Reorganicé el código para mayor claridad y evité repetir llamadas innecesarias.
  - Utilicé template literals (``) en lugar de .concat para hacer el código más legible.
  - Añadí la funcionalidad que permite mostrar los dominios generados también en pantalla, no solo en la consola.
  - Mantuve la lógica original del proyecto respetando su estructura, solo aplicando buenas prácticas aprendidas.
*/


window.onload = function() {
  const dominios = generarDominios();
  const lista = document.getElementById("lista-dominios");

  for (const dominio of dominios) {
    console.log(dominio);

    const li = document.createElement("li");
    li.textContent = dominio;
    lista.appendChild(li);
  }
};
function generarDominios() {
  let pronouns = ['the', 'our'];
  let adjs = ['great', 'big'];
  let nouns = ['jogger', 'racoon'];
  let dominios = [];

  for (let pronounPosition = 0; pronounPosition < pronouns.length; pronounPosition++) {
    for (let adjPosition = 0; adjPosition < adjs.length; adjPosition++) {
      for (let nounPosition = 0; nounPosition < nouns.length; nounPosition++) {
        dominios.push(`${pronouns[pronounPosition]}${adjs[adjPosition]}${nouns[nounPosition]}.com`);


      }
    }
  }

  return dominios;
}