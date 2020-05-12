'use strict';

window.onload = function() {
  getHouse();
  console.log("hello!")
}

const getHouse = () => {
  fetch('https://www.anapioficeandfire.com/api/houses')
    .then(response => { 
      console.log("Fetch is done! response =", response)
      return response.json()
    })
    .then(data => {
      console.log("Got my data! data =", data.length)
      data.forEach(updateHtml);
    })
}

