const Methods = {
    init() {
        Methods.fetchBitcoinValues();
    },

    async fetchBitcoinValues() {
        try {
            const bitcoinValues = await (await fetch('https://blockchain.info/ticker')).json();
            const btcPreco = document.querySelector('.btc-preco');
            btcPreco.innerText = (1000 / bitcoinValues.BRL.sell).toFixed(4);
        } catch (erro) {
            throw new Error(erro);
        }
    },
};

export default {
    init: Methods.init,
};
