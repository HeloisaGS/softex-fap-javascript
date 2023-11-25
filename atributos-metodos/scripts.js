//Com base no que estudamos, escolha dois objetos materiais e dois objetos abstratos. Em seguida, faça uma lista com, pelo menos três atributos e três métodos para cada tipo de objeto. Para finalizar, demonstre esses objetos em Javascript e exemplifique as suas características e ações

//1º Objeto material
class Mouse {
    //3 propriedades (características)
    modelo = 'Logitech M170'
    cor = 'Cinza'
    conectado = false
    //3 métodos (ações)
    conectar(){
        if(this.conectado){
          console.log(`O mouse ${this.modelo} já está conectado`);
        }else{
          //se não estiver conectado valor da propriedade altera para verdadeiro
          this.conectado= true;
          console.log(`O mouse ${this.modelo} foi conectado`);
        }
      }
      desconectar(){
        if(this.conectado){
          this.conectado = false;
          console.log(`O mouse ${this.modelo} foi desconectado`);  
        }else{
          console.log(`O mouse ${this.modelo} já está desconectado`);
        }
      }
      clicar(){
        if(this.conectado){
          console.log(`O mouse ${this.modelo} foi clicado`)
        }else{
          console.log(`O mouse${this.modelo} nãp pode ser clicado, pois não foi conectado`)
        }
      }
}

//2º objeto material
class Livro{
    //3 atributos
    titulo = "Harry Potter"
    autor = "J.K. Rowling"
    aberto = false
    //3 métodos
    abrir(){
        if(this.aberto){
            console.log(`O livro ${this.titulo} já está aberto` )
        }else{
            this.aberto = true
            console.log(`O livro ${this.titulo} foi aberto` )
        }
    }
    fechar(){
        if(this.aberto){
            this.aberto = false
            console.log(`O livro ${this.titulo} foi fechado` )
        }else{
            console.log(`O livro ${this.titulo} já está fechado` )
        }
    }
    ler(){
        if (this.aberto) {
            console.log(`Você está lendo o livro ${this.titulo}`)
        }else{
            console.log("Não é possivel ler pois o livro está fechado")
        }
    }
}


//Objetos abstratos lidam mais com ideias
//1º Objeto abstrato
class ContaBancaria{
    //3 atributos
    numeroConta = "88888"
    saldo = 100
    tipo = "Conta Corrente"
    //3 métodos
    depositar(valor){
        this.saldo +=valor;
        console.log(`Depósito de ${valor} realizado! Saldo atual: ${this.saldo}`)
    }
    sacar(valor){
        if(this.saldo >= valor){
            this.saldo -= valor
            console.log(`Você fez um saque de  ${valor}! Saldo atual de ${this.saldo}` )
        }else{
            console.log(`O seu saldo é insuficiente.` )
        }
    }
    consultarSaldo(){
        console.log(`Seu saldo é: ${this.saldo}`)
    }
}
//2º Objeto abstrato
class Tarefa{
    //3 atributos
    nomeTarefa = "Fazer atividade"
    prioridade = "Média"
    concluida = false
    //3 métodos
    consultarTarefa(){
        if(this.concluida){
            console.log("Você não possui tarefas pendentes")
        } else{
            console.log(`A tarefa "${this.nomeTarefa}", está com o status Pendente`)
        }
    }
    mudarPrioridade(urgencia){
        this.prioridade = urgencia
        console.log(`Você mudou a prioridade de "${this.nomeTarefa}" para: ${this.prioridade}`)
    }
    marcarConcluida(){
        if (this.concluida) {
            console.log(`A tarefa "${this.nomeTarefa}" já está concluida`)
        }else{
            this.concluida = true
            console.log(`Você marcou a tarefa: "${this.nomeTarefa}" como concluida`)
        }
    }
}



//Instanciando os objetos
let meuMouse = new Mouse();
let meuLivro = new Livro();
let minhaContaBancaria = new ContaBancaria();
let minhaTarefa = new Tarefa();

//Exemplificando as ações
meuMouse.conectar();
meuMouse.clicar()
meuMouse.desconectar();

meuLivro.abrir();
meuLivro.ler();
meuLivro.fechar();

minhaContaBancaria.depositar(100);
minhaContaBancaria.sacar(50);
minhaContaBancaria.consultarSaldo();

minhaTarefa.consultarTarefa();
minhaTarefa.mudarPrioridade("Alta");
minhaTarefa.marcarConcluida();
minhaTarefa.consultarTarefa();