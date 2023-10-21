//Crie um programa que contenha as seguintes funções:

//1. uma função tradicional com a palavra reservada "Function" e sem nenhum parâmetro
//2. uma função tradicional com parâmetros e um retorno de valor
//3. uma arrow function com parâmetros que retorne um valor

//Crie um programa que utilize essas 3 funções de forma lógica, por exemplo: um programa de calculadora.


//uma função tradicional com a palavra reservada "Function" e sem nenhum parâmetro
function menuOperacao() {
    console.log("Para operador de soma digite '+'")
    console.log("Para operador de subtração digite '-'")
    console.log("Para operador de multiplicação digite '*'")
    console.log("E para operador de divisão digite '/'")
}
menuOperacao();

//definição das variáveis
let num1 = Number(prompt("Digite um número: "))
let operador = prompt("Digite o operador: ")
let num2 = Number(prompt("Digite outro número: "))

//uma função tradicional com parâmetros e um retorno de valor
function calcular(num1, num2, operador) {
    switch (operador) {
        case "+" :
            return num1+num2
        case "-" :
            return num1-num2
        case "*" :
            return num1*num2
        case "/" :
            return num1/num2                    
        default:
            console.log("Você não digitou o operador correto")
            break;
    }
}

//definição da variável resultado
const resultado = calcular(num1, num2, operador);

//uma arrow function com parâmetros que retorne um valor
const mostrarResultado = (resultado) => {
    console.log(`O resultado da operação é: ${resultado}`)
}

//chamando as funções
menuOperacao();

mostrarResultado(resultado);
