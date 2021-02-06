'use strict';

/**
 * 日毎の金額から以下のそれぞれのケースをコンソールに出力します。
 * その日、もっとも多くの果物が買えるケース。例「もっとも多く買えるパターンは、りんご４つ、みかん２つ: 合計350円」
 * その日のお小遣い。例「今日のお小遣い: 40円」
 * その日に預かったお金では買えないケース。例「最低でも360円必要で、60円足りません。」
 * 
 * @param {number} fund 本日母から渡された資金
 * @param {number} appleFee 本日のりんごの値段
 * @param {number} orangeFee 本日のみかんの値段
 */
function calcMyMoney(fund, appleFee, orangeFee) {
    console.log(`本日の資金:${fund}円、本日のりんご:${appleFee}円、本日のみかん:${orangeFee}円`);
    // ここからのコーディングが分かりません。。誰か助けてください。。。By マルコ
    
    
    // 【ヒント】
    // 数値を整数にしたい場合は、Math.floor()を使用して少数以下を切り捨てることができます。
    // 例: console.log(Math.floor(3.435)); // 「3」が出力されます。
}

function _onClickCalc() {
    const fund = +document.getElementById('fund').value;
    const apple = +document.getElementById('apple').value;
    const orange = +document.getElementById('orange').value;
    if(!fund || !apple || !orange) {
        console.log('値が未入力もしくは0が設定されています。');
        return;
    }
    calcMyMoney(fund, apple, orange);
}