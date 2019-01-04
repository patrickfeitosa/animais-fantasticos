const path = require('path');

module.exports = {
    entry: ['@babel/polyfill', 'whatwg-fetch', './js/AnimaisFantasticosCommon-General.js'],
    output: {
        path: path.resolve(__dirname, './dist/js'),
        filename: 'AnimaisFantasticosCommon-General.js',
    },
};
