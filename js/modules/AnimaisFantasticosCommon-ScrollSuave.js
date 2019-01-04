export default class ScrollSuave {
    constructor(targets, options) {
        this.targets = document.querySelectorAll(targets);
        if (options === undefined) {
            this.options = {
                behavior: 'smooth',
                block: 'start',
            };
        } else {
            this.options = options;
        }
        this.scrollToSection = this.scrollToSection.bind(this);
    }

    /**
     * @access private
     * @param {Object} event default callback object for the AddEventListener
     */
    scrollToSection(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const sectionToScroll = document.querySelector(href);

        sectionToScroll.scrollIntoView(this.options);
    }

    /**
     * @access private
     * Default listener for active the functions
     */
    addLinkEvent() {
        [].map.call(this.targets, target => target.addEventListener('click', this.scrollToSection));
    }

    /**
     * @access private
     * Init the Class
     */
    init() {
        if (this.targets.length) {
            this.addLinkEvent();
        }
        return this;
    }
}
