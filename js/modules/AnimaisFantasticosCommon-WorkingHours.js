export default class WorkingHours {
    constructor(funcionamento, activeClass) {
        this.funcionamento = document.querySelector(funcionamento);
        this.activeClass = activeClass || 'aberto';
    }

    dadosFuncionamento() {
        this.diasSemana = this.funcionamento.dataset.semana.split(',').map(Number);
        this.horarioSemana = this.funcionamento.dataset.hora.split(',').map(Number);
    }

    dadosAgora() {
        this.dataAgora = new Date();
        this.diaAgora = this.dataAgora.getDay();
        this.horarioAgora = this.dataAgora.getUTCHours() - 3;
    }

    estaAberto() {
        if (this.diasSemana.indexOf(this.diaAgora) !== -1
            && (this.horarioAgora >= this.horarioSemana[0]
                && this.horarioAgora < this.horarioSemana[1])) {
            this.funcionamento.classList.add(this.activeClass);
        }
    }

    init() {
        if (this.funcionamento) {
            this.dadosFuncionamento();
            this.dadosAgora();
            this.estaAberto();
        }

        return this;
    }
}
