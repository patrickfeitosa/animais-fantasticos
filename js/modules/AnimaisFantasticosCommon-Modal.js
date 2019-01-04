export default class CommonModal {
    constructor(botaoAbrir, botaoFechar, containerModal) {
        this.botaoAbrir = document.querySelector(botaoAbrir);
        this.botaoFechar = document.querySelector(botaoFechar);
        this.containerModal = document.querySelector(containerModal);
        this.activeClass = 'ativo';
    }

    /**
     * @access private
     * Default listener for open the modal
     */
    abrirModal() {
        this.botaoAbrir.addEventListener('click', (ev) => {
            ev.preventDefault();
            this.containerModal.classList.add(this.activeClass);
        });
    }

    /**
     * @access private
     * Default listener for close the modal
     */
    fecharModal() {
        this.botaoFechar.addEventListener('click', (ev) => {
            ev.preventDefault();
            this.containerModal.classList.remove(this.activeClass);
        });
    }

    /**
     * @access private
     * Default listener for close the modal by click in outside the modal
     */
    fecharModalPeloContainer() {
        this.containerModal.addEventListener('click', (ev) => {
            if (ev.target === this.containerModal) {
                this.containerModal.classList.remove(this.activeClass);
            }
        });
    }

    /**
     * @access private
     * Default listener for active the functions
     */
    addModalEvent() {
        if (this.botaoAbrir && this.botaoFechar && this.containerModal) {
            this.abrirModal();
            this.fecharModal();
            this.fecharModalPeloContainer();
        }
    }

    /**
     * @access private
     * Init the Class
     */
    init() {
        this.addModalEvent();
        return this;
    }
}
