
const input = document.getElementById("myInput");

function insert(value) {
  input.value += value; 
}
function calculate() {
  try {
    let expression = input.value;
    expression = expression.replace(/×/g, "*").replace(/÷/g, "/");
    const result = eval(expression);


    input.value = result;
  } catch (error) {
    input.value = "Lỗi!";
  }
}
function clearInput() {
  input.value = "";
}
