var squareOne = document.getElementById('square-one');
var squareTwo = document.getElementById('square-two');
var squareThree = document.getElementById('square-three');
var squareFour = document.getElementById('square-four');
var squareFive = document.getElementById('square-five');
var squareSix = document.getElementById('square-six');
var squareSeven = document.getElementById('square-seven');
var squareEight = document.getElementById('square-eight');
var squareNine = document.getElementById('square-nine');
var gamblingAmountText = document.getElementById('amount-left');
var gamblingAmount = document.getElementById('gambling-amount');
var center = document.getElementById('main-div');
const formInput = document.getElementById('amount-input');
const errorMessage = document.getElementById('error');
const submitButton = document.getElementById('submit-btn');
const restartButton = document.getElementById('restart-button');
let greenCounter = 0;
let redCounter = 0;
let clicked;
var array = [squareOne, squareTwo, squareThree, squareFour, squareFive, squareSix, squareSeven, squareEight, squareNine];
let didLose;
var clickSound;
var loseSound;
var winSound;
center.style.display = "none";
restartButton.style.display = "none";


submitButton.addEventListener('click', (e) => {
  let messages = [];
  if (gamblingAmount.value == NaN || gamblingAmount.value == "" || gamblingAmount.value <= 0) {
    e.preventDefault();
    messages.push("Oops, you have to enter a positive number");
    errorMessage.innerText = messages.join(', ');
  }
  else {
    errorMessage.innerText = "";
    formInput.style.display = "none";
    gamblingAmountText.innerHTML = gamblingAmount.value;
    reset();
  }
})

restartButton.addEventListener('click', () => {
  restartButton.style.display = "none";
  errorMessage.style.display = "none";
  formInput.reset();
  formInput.style.display = "block";
})

function enterAmount(){
  let messages = [];
  if (gamblingAmount.value == NaN || gamblingAmount.value == "") {
    e.preventDefault();
    messages.push("Oops, you have to enter a number");
    errorMessage.innerText = messages.join(', ');
  }
  else {
  //  formInput.innerHTML = "";
    gamblingAmountText.innerHTML = gamblingAmount.value;
    errorMessage.innerText = "";
    reset();
  }
}

function hoverOne() {
  squareOne.style.backgroundColor = "yellow";
}

function notHoverOne() {
  if (squareOne.value.clicked == "no") {
  squareOne.style.backgroundColor = "#1E1E1E";
  }
  else {
    if (squareOne.value.status == "bomb") {
      squareOne.style.backgroundColor = "red";
    }
    else {
      squareOne.style.backgroundColor = "green";
    }
  }
}

function hoverTwo() {
  squareTwo.style.backgroundColor = "yellow";
}

function notHoverTwo() {
  if (squareTwo.value.clicked == "no") {
  squareTwo.style.backgroundColor = "#1E1E1E";
  }
  else {
    if (squareTwo.value.status == "bomb") {
      squareTwo.style.backgroundColor = "red";
    }
    else {
      squareTwo.style.backgroundColor = "green";
    }
  }
}

function hoverThree() {
  squareThree.style.backgroundColor = "yellow";
}

function notHoverThree() {
  if (squareThree.value.clicked == "no") {
  squareThree.style.backgroundColor = "#1E1E1E";
  }
  else {
    if (squareThree.value.status == "bomb") {
      squareThree.style.backgroundColor = "red";
    }
    else {
      squareThree.style.backgroundColor = "green";
    }
  }
}

function hoverFour() {
  squareFour.style.backgroundColor = "yellow";
}

function notHoverFour() {
  if (squareFour.value.clicked == "no") {
  squareFour.style.backgroundColor = "#1E1E1E";
  }
  else {
    if (squareFour.value.status == "bomb") {
      squareFour.style.backgroundColor = "red";
    }
    else {
      squareFour.style.backgroundColor = "green";
    }
  }
}

function hoverFive() {
  squareFive.style.backgroundColor = "yellow";
}

function notHoverFive() {
  if (squareFive.value.clicked == "no") {
  squareFive.style.backgroundColor = "#1E1E1E";
  }
  else {
    if (squareFive.value.status == "bomb") {
      squareFive.style.backgroundColor = "red";
    }
    else {
      squareFive.style.backgroundColor = "green";
    }
  }
}

