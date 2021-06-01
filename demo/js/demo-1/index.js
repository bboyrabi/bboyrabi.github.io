'use strict';

const typingSentenses = [
    'JavaScriptは',
    'ブラウザで実行できる',
    '唯一のプログラミング言語です。'
];

const startTypeWriter = (index = 0) => {

    if (index >= typingSentenses.length) {
        setTimeout(() => {
            startTypeWriter();
        }, 3000);
        return true;
    }

    const ele = document.getElementById('typewriter');
    typeWriter(ele, typingSentenses[index]);

    setTimeout(() => {
        startTypeWriter(index + 1);
    }, 3000);

}

const typeWriter = (element, sentense, index = 0) => {

    if (index > sentense.length)
        return true;

    setTimeout(() => {
        element.innerText = sentense.substring(0, index);
        typeWriter(element, sentense, index + 1);
    }, 100);

}

window.addEventListener('load', () => {
    startTypeWriter();
});