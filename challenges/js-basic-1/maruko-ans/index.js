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

    const minNumApple = 3;
    const minNumOrange = 1;

    // 最低限必要な費用を計算
    const minRequiredFee = appleFee * minNumApple + orangeFee * minNumOrange;
    // 残金を計算
    let balance = fund - minRequiredFee;
    if (balance < 0) {
        // その日に預かったお金では買えないケース
        console.log(`最低でも${minRequiredFee}円必要で、${minRequiredFee - fund}円足りません。`);
    } else {
        // 今日のお小遣い
        console.log(`今日のお小遣い:${balance}円`);
        // 追加で買うことができる数を計算
        let addNumApple = 0;
        let addNumOrange = 0;
        let addNumBoth = 0;
        if(appleFee < orangeFee) {
            addNumApple = Math.floor(balance / appleFee);
        } else if (orangeFee < appleFee) {
            addNumOrange = Math.floor(balance / orangeFee);
        } else {
            // りんごとみかんの価格が同じパターン
            addNumBoth = Math.floor(balance / appleFee);
        }
        let total;
        if(addNumBoth == 0) {
            // 買えるだけ買った場合の合計額を計算
            total = ((minNumApple + addNumApple) * appleFee) + ((minNumOrange + addNumOrange) * orangeFee);
            console.log(`もっとも多く買えるパターンは、りんご${minNumApple + addNumApple}つ、みかん${minNumOrange + addNumOrange}つ: 合計${total}円`);
        } else {
            // りんごとみかんの価格が同じパターンで
            // 買えるだけ買った場合の合計額を計算
            total = ((minNumApple + addNumBoth) * appleFee) + (minNumOrange * orangeFee);
            console.log(`もっとも多く買えるパターンは、りんご${minNumApple}つ、みかん${minNumOrange}つ、更にどちらかを追加で${addNumBoth}つ: 合計${total}円`);
        }
    }
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