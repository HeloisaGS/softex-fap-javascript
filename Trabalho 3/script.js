//Com conceitos aprendidos, crie um programa de calculadora que:

//-receba dois valores, que devem ser salvos em variáveis
//-o usuário deve colocar qual operador ele vai utilizar por meio dos símbolos aritiméticos;
//-com os dois valores e o operador definido, o programa deve fazer a operação e retornar o resultado;
//-se houver divisão você deve retornar o resultado e a sobra, caso haja alguma.

//Definição das variáveis
let num1 = parseInt(prompt("Digite o primeiro número inteiro: "));
let num2 = parseInt(prompt("Digite o segundo número inteiro: "));
let operador = prompt("Digite o operador de acordo com a operação que você deseja realizar (para soma +, subtração -, multiplicação *, divisão /): ")
let resultado;

//Para fazer os cálculos
switch (operador) {
    case "+":
        resultado = num1 + num2;
        console.log(`O resultado da soma é ${resultado}`);
    break;
    case "-":
        resultado = num1 - num2;
        console.log(`O resultado da subtração é ${resultado}`);
    break;
    case "*":
        resultado = num1 * num2;
        console.log(`O resultado da multiplicação é ${resultado}`);
    break;
    case "/":
        resultado = Math.floor(num1 / num2); //para arredondar o número para baixo
        console.log(`O resultado da operação é ${resultado}`);
        //Se a divisão do numero um pelo 2 tenha resto
        if (num1%num2 !== 0) {
            (console.log(`E o resto da divisão é ${num1%num2}`))
        } 
    break;

    default:
        console.log("O operador não é válido")
    break;
}
