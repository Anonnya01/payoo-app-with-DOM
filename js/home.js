//------------Get input values----------//
const validPin =1234;

document
  .getElementById("btn-add-money")
  .addEventListener("click", function (e) {
    e.preventDefault();
    console.log("clicked");
    const banks = document.getElementById("select-bank").value;
    const accountNum = document.getElementById("bank-number").value;
    const addedAmount = parseInt(document.getElementById("amount-added").value);
    const bankPin = parseInt(document.getElementById("bank-pin").value)

    const availableCash = parseInt(
      document.getElementById("available-cash").innerText
    );

    // -------conditions for checking-------//
    if (accountNum.length < 11 ) {
      alert("Enter Correct Number");
      return;
    }
    if( bankPin !== validPin){
    alert("Enter Correct Pin");
      return;
    }

    console.log(banks, accountNum, addedAmount, bankPin, availableCash);

    //  --------amount after addition-----//
    const newAmountBalance = addedAmount + availableCash;
    document.getElementById("available-cash").innerText = newAmountBalance;
  });
