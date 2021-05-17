'use strict';

window.addEventListener('load', setWrapperHeight);
window.addEventListener('load', writeCode);
window.addEventListener('resize', setWrapperHeight);

function setWrapperHeight() {
    const ele = document.getElementById('desktopWrapper');
    ele.style.height = (ele.offsetWidth / 16 * 9) + 'px';
}

function writeCode() {
    let i = 0;
    const codeList = [
        '<div><span class="code-blue">function</span> <span class="code-light-yellow">greeting</span><span class="code-yellow">() {</span></div>',
        '<div class="nest-1"><span class="code-purple">return</span> <span class="code-orange">\'PROGRABIにようこそ！\'</span>;</div>',
        '<div>}</div>',
        '<div class="spacing"></div>',
        '<div><span class="code-blue">function</span> <span class="code-light-yellow">havingFun</span><span class="code-yellow">() {</span></div>',
        '<div class="nest-1"><span class="code-blue">const</span> <span class="code-light-blue">text1</span> = <span class="code-orange">\'楽しみながら\'</span>;</div>',
        '<div class="nest-1"><span class="code-blue">const</span> <span class="code-light-blue">text2</span> = <span class="code-orange">\'プログラミングを学ぼう！\'</span>;</div>',
        '<div class="nest-1"><span class="code-purple">return</span> <span class="code-light-blue">text1</span> + <span class="code-light-blue">text2</span>;</div>',
        '<div><span class="code-yellow">}</span></div>',
        '<div class="spacing"></div>',
        '<div><span class="code-thin-blue">console</span>.<span class="code-light-yellow">log</span><span class="code-yellow">(</span><span class="code-light-yellow">greeting</span><span class="code-purple">()</span> + <span class="code-light-yellow">havingFun</span><span class="code-purple">()</span><span class="code-yellow">)</span>;</div>',
    ];

    const write = () => {
        const ele = document.getElementById('codingBody');
        if (i >= codeList.length) {
            ele.innerHTML = '';
            i = 0;
            setTimeout(write, 1000);
            return;
        }

        ele.innerHTML += codeList[i]
        i++;

        const time = i >= codeList.length ? 3000 : 800;
        setTimeout(write, time)
    }

    setTimeout(write, 1000);
}