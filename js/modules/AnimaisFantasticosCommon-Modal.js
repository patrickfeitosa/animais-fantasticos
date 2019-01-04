const Methods = {
    botaoAbrir: document.querySelector('[data-modal="abrir"]'),
    botaoFechar: document.querySelector('[data-modal="fechar"]'),
    containerModal: document.querySelector('[data-modal="container"]'),
    init() {
        Methods.abrirModal();
        Methods.fecharModal();
        Methods.fecharModalPeloContainer();
    },
    abrirModal() {
        Methods.botaoAbrir.addEventListener('click', (ev) => {
            ev.preventDefault();
            Methods.containerModal.classList.add('ativo');
        });
    },
    fecharModal() {
        Methods.botaoFechar.addEventListener('click', (ev) => {
            ev.preventDefault();
            Methods.containerModal.classList.remove('ativo');
        });
    },
    fecharModalPeloContainer() {
        Methods.containerModal.addEventListener('click', (ev) => {
            if (ev.target === Methods.containerModal) {
                Methods.containerModal.classList.remove('ativo');
            }
        });
    },
};

export default {
    init: Methods.init,
};
