//------------Get input values for add money ----------//
const validPin = 1234;

document
  .getElementById("btn-add-money")
  .addEventListener("click", function (e) {
    e.preventDefault();
    console.log("clicked");
    const banks = document.getElementById("select-bank").value;
    const accountNum = document.getElementById("bank-number").value;
    const addedAmount = parseInt(document.getElementById("amount-added").value);
    const bankPin = parseInt(document.getElementById("bank-pin").value);

    const availableCash = parseInt(
      document.getElementById("available-cash").innerText
    );

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
    document.getElementById("available-cash").innerText = newAmountBalance;
  });
// --------------------------End---------------------//

// -------------cash out features----------//

document.getElementById("btn-cashout").addEventListener("click", function (e) {
  e.preventDefault();

  const amount = parseInt(
    document.getElementById("amount-withdraw").value
  );
  const availableBalance = parseInt(
    document.getElementById("available-cash").innerText
  );
  console.log(amount, availableBalance);
  const newAvailableCash = availableBalance - amount
  document.getElementById("available-cash").innerText = newAvailableCash;
  
});

//  --------toggling Features------------//

document.getElementById("add-card").addEventListener("click", function () {
  document.getElementById("cashout-box").style.display = "none";
  document.getElementById("add-money-box").style.display = "block";
});
document.getElementById("cashout-card").addEventListener("click", function () {
  document.getElementById("add-money-box").style.display = "none";
  document.getElementById("cashout-box").style.display = "block";
});
