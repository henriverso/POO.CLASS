class Parquimetro{

    constructor(){
        this.saldo = 0;
        this.intervalo = 0;
        this.tempoCronometro = 0;
        this.planoSelecionado = null;

        this.planos = {
            basico: {valor:1.00 , tempo:30},
            medio: {valor:1.75, tempo:60},
            cheio: {valor:3.00, tempo:120},
        }
    }

//Métodos

    depositarValor(valor){
    if (valor > 0) {
        this.saldo += valor;
        this.atualizarDisplaySaldo();
    }

    }

    validarValor(){

    }

    escolherPlano(){

    }


    iniciarCronometro(){

    }

    exibirTempo(){

    }

    atualizarDisplaySaldo() {
    document.getElementById('saldo').innerHTML = `Saldo: R$ ${this.saldo.toFixed(2)}`;
    }
}

const parquimetro = new Parquimetro()

function adicionarSaldo() {
    const input = document.getElementById('iptSaldo');
    const valor = Number(input.value);
    parquimetro.depositarValor(valor);
    input.value = ''; // limpa o campo após adicionar
}