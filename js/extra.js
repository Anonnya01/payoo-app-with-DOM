//  --------toggling Features------------//

// document.getElementById("add-card").addEventListener("click", function () {
//     document.getElementById("add-money-box").style.display = "block";
//   document.getElementById("cashout-box").style.display = "none";
//    document.getElementById("bonus-box").style.display = "none";
//   document.getElementById("transfer-box").style.display = "none";
//    document.getElementById("pay-bill-box").style.display = "none";
// });

// document.getElementById("cashout-card").addEventListener("click", function () {
//     document.getElementById("cashout-box").style.display = "block";
//   document.getElementById("add-money-box").style.display = "none";
//   document.getElementById("transfer-box").style.display = "none";
//    document.getElementById("bonus-box").style.display = "none";
//     document.getElementById("pay-bill-box").style.display = "none";
// });

// document.getElementById("transfer-card").addEventListener("click", function () {
//     document.getElementById("transfer-box").style.display = "block";
//   document.getElementById("add-money-box").style.display = "none";
//   document.getElementById("cashout-box").style.display = "none";
//   document.getElementById("bonus-box").style.display = "none";
//    document.getElementById("pay-bill-box").style.display = "none";
// });
// document.getElementById("bonus-card").addEventListener("click", function () {
//     document.getElementById("bonus-box").style.display = "block";
//   document.getElementById("add-money-box").style.display = "none";
//   document.getElementById("cashout-box").style.display = "none";
//   document.getElementById("transfer-box").style.display = "none";
//   document.getElementById("pay-bill-box").style.display = "none";
// });
// document.getElementById("bill-card").addEventListener("click", function () {
//     document.getElementById("pay-bill-box").style.display = "block";
//   document.getElementById("add-money-box").style.display = "none";
//   document.getElementById("cashout-box").style.display = "none";
//   document.getElementById("transfer-box").style.display = "none";
//   document.getElementById("bonus-box").style.display = "none";
// });




// ---------------toggle with reused function------------//

// document.getElementById("add-card").addEventListener("click", function () {
//   const form = document.getElementsByClassName("forms");

//   for (const box of form) {
//     box.style.display = "none";
//   }
//   document.getElementById("add-money-box").style.display = "block";
// });

// document.getElementById("cashout-card").addEventListener("click", function () {
//   const form = document.getElementsByClassName("forms");

//   for (const box of form) {
//     box.style.display = "none";
//   }
//   document.getElementById("cashout-box").style.display = "block";
// });

// document.getElementById("transfer-card").addEventListener("click", function () {
//   const form = document.getElementsByClassName("forms");

//   for (const box of form) {
//     box.style.display = "none";
//   }
//   document.getElementById("transfer-box").style.display = "block";
// });

// document.getElementById("bonus-card").addEventListener("click", function () {
//   const form = document.getElementsByClassName("forms");

//   for (const box of form) {
//     box.style.display = "none";
//   }
//   document.getElementById("bonus-box").style.display = "block";
// });

// document.getElementById("bill-card").addEventListener("click", function () {
//   const form = document.getElementsByClassName("forms");

//   for (const box of form) {
//     box.style.display = "none";
//   }
//   document.getElementById("pay-bill-box").style.display = "block";
// });



// ---------------toggle with reused function-- for card----------//

// document.getElementById("add-card").addEventListener("click", function () {
//   toggleBox("add-money-box");
//   const fromButton = document.getElementsByClassName("form-btn")
 
//   for(const btn of fromButton){
//     btn.classList.remove("border-[#0874F2]","bg-[#0874F20D]")
//     btn.classList.add("border-gray-300")
//   }
//     document.getElementById("add-card").classList.remove("border-gray-300")
//   document.getElementById("add-card").classList.add("border-[#0874F2]","bg-[#0874F20D]")
// });

// // --------cash out-----------//

// document.getElementById("cashout-card").addEventListener("click", function () {
//   toggleBox("cashout-box");

//    const fromButton = document.getElementsByClassName("form-btn")
 
//   for(const btn of fromButton){
//     btn.classList.remove("border-[#0874F2]","bg-[#0874F20D]")
//     btn.classList.add("border-gray-300")
//   }
//     document.getElementById("cashout-card").classList.remove("border-gray-300")
//   document.getElementById("cashout-card").classList.add("border-[#0874F2]","bg-[#0874F20D]")
// });

// // -------------transfer------//

// document.getElementById("transfer-card").addEventListener("click", function () {
//   toggleBox("transfer-box");

//    const fromButton = document.getElementsByClassName("form-btn")
 
//   for(const btn of fromButton){
//     btn.classList.remove("border-[#0874F2]","bg-[#0874F20D]")
//     btn.classList.add("border-gray-300")
//   }
//     document.getElementById("transfer-card").classList.remove("border-gray-300")
//   document.getElementById("transfer-card").classList.add("border-[#0874F2]","bg-[#0874F20D]")
// });

// // -------bonus-----------//

// document.getElementById("bonus-card").addEventListener("click", function () {
//   toggleBox("bonus-box");

//    const fromButton = document.getElementsByClassName("form-btn")
 
//   for(const btn of fromButton){
//     btn.classList.remove("border-[#0874F2]","bg-[#0874F20D]")
//     btn.classList.add("border-gray-300")
//   }
//     document.getElementById("bonus-card").classList.remove("border-gray-300")
//   document.getElementById("bonus-card").classList.add("border-[#0874F2]","bg-[#0874F20D]")
// });

// // -------------bill-----------//
// document.getElementById("bill-card").addEventListener("click", function () {
//   toggleBox("pay-bill-box");

//   const fromButton = document.getElementsByClassName("form-btn")
 
//   for(const btn of fromButton){
//     btn.classList.remove("border-[#0874F2]","bg-[#0874F20D]")
//     btn.classList.add("border-gray-300")
//   }
//     document.getElementById("bill-card").classList.remove("border-gray-300")
//   document.getElementById("bill-card").classList.add("border-[#0874F2]","bg-[#0874F20D]")
// });
