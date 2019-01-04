export default class Accordion {
    constructor(list) {
        this.accordionList = document.querySelectorAll(list);
        this.activeClass = 'ativo';

        // this.activeAccordion = this.activeAccordion.bind(this);
    }

    activeAccordion(item) {
        item.classList.toggle(this.activeClass);
        item.nextElementSibling.classList.toggle(this.activeClass);
    }

    addAccordionEvent() {
        [].map.call(this.accordionList, item => item.addEventListener('click', () => this.activeAccordion(item)));
    }

    /**
     * @access private
     * Init the Class
     */
    init() {
        if (this.accordionList.length) {
            this.activeAccordion(this.accordionList[0]);
            this.addAccordionEvent();
        }
        return this;
    }
}
