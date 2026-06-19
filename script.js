class Parquimetro{

    constructor(){
        this.saldo = 0;
        this.planoEscolhido = null;
        this.intervalo = null;
        this.tempoRestante = null;

        this.planos = {
            basico:  { valor: 1.00,  minutos: 30  },
            medio: { valor: 1.75,  minutos: 60  },
            grande:   { valor: 3.00,  minutos: 120 }
        };

        this.iniciarEvento();
    };

    mostrarSaldo(){
        document.getElementById("saldo").textContent = `Saldo: R$ ${saldo},00.`
    }
    
    iniciarEvento(){
        ["bascico","medio","grande"].forEach(id => {
            document.getElementById(id)
            .addEventListener("click", () => this.planoSelecionado(id))
        })
    }


};
