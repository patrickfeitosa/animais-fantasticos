import HelperFunctions from './AnimaisFantasticosCommon-Helpers.js';
import CommonNumberAnimation from './AnimaisFantasticosCommon-NumberAnimation.js';

const Methods = {
    init() {
        Methods.fetchAnimais('./animaisapi.json');
    },
    async fetchAnimais(url) {
        try {
            const animaisResponse = await (await fetch(url)).json();
            const numerosGrid = document.querySelector('.numeros-grid');
            animaisResponse.map((animal) => {
                const animalElement = Methods.createAnimal(animal);
                return numerosGrid.appendChild(animalElement);
            });
            CommonNumberAnimation.init();
        } catch (erro) {
            throw new Error(erro);
        }
    },
    createAnimal(animal) {
        const animalTemplate = HelperFunctions.createElementWithClass('div', 'numero-animal');
        animalTemplate.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;
        return animalTemplate;
    },
};

export default {
    init: Methods.init,
};
