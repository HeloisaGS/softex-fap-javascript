//Utilizando a linguagem JavasCript, crie uma situação matemática na qual os números precisam ser informados pelo usuário. Além disso, deve ocorrer uma exeção dentro do código. Utilize os métodos try(), catch() e finally para realizar a capatura e o tratamento dessa exeção.

//Variáveis para informar os números
let num1 = Number(prompt("Digite o primeiro número: "));
let num2 = Number(prompt("Digite o segundo número: "));

//função matemática
function soma(numero1, numero2) {
    return numero1+numero2
}

//tratamento de erros
try {
    const resultado = soma(num1, num2);
    console.log(resultado) 
    //Caso o alguma das variaveis informadas seja uma letra ou um símbolo informar um erro
    if (isNaN(resultado)) {
        throw new Error("Você digitou algo que não é um número")
    }
} catch (erro) {
    //Mostrar o erro
    console.error("Erro: ", erro.message);
} finally{
    //sempre será executado
    console.log("Mesmo ocorrendo a exeção essa mensagem será executada")
} 
  