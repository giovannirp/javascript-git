const button = document.querySelector("button");
const inputNota = document.querySelector("#nota");

// Criando uma função para limpar o campo 
function clearForm() {
    inputNota.value = "";
}

// Criando uma função
button.addEventListener("click", function(event) {
    event.preventDefault();
    const inputNotaValue = inputNota.value;

    //Validação de formulário
    if (inputNotaValue === '') {
        alert("Campo obrigatório");
        return false;
    }

    // Lógica
    if(inputNotaValue >= 6) {
        alert("Você está aprovado");
    } else {
        alert("Você está reprovado");
    }

    // CHAMANDO FUNÇÃO DE LIMPAR CAMPO
    clearForm();

});