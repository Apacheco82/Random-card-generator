window.onload = function randomCard() { //cada vez que la pag carga, llamamos a la funcion

const topSuit = document.querySelector("#top-suit") //guardamos en variable palo de arriba
const numberCard = document.querySelector("#num") //guardamos en variable numero
const bottomSuit = document.querySelector("#bottom-suit")//guardamos en variable palo de abajo
const button= document.querySelector("#button") //guardamos en variable el boton

let numbers= ["A","2","3","4","5","6","7","8","9","10","J","Q","K"] //array de numeros
let suits = [ "♦", "♥", "♠", "♣"] // array de palos

generateCard() //llamada a la funcion para crear una carta al arrancar la web

function randomValueOfArray(array) { //randomiza cualquier array que le pases
  
let randomIndex = Math.floor(Math.random() * array.length)// indice aleatorio de un array
return array[randomIndex] // devuelve posicion aleatoria 
    
  };



function generateCard(){ //funcion para crear cartas aleatorias

let paloRandom = randomValueOfArray(suits) //variables dentro para que cada vez que se pulse el boton randomice un num y palo nuevo
let numeroRandom = randomValueOfArray(numbers)
   
    numberCard.innerHTML = numeroRandom //se añade HTML al numero creado por el randomizador
    topSuit.innerHTML = paloRandom //se añade HTML al palo creado por el randomizador
    bottomSuit.innerHTML = paloRandom //se añade HTML al palo creado por el randomizador

    if ((paloRandom == suits[0]) || (paloRandom == suits[1])) //si son corazones o diamantes
   {
     topSuit.style.color = "red" //cambia de color el texto
    bottomSuit.style.color = "red"
    numberCard.style.color = "red"
   } 
   else { 
    topSuit.style.color = "black"
    bottomSuit.style.color = "black"
    numberCard.style.color = "black"
   } 

}

button.addEventListener("click", generateCard ) //listener del boton con llamada a la funcion, sin parentesis porque no hace falta

setInterval(function(){ //llama a la funcion que crea la carta cada 10 segundos
    generateCard()
}, 10000);

}
