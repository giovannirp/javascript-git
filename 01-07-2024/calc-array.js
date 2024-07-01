const numbers = ['91', '5', '30', '97', '83', '31'];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += Number(numbers[i])
}

console.log(sum === 337);