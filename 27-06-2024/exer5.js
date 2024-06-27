
/*
- Armazene em uma constante apenas a hora atual na qual 
	você está fazendo este  
  - À partir das 6, exiba "Bom dia!" no console;
  - À partir das 12, exiba "Boa tarde!";
  - À partir das 18, exiba "Boa noite!".
*/
let hours = 18;
let isBomDia = hours >= 6 && hours <= 11;
let isBoaTarde = hours >= 12 && hours <= 17;

if (isBomDia) {
    console.log("Bom dia!");
} else if (isBoaTarde) {
    console.log("Boa tarde!");
} else {
    console.log("Boa noite!");
}
