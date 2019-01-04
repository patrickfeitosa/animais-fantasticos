export default class ScrollAnima {
    constructor(sections) {
        this.sections = document.querySelectorAll(sections);
        this.posToStartAnimation = window.innerHeight * 0.8;

        this.checkDistance = this.checkDistance.bind(this);
    }

    getDistance() {
        /* eslint-disable */
        this.distance = [...this.sections].map((section) => {
            /* eslint-enable */
            return {
                element: section,
                offset: Math.floor(section.offsetTop) - this.posToStartAnimation,
            };
        });
    }

    checkDistance() {
        /* eslint-disable */
        this.distance.map((item) => {
            /* eslint-enable */
            if (window.pageYOffset > item.offset) {
                item.element.classList.add('ativo');
            } else if (item.element.classList.contains('ativo')) {
                item.element.classList.remove('ativo');
            }
        });
    }

    init() {
        if (this.sections.length) {
            this.getDistance();
            this.checkDistance();
            window.addEventListener('scroll', this.checkDistance);
        }
        return this;
    }
}
