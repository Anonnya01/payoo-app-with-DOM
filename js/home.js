//------------Get input values for add money ----------//
const validPin = 1234;
const validOutPin = 2222;

// ------reuse function--Convert to num--//

function getInputNum(id) {
  const inputField = document.getElementById(id);
  const inputFieldValue = inputField.value;
  const intValue = parseInt(inputFieldValue);
  return intValue;
}

//-----reuse function--get input--//
function getInputValues(id) {
  const inputField = document.getElementById(id);
  const inputFieldValue = inputField.value;
  return inputFieldValue;
}

// ------inner text----------//
function getInnerText(id) {
  const element = document.getElementById(id);
  const elementVal = element.innerText;
  const elementValueNum = parseInt(elementVal);
  return elementValueNum;
}

//  -------update inner text-------//

function getUpdatedText(value) {
  const finalCash = document.getElementById("available-cash");
  finalCash.innerText = value;
}

// ---------ADD MONEY------//
document
  .getElementById("btn-add-money")
  .addEventListener("click", function (e) {
    e.preventDefault();
    console.log("clicked");
    const banks = getInputValues("select-bank");
    const accountNum = document.getElementById("bank-number").value;
    const addedAmount = getInputNum("amount-added");

    const bankPin = getInputNum("bank-pin");

    const availableCash = getInnerText("available-cash");

    // -------conditions for checking-------//
    if (accountNum.length < 11) {
      alert("Enter Correct Number");
      return;
    }
    if (bankPin !== validPin) {
      alert("Enter Correct Pin");
      return;
    }

    console.log(banks, accountNum, addedAmount, bankPin, availableCash);

    //  --------amount after addition-----//
    const newAmountBalance = addedAmount + availableCash;

    getUpdatedText(newAmountBalance);
  });
// --------------------------End---------------------//

// -------------cash out features----------//

document.getElementById("btn-cashout").addEventListener("click", function (e) {
  e.preventDefault();

  const outNumber = document.getElementById("out-number").value;
  const amount = getInputNum("amount-withdraw");
  const bankOutPin = parseInt(document.getElementById("out-pin").value);
  const availableBalance = getInnerText("available-cash");

  // -------conditions for checking-------//
  if (outNumber.length < 11) {
    alert("Enter Correct Number");
    return;
  }
  if (bankOutPin !== validOutPin) {
    alert("Enter Correct Pin");
    return;
  }

  console.log(amount, availableBalance);
  const newAvailableCash = availableBalance - amount;

  getUpdatedText(newAvailableCash);
});

// ------------------End------------//

//  --------toggling Features------------//

document.getElementById("add-card").addEventListener("click", function () {
  document.getElementById("cashout-box").style.display = "none";
  document.getElementById("add-money-box").style.display = "block";
});
document.getElementById("cashout-card").addEventListener("click", function () {
  document.getElementById("add-money-box").style.display = "none";
  document.getElementById("cashout-box").style.display = "block";
});
