import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  for (let index = 0; index < generarDominios().length; index++) {
    console.log(generarDominios()[index])
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
          dominios.push(pronouns[pronounPosition].concat(adjs[adjPosition]).concat(nouns[nounPosition]).concat(".com").concat("\n"))
      }
    }
  }

  return dominios;
}