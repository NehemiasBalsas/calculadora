const resultado = document.getElementById("resultado");
let expresion = "";

function appendToResult(value) {
  expresion += value;
  resultado.value = expresion;
}

function performOperation(operator) {
  expresion += operator;
  resultado.value = expresion;
}

function calculateResult() {
  try {
    const result = eval(expresion);
    resultado.value = result;
    expresion = "";
  } catch (error) {
    resultado.value = "Error";
  }
}

function clearResult() {
  expresion = "";
  resultado.value = "";
}

function deleteLastCharacter() {
  expresion = expresion.slice(0, -1);
  resultado.value = expresion;
}
