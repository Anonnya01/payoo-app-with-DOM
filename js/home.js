//------------Get input values for add money ----------//
const validPin = 1234;
const validOutPin = 2222;
const transaction = []

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

// -------------toggle function---------//

function toggleBox(id) {
  const form = document.getElementsByClassName("forms");

  for (const box of form) {
    box.style.display = "none";
  }
  document.getElementById(id).style.display = "block";
}

// -----function---toggle for CARD-----//
function toggleCard(id) {
  const fromButton = document.getElementsByClassName("form-btn");

  for (const btn of fromButton) {
    btn.classList.remove("border-[#0874F2]", "bg-[#0874F20D]");
    btn.classList.add("border-gray-300");
  }
  document.getElementById(id).classList.remove("border-gray-300");
  document
    .getElementById(id)
    .classList.add("border-[#0874F2]", "bg-[#0874F20D]");
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

    // ----------transaction-----------//
      const data ={
        name: "Add Money",
        date:new Date().toLocaleTimeString()
      }
      transaction.push(data)
      console.log(transaction);
  });
// --------------------------End---------------------//


// -------------CASH OUT features----------//

document.getElementById("btn-cashout").addEventListener("click", function (e) {
  e.preventDefault();

  const outNumber = document.getElementById("out-number").value;
  const amount = getInputNum("amount-withdraw");
  const bankOutPin = getInputNum("out-pin");
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

  // --------subtraction---------//

  const newAvailableCash = availableBalance - amount;

  getUpdatedText(newAvailableCash);

   // ----------transaction-----------//
      const data ={
        name: "Cash Out Money",
        date:new Date().toLocaleTimeString()
      }
      transaction.push(data)

      console.log(transaction);
      
});


// ------------transaction features----------//
document.getElementById("transaction-card")
.addEventListener('click',function () {
  
  const dataView= document.getElementById("transaction-output")

  dataView.innerHTML =""
  for(const data of transaction){
    const div = document.createElement("div")
    div.innerHTML =`
     <div class="flex items-center justify-between p-4 mb-4 bg-white border-gray-300 border-1 rounded-xl">
            
            <div class="flex items-center gap-3">
              
             <div class="bg-[#0808080D] rounded-full p-3">
               <img src="assets/wallet1.png" alt="">
              </div>
             <div><h1 class="font-semibold">${data.name}</h1>
              <p class="text-[14px] text-[#08080880]">${data.date}</p>
            </div>
           
            </div>
            <div>
              <img src="assets/Frame.png" alt="">
            </div>
          </div>
    `

    dataView.appendChild(div)
  }
  
})


// ------------------End------------//


// ---------------toggle with reused function-----------//


// -------Add-card-----------//

document.getElementById("add-card").addEventListener("click", function () {

  toggleBox("add-money-box");

  toggleCard("add-card");
});

// --------cash out-----------//

document.getElementById("cashout-card").addEventListener("click", function () {

  toggleBox("cashout-box");

  toggleCard("cashout-card");
});

// -------------transfer------//

document.getElementById("transfer-card").addEventListener("click", function () {

  toggleBox("transfer-box");

  toggleCard("transfer-card");
});

// -------bonus-----------//

document.getElementById("bonus-card").addEventListener("click", function () {

  toggleBox("bonus-box");

  toggleCard("bonus-card");
});

// -------------bill-----------//

document.getElementById("bill-card").addEventListener("click", function () {

  toggleBox("pay-bill-box");

  toggleCard("bill-card");
});

// -----------transaction-------------//

document.getElementById("transaction-card").addEventListener("click", function () {

  toggleBox("transaction-box");

  toggleCard("transaction-card");
});
