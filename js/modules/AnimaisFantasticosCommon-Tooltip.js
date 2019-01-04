export default class Tooltip {
    constructor(allTooltips) {
        this.allTooltips = document.querySelectorAll(allTooltips);

        /**
         * Function binders
         */
        this.onMouseLeave = this.onMouseLeave.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);
        this.onMouseOver = this.onMouseOver.bind(this);
    }

    /**
     * @access private
     * Default listener for active the functions
     */
    onMouseLeave({ currentTarget }) {
        this.tooltip.remove();
        currentTarget.removeEventListener('mouseleave', this.onMouseLeave);
        currentTarget.removeEventListener('mousemove', this.onMouseMove);
    }

    /**
     * @access private
     * Default listener for active the functions
     */
    onMouseMove(ev) {
        this.tooltip.style.top = `${ev.pageY + 10}px`;

        if (ev.pageX + 240 > window.innerWidth) {
            this.tooltip.style.left = `${ev.pageX - 190}px`;
        } else {
            this.tooltip.style.left = `${ev.pageX + 10}px`;
        }
    }

    /**
     * @access private
     * Default listener for active the functions
     */
    onMouseOver({ currentTarget }) {
        this.createContainerTooltip(currentTarget);
        currentTarget.addEventListener('mouseleave', this.onMouseLeave);
        currentTarget.addEventListener('mousemove', this.onMouseMove);
    }

    /**
     * @access private
     * @param {NodeSelector} el Node to append the tooltip
     */
    createContainerTooltip(el) {
        const tooltipContainer = document.createElement('div');
        const textToTooltip = el.getAttribute('aria-label');
        tooltipContainer.classList.add('tooltip');
        tooltipContainer.textContent = textToTooltip;
        document.body.appendChild(tooltipContainer);
        this.tooltip = tooltipContainer;
    }

    /**
     * @access private
     * Default listener for active the functions
     */
    addTooltipEvents() {
        [].map.call(this.allTooltips, (tooltip) => {
            tooltip.addEventListener('mouseover', this.onMouseOver);
        });
    }

    /**
     * @access private
     * Init the Class
     */
    init() {
        if (this.allTooltips.length) {
            this.addTooltipEvents();
        }
        return this;
    }
}
