export default class CommonTabImages {
    constructor(tabMenu, tabContent) {
        this.tabMenu = document.querySelectorAll(tabMenu);
        this.tabContent = document.querySelectorAll(tabContent);
        this.activeClass = 'ativo';
    }

    /**
     * @access private
     * @param {Number} index in the NodeList that will be active
     */
    activeTab(index) {
        this.tabContent.forEach((section) => {
            section.classList.remove(this.activeClass, section.dataset.animationOrientation);
        });
        const animationDirection = this.tabContent[index].dataset.animationOrientation;
        this.tabContent[index].classList.add(this.activeClass, animationDirection);
    }

    /**
     * @access private
     * Default listener for active the functions
     */
    addTabNavEvent() {
        [].map.call(this.tabMenu, (itemMenu, index) => {
            itemMenu.addEventListener('click', () => {
                this.activeTab(index);
            });
        });
    }

    /**
     * @access private
     * Init the Class
     */
    init() {
        if (this.tabMenu.length && this.tabContent.length) {
            this.activeTab(0);
            this.addTabNavEvent();
        }
        return this;
    }
}
