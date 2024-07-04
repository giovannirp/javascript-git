// Obtém os elementos do DOM
let valor1 = document.getElementById("valor1");
let valor2 = document.getElementById("valor2");

// Botões
const btnSomar = document.getElementById("btnSomar");

// Botão resultado
const resultado = document.getElementById("resultado"); 

// Adiciona um evento de clique no botão
btnSomar.addEventListener("click", function() {
   // Converte os valores dos inputs para números e soma
   let soma = Number(valor1.value) + Number(valor2.value);

   // Exibe o resultado na tela
   resultado.textContent = soma;

   valor1.value = "";
   valor2.value = "";

    setTimeout(function() {
        resultado.innerHTML = 0;
    }, 2000);
});