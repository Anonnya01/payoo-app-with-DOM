//------ login button function-------//

document.getElementById("login-btn").addEventListener("click", function (e) {
  e.preventDefault();
  const mobileNum = 1712997051;
  const pinNum = 1234;

  //-------for number get value and convert--------//

  const mobileNumValuev = document.getElementById("input-num").value;
  const mobileNumConvertion = parseInt(mobileNumValuev);

  //---------for pin get value and convert----------//

  const pinNumValuev = document.getElementById("input-pin").value;
  const pinNumConvertion = parseInt(pinNumValuev);

  if (mobileNumConvertion === mobileNum && pinNumConvertion === pinNum) {
    window.location.href = "./home.html";
  } else {
    // console.log("Wrong info");
    alert("Wrong info");
  }
});
