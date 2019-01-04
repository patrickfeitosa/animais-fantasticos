import CommonHelpers from './AnimaisFantasticosCommon-Helpers.js';

const Methods = {
    dropdownMenus: document.querySelectorAll('[data-dropdown]'),
    init() {
        Methods.putEvents();
    },

    putEvents() {
        Methods.dropdownMenus.forEach((subMenu) => {
            ['click', 'touchstart'].forEach((userEvent) => {
                subMenu.addEventListener(userEvent, Methods.handleClickTouch);
            });
        });
    },

    handleClickTouch(ev) {
        ev.preventDefault();
        this.classList.add('active');
        CommonHelpers.clickOutside(ev.currentTarget, ['click', 'touchstart'], () => this.classList.remove('active'));
    },
};

export default {
    init: Methods.init,
};
