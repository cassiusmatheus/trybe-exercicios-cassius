// Questão 1: imprimir todos valores do array

//  let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// for (x=0 ; x < numbers.length ; x+=1) {
//     console.log (numbers[x]);
// };

// Questão 2: Somar Valores do Array

// let soma = 0
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// for (let x=0 ; x < numbers.length ; x+=1) {
//    soma = soma + numbers[x];
// };
// console.log (soma);

// Questão 3: Média aritmética dos valores do array numbers

let soma = 0
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let x=0 ; x < numbers.length ; x+=1) {
   soma = soma + numbers[x];
};
let media = soma / numbers.length
console.log (media);