function hoverSix() {
  squareSix.style.backgroundColor = "yellow";
}

function notHoverSix() {
  if (squareSix.value.clicked == "no") {
  squareSix.style.backgroundColor = "#1E1E1E";
  }
  else {
    if (squareSix.value.status == "bomb") {
      squareSix.style.backgroundColor = "red";
    }
    else {
      squareSix.style.backgroundColor = "green";
    }
  }
}

function hoverSeven() {
  squareSeven.style.backgroundColor = "yellow";
}

function notHoverSeven() {
  if (squareSeven.value.clicked == "no") {
  squareSeven.style.backgroundColor = "#1E1E1E";
  }
  else {
    if (squareSeven.value.status == "bomb") {
      squareSeven.style.backgroundColor = "red";
    }
    else {
      squareSeven.style.backgroundColor = "green";
    }
  }
}

function hoverEight() {
  squareEight.style.backgroundColor = "yellow";
}

function notHoverEight() {
  if (squareEight.value.clicked == "no") {
  squareEight.style.backgroundColor = "#1E1E1E";
  }
  else {
    if (squareEight.value.status == "bomb") {
      squareEight.style.backgroundColor = "red";
    }
    else {
      squareEight.style.backgroundColor = "green";
    }
  }
}

function hoverNine() {
  squareNine.style.backgroundColor = "yellow";
}

function notHoverNine() {
  if (squareNine.value.clicked == "no") {
  squareNine.style.backgroundColor = "#1E1E1E";
  }
  else if (squareNine.value.clicked == "yes") {
    if (squareNine.value.status == "bomb") {
      squareNine.style.backgroundColor = "red";
    }
    else {
      squareNine.style.backgroundColor = "green";
    }
  }
}

function reset() {
  if (gamblingAmount.value <= 0) {
    center.style.display = "none";
    errorMessage.innerHTML = "Uh-Oh, you're all out of money";
    errorMessage.style.display = "block";
    restartButton.style.display = "block";
    gamblingAmountText.innerHTML = "";
  }
  else {
    clickSound = new sound("zapsplat_multimedia_button_click_fast_plastic_49161.mp3");
    loseSound = new sound("187502__waveplaysfx__sfx-hit-drop-bomb-effect-5.wav");
    winSound = new sound("75235__creek23__cha-ching.wav");
    restartButton.style.display = "none";
    center.style.display = "block";
    didLose = false;
    gamblingAmountText.innerHTML = gamblingAmount.value;
    for (let i = 0; i < array.length; i++) {
      array[i].value = {
        status: "notBomb",
        clicked: "no"
      };
    }
    let random = Math.floor(Math.random() * 9);
    array[random].value.status = "bomb";
    console.log("square " + random + " is the bomb square.")
    for (let i = 0; i < array.length; i++) {
      array[i].style.pointerEvents = "auto";
      array[i].style.background = "#1E1E1E";
    }
    greenCounter = 0;
    redCounter = 0;
  }
}

function sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function(){
    this.sound.play();
  }
  this.stop = function(){
    this.sound.pause();
  }
}

function modifyGamblingAmount() {
    if (didLose == true) {
      gamblingAmount.value = parseInt(gamblingAmount.value) - 50;
    }
    else {
      gamblingAmount.value = parseInt(gamblingAmount.value) + 50;
    }
}

for (let i = 0; i < array.length; i++) {
  array[i].addEventListener("click", () => {
    if (array[i].value.status !== "bomb") {
      clickSound.play();
    }
    array[i].value.clicked = "yes";
    if (array[i].value.status == "bomb") {
      array[i].style.background = "red";
      loseSound.play();
      redCounter++;
      didLose = true
      if (greenCounter >= 4 || redCounter >= 1) {
        for (let i = 0; i < array.length; i++) {
          array[i].style.pointerEvents = "none";
        }
        setTimeout(function(){
            modifyGamblingAmount();
            reset();
        }, 800);
      }
    }
    else{
      array[i].style.background = "green";
      greenCounter++;
      didLose = false;
      if (greenCounter >= 4 || redCounter >= 1) {
        winSound.play();
        for (let i = 0; i < array.length; i++) {
          array[i].style.pointerEvents = "none";
        }
        setTimeout(function(){
            modifyGamblingAmount();
            reset();
        }, 800);
      }
    }
  })
}
