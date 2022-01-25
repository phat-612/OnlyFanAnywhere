var btnOF = document.getElementById("of");
var btnNumbers = document.getElementsByClassName("number");
var btnLast = btnNumbers[2];
var checkStatus = 0;
// sự kiện click
btnOF.onclick = onOff;
setColor();
for (const btnNumber of btnNumbers) {
  btnNumber.onclick = function () {
    btnLast.style.backgroundColor = "white";
    this.style.backgroundColor = "green";
    document.getElementsByTagName("img")[0].style.animationDuration =
      this.innerHTML * 0.2 + "s";
    btnLast = this;
  };
}

// chức năng
function onOff() {
  if (checkStatus == 0) {
    document.getElementsByTagName("img")[0].classList.add("fan");
    checkStatus = 1;
  } else {
    document.getElementsByTagName("img")[0].classList.remove("fan");
    checkStatus = 0;
  }
  setColor();
}
function setColor() {
  if (checkStatus == 0) {
    btnOF.style.backgroundColor = "red";
  } else {
    btnOF.style.backgroundColor = "green";
  }
}
