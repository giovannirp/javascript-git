/*
    Vamos criar um programa, que o usuário executa uma 
    função e dentro dessa função existe uma frase. 
*/
function pularLinha() {
    document.write("<br>");
}

function mostra(frase) {
    document.write(frase);
}

mostra("JavaScript com lógica");
pularLinha();
pularLinha();
mostra("Aprendendo funções JavaScript");