'use strict';

const handleClick = (event) => {
    const value = event.currentTarget.getAttribute('data-value');
    showResult(value);
}

const showResult = (value) => {
    const ele = document.getElementById('result');
    const isCorrect = 'blue' === value;
    ele.innerText = isCorrect ?
        '正解です！' :
        `${value === 'red' ? '赤' : '黃'}は不正解です...`;
    ele.style.color = isCorrect ? 'green' : 'red';
}