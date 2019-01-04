export default class ScrollAnima {
    constructor(sections) {
        this.sections = document.querySelectorAll(sections);
        this.posToStartAnimation = window.innerHeight * 0.8;

        this.animationOnScroll = this.animationOnScroll.bind(this);
    }

    animationOnScroll() {
        [].map.call(this.sections, (section) => {
            const sectionTop = section.getBoundingClientRect().top - this.posToStartAnimation;
            return sectionTop < 0 ? section.classList.add('ativo') : 0;
        });
    }

    init() {
        if (this.sections.length) {
            this.animationOnScroll();
            window.addEventListener('scroll', this.animationOnScroll);
        }
        return this;
    }
}
