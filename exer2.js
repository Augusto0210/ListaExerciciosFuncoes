/*Exercício 2
Crie uma função que receba 3 números como parâmetro e retorne o MENOR dentre eles.
AUGUSTO LOPES COSTA DA SILVA*/
console.clear();
var teclado = require("prompt-sync")();
function rDecre(num1, num2, num3) {
    if (num1 < num2 && num1 < num3) {
        return num1;
    }
    else if (num2 < num1 && num2 < num3) {
        return num2;
    }
    else if (num3 < num1 && num3 < num1) {
        return num3;
    }
    else {
        return 0;
    }
}
var n1 = parseFloat(teclado("Digite aqui o 1\u00BA n\u00FAmero: "));
var n2 = parseFloat(teclado("Digite aqui o 2\u00BA n\u00FAmero: "));
var n3 = parseFloat(teclado("Digite aqui o 3\u00BA n\u00FAmero: "));
var menorNumero = rDecre(n1, n2, n3);
console.log("Menor n\u00FAmero ser\u00E1 entre os 3 digitados \u00E9 ".concat(menorNumero));
