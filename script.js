class Parquimetro{

    constructor(){
        this.saldo = 0;
        this.planoEscolhido = null;
        this.tempoRestante = 0;
        this.intervalo = null;

        this.planos = {
            basico: { valor: 1.00, tempo: 60 },
            medio: { valor: 1.75, tempo: 60 },
            maior: { valor: 3.00, tempo: 120 },
        }

        this.evento();
    }

//adicionar saldo  
    saldoAtual(){
        documento.getelementbyid("saldo").textContent =
        `Saldo R$ ${saldo},00`
    }

//Inicalizador dos Eventos
    evento(){
        ["basico", "medio", "maior"].forEach(id => {
            document.getElementById(id)
            .addEventListener ("click", () => this.selecionarPlano(id));
        });

        document.getElementById("adicionarSaldoBtn")
        .addEventListener ("click", () => this.adicionarSaldo());

        document.getelementbyid("calcular")
        .addEventListener("click", () => calcular());
    }

//adicionando dinheiro no saldo
    adicionarSaldo(){
        const valor = parseFloat(document.getelementbyid("iptSaldo").value)
        if (isNaN(valor) || valor< 1.00) {
            alert("Valor mínimo: R$1,00")
            return
        }
        this.saldo += valor;
        this.saldoAtual();
        documento.getElementById("iptSaldo").value = ""
    }

    selecionarPlano(planoId){
        this.planoEscolhido = planoId;
        const plano = this.planos[planoId];

        document.getelementbyid("valor").value =
            plano.valor.toFixed(2);

        ["basico", "medio", "maior"].forEach(id => {
            document.getElementById(id).classList.remove("selecionado");
    });
        documento.getelementbyid(planoId).classList.add("selecionado")
    }
    
    valorValido(raw){
        constnum = parseFloat(raw);
        const valoresPermitidos = [1.00, 1.75 , 3.00];
        return valoresPermitidos.includes(num) ? num : null;
    }

    calcular(){
        const raw = documento.getElementById("valor").value;
        const valorDigitado = this.valorValido(raw);

        if (!valorDigitado){
            alert("Valor inválido! Insira apenas R$1.00, R$1.75 e R$3,00.");
            return;
        }

        if(this.saldo < valorDigitado){
            alert("Saldo insuficiente!");
            return;
        }

        const planoId = Object.keys(this.planos).find(
            id => this.planos[id].valor === valorDigitado
        );

        this.saldo -= valorDigitado;
        this.adicionarSaldo();

        this.tempoRestante = this.planos[planoId].minutos * 60;
        this.iniciarContagem();
    }

    iniciarContagem(){
        if(this.intervalo) clearInterval(this.intervalo);

        this.intervalo = setInterval(() => {
            if(this.tempoRestante <= 0) {
                clearInterval(this.intervalo);
                document.getElementById("card1").innerHTML =
                "<p>Tempo Esgotado! </p>"
                return
            }

            this.tempoRestante--;
            this.exibirTempo();
        }, 1000);

        this.exibirTempo();
    }

    exibirTempo(){
        const min = String(Math.floor(this.tempoRestante / 60)).padStart(2, "0");
        const seg = String(this.tempoRestante % 60).padStart(2, "0");

        documento.getElementById("card1").innerHTML=
        `<h3>Tempo</h3><p>${min}:${seg}`;
    }
}
const parquimetro = new Parquimetro()