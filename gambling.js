var squareOne = document.getElementById('square-one');
var squareTwo = document.getElementById('square-two');
var squareThree = document.getElementById('square-three');
var squareFour = document.getElementById('square-four');
var squareFive = document.getElementById('square-five');
var squareSix = document.getElementById('square-six');
var squareSeven = document.getElementById('square-seven');
var squareEight = document.getElementById('square-eight');
var squareNine = document.getElementById('square-nine');
var array = [squareOne, squareTwo, squareThree, squareFour, squareFive, squareSix, squareSeven, squareEight, squareNine];

function enterAmount(){
  var gamblingAmountText = document.getElementById('amount-left');
  var gamblingAmount = document.getElementById('gambling-amount');
  var formContent = document.getElementById('amount-input');

  formContent.innerHTML = "";
  console.log(gamblingAmount.value);

  gamblingAmountText.innerHTML = gamblingAmount.value;
}

function bombSquare() {
  var random = Math.floor(Math.random() * 9) + 1;
  console.log(random);
}

function newRound() {
  var isBombSquare;
  var random = Math.floor(Math.random() * 9) + 1;
  for (let i = 1; i <= 9; i++) {
    array[i] = i;

  }
  for (let i = 1; i <= 9; i++) {
    if (array[i] == random) {
      array[i] = "bombSquare";
    }

  }

}

bombSquare();
