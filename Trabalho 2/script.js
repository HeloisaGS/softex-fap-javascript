//A atividade que faremos é a da "calculadora de media". Para isso, vocÊ deve criar um programa JavaScript que calcule a média de três notas inseridas pelo usuário e exiba o resultado no console.
//Primeiro solicite que o usuário insira 3 notas (entre 0 e 10) usando a função prompt(). Elas devem ser armazenadas em variáveis adequadas, por exemplo, nota1, nota2, nota3, com o tipo de dado Number. Depois, some-as e divida por três. o resultado deste calculo será o valor da média. por fim exiba esse valor no console usando a função console.log().

//Definição das variáveis
let nota1 = Number(prompt("Digite a primeira nota (entre 0 e 10): "));
let nota2 = Number(prompt("Digite a segunda nota (entre 0 e 10): "));
let nota3= Number(prompt("Digite a terceira nota (entre 0 e 10): "));
//Calculo da média
const media = (nota1 + nota2 + nota3)/3
//Exibição da média no console
console.log(`A média do aluno foi: ${media}`)
