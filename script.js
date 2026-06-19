

class ContaBancaria{
    #saldo;
    constructor(){
    this.#saldo = 0;
    }

    depositar(valor){
        this.#saldo += valor;
    }

    sacar(valor){
        this.#saldo -= valor;
    }

    temSaldoParaSacar(valor){
        return valor <= this.#saldo;
    }

    get saldo(){
        return this.#saldo;
    }
}

class CaixaEletronico{
    constructor(conta){
        this.conta = conta;
    }

    depositar(){
        const valorDeposito = parseFloat(document.getElementById("valorDeposito").value);
        this.conta.depositar(valorDeposito);
        this.mostrarSaldo();
    }

    sacar(){
        const valorSaque = parseFloat(document.getElementById("valorSaque").value);
        if(this.conta.temSaldoParaSacar(valorSaque)){
            this.conta.sacar(valorSaque);
            this.mostrarSaldo(this.conta.saldo);
        } else {
            this.mostrarSaldo("Insuficiente!")
        }
    }

    mostrarSaldo(){
        document.getElementById("saldo").textContent = `Saldo R$ ${this.conta.saldo},00.`;
        document.getElementById("valorDeposito").value = ``
        document.getElementById("valorSaque").value = ``
    }
}

const conta = new ContaBancaria();
const caixaEletronico = new CaixaEletronico(conta);