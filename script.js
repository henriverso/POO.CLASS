class Parquimetro{
    
    constructor(){
        this.saldo = 0;
        this.planoEscolhido = null;
        this.intervalo = null;
        this.tempoRestante = null;

        this.planos = {
            pequeno:  { valor: 1.00,  minutos: 30  },
            medio: { valor: 1.75,  minutos: 60  },
            grande:   { valor: 3.00,  minutos: 120 }
        };

        this.iniciarEventos();
    };


};
