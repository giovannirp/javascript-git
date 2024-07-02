// Variáveis
let anoCopa = 1930;
let anoLimite = prompt("Qual é o ano limite");

const mostra = function(frase) {
    document.write(frase + "<br>");
}

while (anoCopa <= anoLimite) {
    mostra(anoCopa + " Tem copa!");
    anoCopa += 4;
}

mostra("Ufa! Esses foram os anos da copa até " + anoLimite);

