const Methods = {
    init() {
        Methods.initTabNav();
    },
    initTabNav() {
        const tabMenu = document.querySelectorAll('.js--tabmenu li');
        const tabContent = document.querySelectorAll('.js--tabcontent section');

        if (tabMenu.length && tabContent.length) {
            tabContent[0].classList.add('ativo');

            const activeTab = (index) => {
                tabContent.forEach((section) => {
                    section.classList.remove('ativo', section.dataset.animationOrientation);
                });
                const animationDirection = tabContent[index].dataset.animationOrientation;
                tabContent[index].classList.add('ativo', animationDirection);
            };

            tabMenu.forEach((itemMenu, index) => {
                itemMenu.addEventListener('click', () => {
                    activeTab(index);
                });
            });
        }
    },
};

export default {
    init: Methods.init,
};
