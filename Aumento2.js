/* 1. Faça uma função que recebe um valor inteiro e verifica se o
valor é positivo, negativo ou zero. A função deve retornar 1
para valores positivos, -1 para valores negativos e 0 para o
valor 0.  */

var valor = 0
var VerificaValor = 0

function RetornarValor(){
    valor = parseInt(prompt("Digite um valor inteiro: "))
    if (valor == 0){
        return VerificaValor
    } else if(valor > 0){
        VerificaValor = 1
        return VerificaValor
    } else{
        VerificaValor = -1
        return VerificaValor
    }
}
RetornarValor()
console.log(VerificaValor)