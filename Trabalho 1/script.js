//Vamos criar um cadastro de pessoa com os seguintes dados: nome, salário, idade e se possui diploma. Antes de começar a codificação identifiquem os tipos de cada variável.
//Em seguida, desenvolvam o código utilizando exemplos para cada variável que respeitem os tipos identificados. Certifiquem-se de que os valores correspondam atipos de dados corretos.

//Nome = String
//Salário = Number
//Idade = Number
//Possui diploma = Boolean

//Criando cadastro = cria um array vazio para adicionar as pessoas
const cadastro = [];
//Criando exemplos = Cria objetos para adicionar ao array
const pessoa1 = {
    nome: "Ana",
    idade: 23,
    salario: 2500.00,
    possuiDiploma: true,
};
const pessoa2 = {
    nome: "José",
    idade: 27,
    salario: 3000.00,
    possuiDiploma: true,
};
const pessoa3 = {
    nome: "João",
    idade: 21,
    salario: 2000.00,
    possuiDiploma: false,
};
//Adicionando exemplos ao cadastro
cadastro.push(pessoa1);
cadastro.push(pessoa2);
cadastro.push(pessoa3);

//Exibindo o cadastro
console.log(cadastro)

//Mostrando os tipos
//nome
console.log(`Tipos do dado nome na pessoa1: ${typeof pessoa1.nome}`)
console.log(`Tipos do dado nome na pessoa2: ${typeof pessoa2.nome}`)
console.log(`Tipos do dado nome na pessoa3: ${typeof pessoa3.nome}`)
//idade
console.log(`Tipos do dado idade na pessoa1: ${typeof pessoa1.idade}`)
console.log(`Tipos do dado idade na pessoa2: ${typeof pessoa2.idade}`)
console.log(`Tipos do dado idade na pessoa3: ${typeof pessoa3.idade}`)
//salario
console.log(`Tipos do dado salario na pessoa1: ${typeof pessoa1.salario}`)
console.log(`Tipos do dado salario na pessoa2: ${typeof pessoa2.salario}`)
console.log(`Tipos do dado salario na pessoa3: ${typeof pessoa3.salario}`)
//possuiDiploma
console.log(`Tipos do dado possuiDiploma na pessoa1: ${typeof pessoa1.possuiDiploma}`)
console.log(`Tipos do dado possuiDiploma na pessoa2: ${typeof pessoa2.possuiDiploma}`)
console.log(`Tipos do dado possuiDiploma na pessoa3: ${typeof pessoa3.possuiDiploma}`)



