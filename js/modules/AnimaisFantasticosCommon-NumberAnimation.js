export default class NumberAnimation {
    constructor(numbers, observerTarget, observerClass) {
        this.numbers = document.querySelectorAll(numbers);
        this.observerTarget = document.querySelector(observerTarget);
        this.observerClass = observerClass;
        this.handleMutation = this.handleMutation.bind(this);
    }

    static setupNumbers(el) {
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
    }

    incrementNumbers() {
        [].map.call(this.numbers, el => this.constructor.setupNumbers(el));
    }

    handleMutation(mutation) {
        if (mutation[0].target.classList.contains(this.observerClass)) {
            this.incrementNumbers();
            this.observer.disconnect();
        }
    }

    addMutationObserver() {
        this.observer = new MutationObserver(this.handleMutation);
        this.observer.observe(this.observerTarget, { attributes: true });
    }

    init() {
        if (this.numbers.length && this.observerTarget) {
            this.addMutationObserver();
        }
        return this;
    }
}
