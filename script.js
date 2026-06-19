class Parquimetro{

    constructor(){
        this.saldo = 0;
        this.planoEscolhido = null;
        this.intervalo = null;
        this.tempoRestante = null;

        this.planos = {
            basico:  { valor: 1.00,  minutos: 30  },
            medio: { valor: 1.75,  minutos: 60  },
            maior:   { valor: 3.00,  minutos: 120 }
        };

        this.iniciarEvento();
    };

    mostrarSaldo(){
        document.getElementById("Saldo").textContent =
            "Saldo: R$ " + this.saldo.toFixed(2);
    }

    iniciarEvento(){    
    ["basico","medio","maior"].forEach(id => {
        document.getElementById(id)
        .addEventListener("click", () => this.selecionarPlano(id))
    });

    document.getElementById("saldo")
       .addEventListener("click", () => this.adicionar()) 
        
    document.getElementById("escolherPlano")
        .addEventListener("click", () => "escolherPlano")
    };
        

    depositar(){
        const valor = parseFloat(document.getElementById("saldo").value);
         if (isNaN(valor) || valor < 0.50){
            alert ("Valor mínimo é R$1,00");
            return;
        } else {
            this.saldo += valor;
            this.mostrarSaldo();
            document.getElementById("saldo").value = ""
        }
    }

    selecionarPlano(planoId){
        this.planoEscolhido = planoId
        const plano = this.planos[planoId];

        document.getElementById("valor").value = 
            plano.valor.toFixed(2);

        ["basico","medio","maior"].forEach(id=> {
            document.getElementById(id).classList.remove("selecionado");
        });
        document.getElementById(planoId).classList.add("selecionado");
    }

    valorValido(raw){
        const numero = parseFloat(raw); 
        const valorPode = [1.00 , 1.75 , 3.00]
        return valorPode.includes(numero) ? numero : null
    }

    escolherPlano(){
        const raw = document.getElementById("valor").value;
        const valorDigitado = this.valorValido(raw);

        if(!valorDigitado){
            alert("Valor inválido! Deposite apenas R$1.00 , R$1.75 e R$3.00");
            return;
        }

        if(this.saldo < valorDigitado){
            alert("Saldo Insuficiente!");
            return
        }

        const planoId = Object.keys(this.planos).find(
            id => this.planos[id].valor === valorDigitado
        );

        this.saldo -= valorDigitado
        this.mostrarSaldo();

        this.tempoRestante = this.planos[planoId].minutos*60;
        this.iniciarContagem();
    }
    iniciarContagem(){
        if(this.intervalo) clearInterval(this.intervalo);

        this.intervalo = setInterval(() => {
            if(this.tempoRestante <= 0){
                clearInterval(this.intervalo);
                document.getElementById("card1").innerHTML = 
                alert ("Tempo esgotado!");
                return;
            }
            this.tempoRestante--;
            this.exibirTempo;
        }, 1000);

        this.exibirTempo();
    }
    
    exibirTempo(){
        const min = String(Math.floor(this.tempoRestante / 60)).padStart(2, "0");
        const seg = String(this.tempoRestante % 60).padStart(2, "0");

        document.getElementById("card1").innerHTML =
            `<h3>Tempo</h3><p>${min}:${seg}</p>`;
    }
};

const parquimetro = new Parquimetro();