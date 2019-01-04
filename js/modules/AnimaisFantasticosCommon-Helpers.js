
export default {
    clickOutside(element, events, callback) {
        const htmlElement = document.documentElement;
        function handleClickOutside(ev) {
            if (!element.contains(ev.target)) {
                delete element.dataset.outside;
                /* eslint-disable */
                events.forEach(userEvent => htmlElement.removeEventListener(userEvent, handleClickOutside));
                /* eslint-enable */
                callback();
            }
        }
        if (!element.hasAttribute('data-outside')) {
            events.forEach((userEvent) => {
                setTimeout(() => { htmlElement.addEventListener(userEvent, handleClickOutside); });
            });
            element.dataset.outside = '';
        }
    },
    createElementWithClass(el, className) {
        const element = document.createElement(el);
        if (className.length > 0) {
            if (Array.isArray(className)) {
                className.map(eachClass => element.classList.add(eachClass));
            } else if (className.indexOf(',') > 0) {
                className.split(',').map(eachClass => element.classList.add(eachClass.trim()));
            } else {
                element.classList.add(className);
            }
            return element;
            /* eslint-disable */
        } else {
            /* eslint-enable */
            throw new Error('The className must be a String or an Array');
        }
    },

    debounce(callback, delay) {
        let timer;
        return (...args) => {
            if (timer) clearTimeout(timer);
            timer = setTimeout(() => {
                callback(...args);
                timer = null;
            }, delay);
        };
    },
};
