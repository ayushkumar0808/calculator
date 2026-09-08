let currentValue = "";
document.querySelector("#text_dis").value = currentValue;

function appendValue(value) {
  currentValue = currentValue + value;
  document.querySelector("#text_dis").value = currentValue;
}

function clearDisplay() {
  currentValue = "";
  document.querySelector("#text_dis").value = currentValue;
}

function calculator() {
  currentValue = eval(currentValue);
  document.querySelector("#text_dis").value = currentValue;
}
