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
gamblingAmount.value;
var array = [squareOne, squareTwo, squareThree, squareFour, squareFive, squareSix, squareSeven, squareEight, squareNine];
console.log(array[2]);

function enterAmount(){
  var gamblingAmountText = document.getElementById('amount-left');
  var gamblingAmount = document.getElementById('gambling-amount');
  var formContent = document.getElementById('amount-input');

  formContent.innerHTML = "";
  console.log(gamblingAmount.value);

  gamblingAmountText.innerHTML = gamblingAmount.value;
}

function bombClicked () {
  squareOne.addEventListener("click", () => {
    if (squareOne.value == "bomb") {
      squareOne.style.background = "red";
    }
    else squareOne.style.background = "green";
  })
  squareTwo.addEventListener("click", () => {
    if (squareTwo.value == "bomb") {
      squareTwo.style.background = "red";
    }
    else squareTwo.style.background = "green";
  })
  squareThree.addEventListener("click", () => {
    if (squareThree.value == "bomb") {
      squareThree.style.background = "red";
    }
    else squareThree.style.background = "green";
  })
  squareFour.addEventListener("click", () => {
    if (squareFour.value == "bomb") {
      squareFour.style.background = "red";
    }
    else squareFour.style.background = "green";
  })
  squareFive.addEventListener("click", () => {
    if (squareFive.value == "bomb") {
      squareFive.style.background = "red";
    }
    else squareFive.style.background = "green";
  })
  squareSix.addEventListener("click", () => {
    if (squareSix.value == "bomb") {
      squareSix.style.background = "red";
    }
    else squareSix.style.background = "green";
  })
  squareSeven.addEventListener("click", () => {
    if (squareSeven.value == "bomb") {
      squareSeven.style.background = "red";
    }
    else squareSeven.style.background = "green";
  })
  squareEight.addEventListener("click", () => {
    if (squareEight.value == "bomb") {
      squareEight.style.background = "red";
    }
    else squareEight.style.background = "green";
  })
  squareNine.addEventListener("click", () => {
    if (squareNine.value == "bomb") {
      squareNine.style.background = "red";
    }
    else squareNine.style.background = "green";
  })
}

function bombSquare() {
  var random = Math.floor(Math.random() * 9);
  for (let i = 0; i < 9; i++) {
    if (i === random) {
      array[i].value = "bomb";
    }
    if (array[i].value === "bomb") {
      console.log("square " + i + " is the bomb square.")
    }
    bombClicked();
  }
}

function newRound() {

  bombSquare();

}

while (gamblingAmount.value > 0) {
  newRound();
}

newRound();

if (squareOne.clicked === true) {
  console.log("clicked");
}
