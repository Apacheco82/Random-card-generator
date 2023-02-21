window.onload = function randomCard() {

const topSuit = document.querySelector("#top-suit")
const numberCard = document.querySelector("#num")
const bottomSuit = document.querySelector("#bottom-suit")
const button= document.querySelector("#button")

let numbers= ["A","2","3","4","5","6","7","8","9","10","J","Q","K"]
let suits = [ "♦", "♥", "♠", "♣"]

generateCard()

function randomValueOfArray(array) {
  
let randomIndex = Math.floor(Math.random() * array.length)
return array[randomIndex]
    
  };



function generateCard(){

let paloRandom = randomValueOfArray(suits)
let numeroRandom = randomValueOfArray(numbers)
   
    numberCard.innerHTML = numeroRandom
    topSuit.innerHTML = paloRandom
    bottomSuit.innerHTML = paloRandom

    if ((paloRandom == suits[0]) || (paloRandom == suits[1]))
   {
     topSuit.style.color = "red"
    bottomSuit.style.color = "red"
    numberCard.style.color = "red"
   } 
   else {
    topSuit.style.color = "black"
    bottomSuit.style.color = "black"
    numberCard.style.color = "black"
   } 

}

button.addEventListener("click", generateCard )

setInterval(function(){
    generateCard()
}, 10000);

}
