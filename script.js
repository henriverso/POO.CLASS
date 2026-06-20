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

    validarValor(plano){
        return this.saldo >= this.planos[plano].valor;
    }

    escolherPlano(plano){
        if (!this.planos[plano]) {
            alert('Plano inválido!');
            return;
    }
        if (this.validarValor(plano)) {
        this.saldo -= this.planos[plano].valor;
        this.tempoRestante = this.planos[plano].tempo;
        this.atualizarDisplaySaldo();
        this.exibirTempo();
    } else {
        alert('Saldo insuficiente para este plano!');
    }
      this.iniciarCronometro();
    }

    iniciarCronometro(){
        if (this.tempoRestante > 0) {
            this.tempoCronometro = setInterval(() => {
                this.tempoRestante--;
                this.exibirTempo();
                if (this.tempoRestante <= 0) {
                    clearInterval(this.tempoCronometro)
                    alert('Seu tempo esgotou!')
                }
            }, 60000);
        }

    }

    exibirTempo(){
        document.getElementById('tempoRestante').innerHTML = `Tempo restante: ${this.tempoRestante} min`;
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
    input.value = '';
}

