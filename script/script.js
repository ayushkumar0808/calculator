let textValue = document.querySelector("#text_dis");
textValue.value = "";

function appendValue(value) {
  if (textValue.value === "Error" || textValue.value === "Infinity") {
    textValue.value = "";
  }
  textValue.value = textValue.value + value;
}

function clearDisplay() {
  textValue.value = "";
}

document.querySelector("#btn").addEventListener("click", () => {
  try {
    textValue.value = eval(textValue.value);
  } catch (error) {
    textValue.value = "Error";
  }
});

// function calculator() {
//   currentValue = eval(currentValue);
//   textValue.value = currentValue;
// }
