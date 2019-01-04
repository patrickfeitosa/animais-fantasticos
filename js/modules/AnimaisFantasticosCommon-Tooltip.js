const Methods = {
    allTooltips: document.querySelectorAll('[data-tooltip]'),
    init() {
        Methods.onMouseOver();
    },

    onMouseOver() {
        Methods.allTooltips.forEach((tooltip) => {
            tooltip.addEventListener('mouseover', (ev) => {
                const tooltipContainer = Methods.createContainerTooltip(ev.currentTarget);
                Methods.onMouseLeave.tooltip = Methods.onMouseMove.tooltip = tooltipContainer;
                Methods.onMouseLeave.element = ev.currentTarget;
                ev.currentTarget.addEventListener('mouseleave', Methods.onMouseLeave);
                ev.currentTarget.addEventListener('mousemove', Methods.onMouseMove);
            });
        });
    },

    onMouseLeave: {
        element: '',
        tooltip: '',
        handleEvent() {
            this.tooltip.remove();
            this.element.removeEventListener('mouseleave', this);
            this.element.removeEventListener('mousemove', Methods.onMouseMove);
        },
    },

    onMouseMove: {
        tooltip: '',
        handleEvent(ev) {
            this.tooltip.style.top = `${ev.pageY + 10}px`;
            this.tooltip.style.left = `${ev.pageX + 10}px`;
        },
    },

    createContainerTooltip(el) {
        const tooltipContainer = document.createElement('div');
        const textToTooltip = el.getAttribute('aria-label');
        tooltipContainer.classList.add('tooltip');
        tooltipContainer.textContent = textToTooltip;
        document.body.appendChild(tooltipContainer);
        return tooltipContainer;
    },
};

export default {
    init: Methods.init,
};
