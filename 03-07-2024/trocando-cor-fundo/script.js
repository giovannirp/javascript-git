// Obtém os botões do DOM
let btnMudarCor = document.getElementById("btnMudarCor");
let btnVoltarCor = document.getElementById("btnVoltarCor");

// Adiciona um evento de clique ao botão 'Mudar cor de fundo'
btnMudarCor.addEventListener("click", function() {
    document.body.style.background = "#8B0000";
});

// Adiciona um evento de clique ao botão 'voltar cor normal'
btnVoltarCor.addEventListener("click", function() {
    document.body.style.background = "";
});