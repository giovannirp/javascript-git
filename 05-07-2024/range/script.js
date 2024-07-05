// Variáveis
let range = document.querySelector("#range");
let rangeValue = document.querySelector("#rangeValue");

// Função
range.addEventListener("input", function() {
    rangeValue.textContent = range.value;
});