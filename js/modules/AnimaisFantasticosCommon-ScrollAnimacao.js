const Methods = {
    init() {
        Methods.animationOnScroll();
    },
    animationOnScroll() {
        const sectionsToScrollOnViewport = document.querySelectorAll('.js--scroll');
        if (sectionsToScrollOnViewport.length) {
            const posToStartAnimation = window.innerHeight * 0.8;

            const scrollOnViewport = () => {
                sectionsToScrollOnViewport.forEach((section) => {
                    const sectionTop = section.getBoundingClientRect().top - posToStartAnimation;
                    return sectionTop < 0 ? section.classList.add('ativo') : 0;
                });
            };

            scrollOnViewport();
            window.addEventListener('scroll', scrollOnViewport);
        }
    },
};

export default {
    init: Methods.init,
};
