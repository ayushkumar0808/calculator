let currentValue = "";
let textValue = document.querySelector("#text_dis");
textValue.value = currentValue;

function appendValue(value) {
  currentValue = currentValue + value;
  textValue.value = currentValue;
}

function clearDisplay() {
  currentValue = "";
  textValue.value = currentValue;
}

document.querySelector("#btn").addEventListener("click", () => {
  currentValue = eval(currentValue);
  textValue.value = currentValue;
});

// function calculator() {
//   currentValue = eval(currentValue);
//   textValue.value = currentValue;
// }
