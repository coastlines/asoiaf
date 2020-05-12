'use strict';

let isAlive = {}
let isDead = {}

window.onload = function() {
  getAlive()
  getDead()
  console.log("hello!")
}

const getAlive = () => {
  fetch('https://www.anapioficeandfire.com/api/characters?page=1&pageSize=2&isAlive=true')
    .then(response => { 
      console.log("Fetch is done! response =", response)
      return response.json()
    })
    .then(alive => {
      console.log("Got my data! alive=", alive.length)
      //data.forEach(updateHtml);
      alive.forEach(quiz);
      alive => isAlive = alive
    })
}

const getDead = () => {
  fetch('https://www.anapioficeandfire.com/api/characters?page=1&pageSize=2&isAlive=false')
    .then(response => { 
      console.log("Fetch is done! response =", response)
      return response.json()
    })
    .then(dead => {
      console.log("Got my data! dead =", dead.length)
      dead.forEach(quiz);
      dead => isDead = dead
    })
}


let quiz = function(quizInput) {
  console.log("Adding quiz html for ", quizInput);

}


// let updateHtml = function(house) {
//   console.log("Updating the html for post = ", house);
//   let postsUl = document.getElementById("posts");

//   let postLi = document.createElement("li");
//   postLi.innerText = house.coatOfArms;
//   postsUl.appendChild(postLi);

//   let name = house.name;
//   let userSpan = document.createElement("span");
//   userSpan.innerText = "    -  by"+ name;
//   postLi.appendChild(userSpan);

//   fetch("https://www.anapioficeandfire.com/api/houses"+name)
//   .then(function(response) {
//     return response.json()
//   })
//   .then(function(data) {
//     gotHouse[name] = data;
//     userSpan.innerText = "    -  by"+ data.name;
//   })
  
// }