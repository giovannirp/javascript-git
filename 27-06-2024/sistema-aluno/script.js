const button = document.querySelector("button");
const inputNota = document.querySelector("#nota");

// Criando uma função teste
button.addEventListener("click", function(event) {
    event.preventDefault();
    console.log(inputNota.value);

    // Lógica
    if(inputNota.value >= 6) {
        alert("Você está aprovado");
    } else {
        alert("Você está reprovado");
    }

});