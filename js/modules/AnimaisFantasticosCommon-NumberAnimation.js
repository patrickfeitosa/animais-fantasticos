const Methods = {
    init() {
        Methods.observerAction();
    },
    incrementNumbers() {
        document.querySelectorAll('[data-numero]').forEach((el) => {
            const totalNumber = +el.textContent;
            const toIncrimentIn = Math.floor(totalNumber / 100);
            let start = 0;
            const timer = setInterval(() => {
                start += toIncrimentIn;
                el.textContent = start;
                if (start > totalNumber) {
                    el.textContent = totalNumber;
                    clearInterval(timer);
                }
            }, 25 * Math.random());
        });
    },
    observerAction() {
        let observer;
        const handleMutation = (mutation) => {
            if (mutation[0].target.classList.contains('ativo')) {
                Methods.incrementNumbers();
                observer.disconnect();
            }
        };
        observer = new MutationObserver(handleMutation);
        observer.observe(document.querySelector('.numeros'), { attributes: true });
    },
};

export default {
    init: Methods.init,
};
