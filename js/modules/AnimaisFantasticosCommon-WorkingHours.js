const Methods = {
    init() {
        const funcionamento = document.querySelector('[data-semana]');
        const diasSemana = funcionamento.dataset.semana.split(',').map(Number);
        const horarioSemana = funcionamento.dataset.hora.split(',').map(Number);
        const dataAgora = new Date();
        const diaAgora = dataAgora.getDay();
        const horarioAgora = dataAgora.getHours();

        if (diasSemana.indexOf(diaAgora) !== -1
            && (horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1])) {
            funcionamento.classList.add('aberto');
        }
    },
};

export default {
    init: Methods.init,
};
