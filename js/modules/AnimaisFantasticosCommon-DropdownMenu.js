import CommonHelpers from './AnimaisFantasticosCommon-Helpers.js';

export default class DropdownMenu {
    constructor(dropdownMenus, activeClass, customUserEvents) {
        this.dropdownMenus = document.querySelectorAll(dropdownMenus);
        this.activeClass = activeClass;
        this.customUserEvents = customUserEvents || ['click', 'touchstart'];

        this.handleClickTouch = this.handleClickTouch.bind(this);
    }

    addDropdownMenuEvents() {
        /* eslint-disable */
        [...this.dropdownMenus].map((subMenu) => {
            this.customUserEvents.map((userEvent) => {
                subMenu.addEventListener(userEvent, this.handleClickTouch);
            });
        });
        /* eslint-enable */
    }

    handleClickTouch(ev) {
        ev.preventDefault();
        const el = ev.currentTarget;
        el.classList.add(this.activeClass);
        CommonHelpers.clickOutside(el, this.customUserEvents, () => {
            el.classList.remove(this.activeClass);
        });
    }

    init() {
        this.addDropdownMenuEvents();
    }
}
