import CommonHelpers from './AnimaisFantasticosCommon-Helpers.js';

const Methods = {
    menuMobile: document.querySelector('[data-menu="button"]'),
    listaMenu: document.querySelector('[data-menu="lista"]'),
    eventos: ['click', 'touchstart'],
    init() {
        Methods.openMenu();
    },

    handleClickEvent() {
        Methods.menuMobile.classList.add('active');
        Methods.listaMenu.classList.add('active');
        CommonHelpers.clickOutside(Methods.listaMenu, Methods.eventos, () => {
            Methods.menuMobile.classList.remove('active');
            Methods.listaMenu.classList.remove('active');
        });
    },

    openMenu() {
        Methods.eventos.forEach(() => {
            Methods.menuMobile.addEventListener('click', Methods.handleClickEvent);
        });
    },
};

export default {
    init: Methods.init,
};
