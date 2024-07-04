// Obtém o elemento do DOM com o ID 'idNome'
let nome = document.getElementById("idNome");

function mudar(event) {
    // Previne o comportamento padrão do evento, como o envio de um formulário
    event.preventDefault();


    document.getElementById("titulo").innerHTML = nome.value;

    nome.value = '';

}

