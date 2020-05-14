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

  div.classList.add('fade')
  div.classList.add('name');
  p.className = 'hidden';
  p.innerHTML = house.name;
  
  div.appendChild(p);
  section.appendChild(div);
}


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

