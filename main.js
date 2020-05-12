'use strict';

window.onload = function() {
  getCharacters();
}

const getUsers = () => {
  fetch('https://www.anapioficeandfire.com/api/houses)
    .then(response => { return response.json();})
    .then(json => {houses(json.results)});
}

const houses = (res) =>{
  console.log(res);
  // let output = '<h2>Address Book</h2>';
  // output += '<section class="userList">'
  // people.forEach((contact, idx) =>{
  //   userId = idx;
  //   output +=
  //   `<div class="card" id="card${userId}">
  //     <div class="thumbnail">
  //       ${contact.login.username}<br>
  //       <img src="${contact.picture.large}">
  //     </div>
  //     <div class="moreInfo" id="info${userId}" style="display: none">
  //       <strong>${contact.name.first} ${contact.name.last}<br></strong>
  //       Age: ${contact.dob.age}<br>
  //       Birthday: ${contact.dob.date}<br>
  //       Email: ${contact.email}<br>
  //       Phone: ${contact.phone}<br>
  //       Address: ${contact.location.street.number} ${contact.location.street.name}<br>
  //       ${contact.location.city}, ${contact.location.state} ${contact.location.postcode}<br>
  //     </div>
  //     <div class="btn">
  //       <button onclick="toggleBtn(${userId})">Say hi to ${contact.name.first}</button>
  //     </div>
  //   </div>`;
  // })
  // output += '</section>';
  // document.getElementById("main").innerHTML = output;
  // evenOrOdd();
  // toggleBtn();
  } 