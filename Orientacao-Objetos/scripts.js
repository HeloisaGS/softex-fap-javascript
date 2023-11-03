//Crie um código com um objeto chamado "Banco". Ele deve ter propriedades que incluem conta, saldo, tipo de conta e agência e seus métodos devem ser: Buscar saldo, depósito, saque e número da conta

//Observações:
// -buscar saldo deve retornar o valor atual do saldo;
// -para o depósito, você deverá passar um valor como parâmetro e adicioná-lo no saldo final do objeto
// -para o saque, você deverá passar um valor como parâmetro e subtraí-lo no saldo final do onjeto;
// -o número da conta deve retornar o número da conta.

//Objeto
function Banco(conta, saldo, tipo, agencia) {
    this.conta = conta;
    this.saldo = saldo;
    this.tipo = tipo;
    this.agencia = agencia;
    //Métodos
    this.buscarSaldo = function SaldoValor(){
        console.log(this.saldo)
    }
    this.deposito = function AdicionarAoSaldo(){
        let depositado = Number(prompt("Digite o quanto você quer depositar: "))
        this.saldo += depositado
        console.log(this.saldo)
    }
    this.saque = function RetirarDoSaldo(){
        let retirada = Number(prompt("Digite o quanto você quer retirar: "))
        if (retirada <= this.saldo){
            this.saldo -= retirada
            console.log(this.saldo)
        } else{
            console.log("Você não tem saldo o suficiente para completar essa operação")
        }
    }
    this.numeroConta = function MostrarNumeroConta(){
        console.log(this.conta)
    }
}

let minhaConta = new Banco("8888", 200.50, "contacorrente", "99999-99")
//mostrando na tela a função
console.log(minhaConta)
//exibindo os métodos
minhaConta.buscarSaldo()
minhaConta.deposito()
minhaConta.saque()
minhaConta.numeroConta()