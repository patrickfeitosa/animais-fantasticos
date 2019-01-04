const Methods = {
    init() {
        Methods.smoothScroll();
    },
    smoothScroll() {
        const linksInternos = document.querySelectorAll('.js--menu a[href^="#"]');
        if (linksInternos.length) {
            linksInternos.forEach(link => link.addEventListener('click', Methods.scrollToSection));
        }
    },
    scrollToSection(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const sectionToScroll = document.querySelector(href);

        sectionToScroll.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });

        // Alternative Method
        // const topDistance = sectionToScroll.offsetTop;
        // window.scrollTo({
        //     left: 0,
        //     top: topDistance,
        //     behavior: 'smooth'
        // })
    },
};

export default {
    init: Methods.init,
};
