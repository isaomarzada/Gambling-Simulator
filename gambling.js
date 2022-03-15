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
let greenCounter = 0
let redCounter = 0;
let clicked;
var array = [squareOne, squareTwo, squareThree, squareFour, squareFive, squareSix, squareSeven, squareEight, squareNine];
let didLose;
center.style.display = "none";

function enterAmount(){
  var formContent = document.getElementById('amount-input');
  formContent.innerHTML = "";
  gamblingAmountText.innerHTML = gamblingAmount.value;
  reset();
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
    array[i].value.clicked = "yes";
    if (array[i].value.status == "bomb") {
      array[i].style.background = "red";
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



/* function bombClicked () {
  for (let i = 0; i < array.length; i++) {
    array[i].addEventListener("click", () => {
      if (array[i].value == "bomb") {
        array[i].style.background = "red";
        redCounter++;
        didLose = true
      }
      else{
        array[i].style.background = "green";
        greenCounter++;
        didLose = false;
      }
    })
  }
  if (greenCounter < 4 && redCounter < 1) {
    bombClicked();
  }
  else {
    setTimeout(function(){
        modifyGamblingAmount();
        reset();
    }, 2000);
  }
  /*  for (let i = 0; i < array.length; i++) {
      array[i].style.pointerEvents = "none";
    }
    if (didLose == true) {
      gamblingAmount.value = parseInt(gamblingAmount.value) - 50;
    }
    else {
      gamblingAmount.value = parseInt(gamblingAmount.value) + 50;                   //problem is with the scoping. That is why score count was getting messed up.
    }
    gamblingAmountText.innerHTML = gamblingAmount.value;
    setTimeout(function(){
        newGame();
        array[random].value = "notBomb";
    }, 2000);
  } */
