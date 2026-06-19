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
        document.getElementById("saldo").textContent = `Saldo: R$ ${saldo},00.`
    }
    
    iniciarEvento(){
        ["bascico","medio","maior"].forEach(id => {
            document.getElementById(id)
            .addEventListener("click", () => this.planoSelecionado(id))
        });

        document.getElementById("adicionar")
            .addEventListener("click", () => this.adicionar())
    };
        


};
