const campo = document.querySelector("#campo");
const salvarBtn = document.querySelector("#salvar");

// Criando um elemento P
const pMensagem = document.createElement('p');

// Adcionar evento de clique no botão salvar
salvarBtn.addEventListener("click", function() {
    const valor = campo.value;

    // Validação
    if (valor.trim() === '') {
        // alert("Campo obrigatório");
        pMensagem.textContent = "Campo obrigatório";
        campo.insertAdjacentElement("afterend", pMensagem);
        pMensagem.setAttribute("class", "error");
        return;
    }

    // salvar no LocalStorage
    const chave = `valorSalvo_${Date.now()}`;
    localStorage.setItem(chave, valor);

    // Limpar campo após salvar
    campo.value = "";

    // Exibir os valores salvos
    carregarValoresSalvos();
});