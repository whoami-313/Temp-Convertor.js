let body, randomIndex, mainBox, convert, reset, change, tempInput, tempInputValue, btnBox, result,title, flag

flag = true;
body = document.querySelector("#body");
convert = document.querySelector("#convert");
reset = document.querySelector("#reset");
change = document.querySelector("#change");
title = document.querySelector("#title");
tempInput = document.querySelector("#input");
btnBox = document.querySelector(".btns");
result = document.querySelector("#result");

function errorAlert() {
  Swal.fire ({
    icon: "error",
    title: "Oops ... !",
    html: "<h1>Invalid input</h1><h2>Please try again ...</h2>"
  });
}

function changeBTN() {
  if (flag) {
    document.title = "°F to °C";
    result.innerHTML = "";
    btnBox.style.margin = "136px auto 0";
    title.innerHTML = '" Covert °F to °C "';
    tempInput.placeholder = "°F to °C";
    tempInput.value = "";
    flag = false;
  }
  else {
    document.title = "°C to °F";
    result.innerHTML = "";
    btnBox.style.margin = "136px auto 0";
    title.innerHTML = '" Covert °C to °F "';
    tempInput.value = "";
    tempInput.placeholder = "°C to °F";
    flag = true;
  }
}


function convertBTN() {
  
  tempInputValue = document.querySelector("#input").value;
  btnBox = document.querySelector(".btns");
  result = document.querySelector("#result");
  
  if (!isNaN(tempInputValue) && flag === true && tempInputValue !== "") {
    let CtoF = (tempInputValue * 1.8 + 32);
    result.innerHTML = tempInputValue + "°C = " + CtoF + "°F";
    btnBox.style.margin = "50px auto 0";
  }
  else if (!isNaN(tempInputValue) && flag === false && tempInputValue !== "") {
    let FtoC = (tempInputValue - 32) / 1.8;
    result.innerHTML = tempInputValue + "°F = " + FtoC + "°C";
    btnBox.style.margin = "50px auto 0";
  } else {
    errorAlert();
  }
}

function resetBTN() {

  tempInput = document.querySelector("#input");
  btnBox = document.querySelector(".btns");
  result = document.querySelector("#result");

  result.innerHTML = "";
  btnBox.style.margin = "136px auto 0";
  tempInput.value = "";
}

function randomBackground() {
  backgrounds = [
    "url(../images/pic1.jpg)",
    "url(../images/pic2.jpg)",
    "url(../images/pic3.jpg)",
    "url(../images/pic4.jpg)",
    "url(../images/pic5.jpg)",
    "url(../images/pic6.jpg)",
    "url(../images/pic7.jpg)",
    "url(../images/pic8.jpg)",
    "url(../images/pic9.jpg)",
    "url(../images/pic10.jpg)",
  ];
  
  randomIndex = Math.floor(Math.random() * backgrounds.length);
  body.style.backgroundImage = backgrounds[randomIndex]
  body.style.transition = "background-image 1s ease-in-out";
}

convert.addEventListener("click", convertBTN);
change.addEventListener("click", changeBTN)
reset.addEventListener("click", resetBTN);
setInterval (randomBackground, 5000);