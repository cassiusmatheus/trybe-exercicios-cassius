// Passo 5: as variáveis a,b e c são Âgulos internos de um triângulo
// por isso a soma de a,b e c devem dar 180 para o booleano ser verdadeiro
// caso as variáveis sejam negativas, o programa deverá apresentar uma mensagem de erro
// conforme pedido no enunciado, por isso o "nada" dentro das chaves do else.

let a = 110;
let b = 30;
let c = 40;


if (a > 0 && b > 0 && c > 0 ) {
    console.log (a + b + c === 180); 
}
else { nada }