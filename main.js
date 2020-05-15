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

// create house name divs
// hide paragraph text + display opening div color
let nameDiv= function(house) {
  let section = document.getElementById("main");

  let div = document.createElement("div");
  let p = document.createElement("p");

  div.classList.add('fade')
  div.classList.add('name');
  p.className = 'hidden';
  p.innerHTML = house.name;
  
  div.appendChild(p);
  section.appendChild(div);
}

// create house words divs
// hide paragraph text + display opening div color
let wordsDiv= function(house) {
  let section = document.getElementById("main");
 
  let div = document.createElement("div");
  let p = document.createElement("p");

  div.classList.add('fade');
  div.classList.add('words');
  p.className = 'hidden';
  p.innerHTML = house.words;

  div.appendChild(p);
  section.appendChild(div);
}

// randomize the order of all of the divs
// display paragraph text + house and name div colors
const randomize = () => {
  let div = document.querySelectorAll('div');
  let divArray = Array.from(div);
  let words = document.querySelectorAll('.words');
  let name = document.querySelectorAll('.name');
  let p = document.querySelectorAll('p');
  let pArray = Array.from(p);

 

  for (let i = 0; i < divArray.length; i++) {
    let target = Math.floor(Math.random() * divArray.length -1) + 1;
    let target2 = Math.floor(Math.random() * divArray.length -1) +1;
    divArray[target].before(divArray[target2]);
    pArray[i].classList.remove('hidden');
    divArray[i].classList.remove('fade');
  }
  selectDiv(divArray)
}

// selected div is given a new color
// next step: limit selection to two divs at any time
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

// next step: check for a match between pairs of selected house and word divs
// next step: if the selected pair is correct, remove the pair
// next step: if the selected pair is incorrect, animate the second div to show it is not a match
// next step: add a button to restart or start a new game
// next step: win screen
