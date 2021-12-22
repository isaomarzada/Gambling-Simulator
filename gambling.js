function enterAmount(){
  var gamblingAmountText = document.getElementById('amount-left');
  var gamblingAmount = document.getElementById('gambling-amount');
  var formContent = document.getElementById('amount-input');

  formContent.innerHTML = "";
  console.log(gamblingAmount.value);

  gamblingAmountText.innerHTML = gamblingAmount.value;
}
