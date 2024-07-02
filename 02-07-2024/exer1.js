const drinkType = 'refrigerante';
let message = '';

switch(drinkType) {
    case 'refrigerante':
        message = 'Bebida não alcoólica e não fermentada, fabricada industrialmente, à base de água mineral e açúcar.';
        break;
    case 'suco':
        message = 'Bebida produzida do líquido extraído de frutos.';
        break;
    default:
        message = 'Bebida desconhecida.'
        break;
}
console.log(message)