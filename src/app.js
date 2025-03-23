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
  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];
  let dominios = [];

  for (let pr = 0; pr < pronoun.length; pr++) {
    for (let ad = 0; ad < adj.length; ad++) {
      for (let nou = 0; nou < noun.length; nou++) {
          dominios.push(pronoun[pr].concat(adj[ad]).concat(noun[nou]).concat(".com").concat("\n"))
      }
    }
  }

  return dominios;
}