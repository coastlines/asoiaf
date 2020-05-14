'use strict';

window.onload = function() {
  getHouse()
}

const getHouse = () => {
 // the promise 
      fetch('https://www.anapioficeandfire.com/api/houses?pageSize=8&hasWords=true')
 //  with the promise, we want to do this 
    .then(response => { 
      return response.json()  // this is also a promise
    })
    .then(house => {
      house.forEach(nameDiv);
      house.forEach(wordsDiv);
    })
}


let nameDiv= function(house) {
  let section = document.getElementById("main");

  let div = document.createElement("div");
  let p = document.createElement("p");

  div.className = 'name';
  p.className = 'hidden';
  p.innerHTML = house.name;
  
  div.appendChild(p);
  section.appendChild(div);
}


let wordsDiv= function(house) {
  let section = document.getElementById("main");
 
  let div = document.createElement("div");
  let p = document.createElement("p");

  div.className = 'words';
  p.className = 'hidden';
  p.innerHTML = house.words;

  div.appendChild(p);
  section.appendChild(div);
}


const randomize = () => {
  let div = document.querySelectorAll('div');
  let p = document.querySelectorAll('p');
  let divArray = Array.from(div);
  let pArray = Array.from(p);

  for (let i = 0; i < divArray.length; i++) {
    let target = Math.floor(Math.random() * divArray.length -1) + 1;
    let target2 = Math.floor(Math.random() * divArray.length -1) +1;
    divArray[target].before(divArray[target2]);
    pArray[i].classList.remove('hidden');
  }

  selectDiv(divArray)
}

const selectDiv = (divs) => {
let selectCount = 0;
let div =  document.querySelectorAll('div');
let select =  document.querySelectorAll('.select');
let divArray = Array.from(div);
  
for (let i = 0; i < divArray.length; i++) {
  if ( selectCount < 2) {
    divArray[i].addEventListener('click', () => {
      console.log("spread add forEach worked");
      divArray[i].classList.add('select');
    })
  }
}
}
//unSelectDiv(div)





// let div = [...divs].forEach((div) => {
  
//   if (selectCount < 0) {

//     div.addEventListener('click', () => {
//       console.log("spread add forEach worked");
//       div.classList.add('select');
//       selectCount++;
//     })
//   }


// })

// const unSelectDiv = (div) => {
//   div.addEventListener('click', () => {
//     console.log("spread add forEach worked");
//     div.classList.remove('select');
//   });
//   }

// const selectDiv = () => {
// // cards array holds all cards
// let card = document.getElementsByTagName('div');
// let cards = [...card];
// // loop to add event listeners to each card
// for (var i = 0; i < cards.length; i++){
//   cards[i].addEventListener("click", displayCard);
//   console.log(card);
// };

// var displayCard = function (){
//   this.classList.toggle("open");
//   this.classList.toggle("show");
//   this.classList.toggle("disabled");
// };

// }

// // Fisher-Yates (aka Knuth) Shuffle
// function shuffle(array) {
//   var currentIndex = array.length, temporaryValue, randomIndex;

//   while (currentIndex !== 0) {
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex -= 1;
//     temporaryValue = array[currentIndex];
//     array[currentIndex] = array[randomIndex];
//     array[randomIndex] = temporaryValue;
//   }
//   return array;
// }


// // deck of all cards in game
// const deck = document.querySelector(".deck");
// function startGame(){
//    var shuffledCards = shuffle(cards);
//    for (var i= 0; i < shuffledCards.length; i++){
//       [].forEach.call(shuffledCards, function(item){
//          deck.appendChild(item);
//       });
//    }
// }

//window.onload = startGame(cards);



//displayCard is a function we'll talk about this soon

  //let divArray = Array.from(div);

//   var $cols = $('.divs').click(function(e) {
//     $cols.removeClass(addclass);
//     $(this).addClass(addclass);
//   });
// }


//   document.getElementById("Save").onclick = function fun() {
//       alert("hello");
//       f1();
//       //validation code to see State field is mandatory.  
//   }
