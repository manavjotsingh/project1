document.addEventListener("DOMContentLoaded", function () { //COMPLETE WRAP BEGINNING


// getting the message for submitting the email. first try*****************

const messageForm = document.getElementById('emailform');

const eMail = document.getElementById('youremail');

messageForm.addEventListener('submit', function(event) {
event.preventDefault();

const submittedEmail = eMail.nodeValue;

if (submittedEmail !== "") {
  alert ("Thanks for subscribing!");
}
});


// getting the message for submitting the email. first try*****************







// cart counter

let clicks = 0;


const clickCount = document.getElementById ('clickcount');

clickCount.innerHTML = "";

const cartClick = document.getElementsByClassName ('tocart')[0];
cartClick.addEventListener('click', function evovle(){
  clicks++;
  clickCount.innerHTML = clicks;
})

const cartClick1 = document.getElementsByClassName ('tocart')[1];
cartClick1.addEventListener('click', function evovle(){
  clicks++;
  clickCount.innerHTML = clicks;
})

const cartClick2 = document.getElementsByClassName ('tocart')[2];
cartClick2.addEventListener('click', function evovle(){
  clicks++;
  clickCount.innerHTML = clicks;
})
const cartClick3 = document.getElementsByClassName ('tocart')[3];
cartClick3.addEventListener('click', function evovle(){
  clicks++;
  clickCount.innerHTML = clicks;
})
const cartClick4 = document.getElementsByClassName ('tocart')[4];
cartClick4.addEventListener('click', function evovle(){
  clicks++;
  clickCount.innerHTML = clicks;
})
const cartClick5 = document.getElementsByClassName ('tocart')[5];
cartClick5.addEventListener('click', function evovle(){
  clicks++;
  clickCount.innerHTML = clicks;
})
const cartClick6 = document.getElementsByClassName ('tocart')[6];
cartClick6.addEventListener('click', function evovle(){
  clicks++;
  clickCount.innerHTML = clicks;
})
const cartClick7 = document.getElementsByClassName ('tocart')[7];
cartClick7.addEventListener('click', function evovle(){
  clicks++;
  clickCount.innerHTML = clicks;
})
}); //COMPLETE WRAP END