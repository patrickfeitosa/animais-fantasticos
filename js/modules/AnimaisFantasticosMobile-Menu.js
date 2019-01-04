import CommonHelpers from './AnimaisFantasticosCommon-Helpers.js';

export default class MenuMobile {
    constructor(menuMobile, listaMenu, activeClass, customUserEvents) {
        this.menuMobile = document.querySelector(menuMobile);
        this.listaMenu = document.querySelector(listaMenu);
        this.activeClass = activeClass || 'active';

        this.customUserEvents = customUserEvents || ['click', 'touchstart'];
        this.handleClickEvent = this.handleClickEvent.bind(this);
    }

    handleClickEvent() {
        this.menuMobile.classList.add(this.activeClass);
        this.listaMenu.classList.add(this.activeClass);
        CommonHelpers.clickOutside(this.listaMenu, this.customUserEvents, () => {
            this.menuMobile.classList.remove(this.activeClass);
            this.listaMenu.classList.remove(this.activeClass);
        });
    }

    openMenu() {
        /* eslint-disable */
        [...this.customUserEvents].map(() => {
            this.menuMobile.addEventListener('click', this.handleClickEvent);
        });
        /* eslint-enable */
    }


    init() {
        if (this.listaMenu && this.menuMobile) {
            this.openMenu();
        }
        return this;
    }
}
