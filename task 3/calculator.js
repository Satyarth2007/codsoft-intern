const input = document.getElementById("EnterVal");

function cleanInput() {
  input.value = "";
}

function appendValue(value) {
  input.value += value;
}

function backspace() {
  input.value = input.value.slice(0, -1);
}

function calculateResult() {
  try {
    input.value = eval(input.value);
  } catch {
    input.value = "Error";
  }
}
