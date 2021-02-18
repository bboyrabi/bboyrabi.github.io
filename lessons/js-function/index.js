'use strict';

const juices = [
    {
        name: 'コーラ',
        fee: 120,
        stock: 2,
        available: false
    },
    {
        name: 'サイダー',
        fee: 120,
        stock: 5,
        available: false
    },
    {
        name: 'おいしい水',
        fee: 100,
        stock: 1,
        available: false
    },
    {
        name: 'コーヒー',
        fee: 120,
        stock: 0,
        available: false
    },
    {
        name: '大きいコーラ',
        fee: 150,
        stock: 2,
        available: false
    }
];

// [人間] 1. お金を自動販売機にいれる
const putMoney = 150; // 100円
console.log(`${putMoney}円が入りました。`);

// [自動販売機] 1. 金額を確認
updateJuicesAvailable(putMoney);

// [自動販売機] 2. 販売可能なジュースを点灯
viewJuicesAvailable();

// [人間] 2. ジュースを選ぶ
const chooce = 'おいしい水';

// [自動販売機] 3. ジュースを出す
putOutJuice(chooce);

// [自動販売機] 4. 釣り銭を出す
returnChange(chooce, putMoney);

/**
 * 引数の金額・在庫数に応じて jouices配列の available を更新します。
 * 
 * @param {number} amount 金額
 */
function updateJuicesAvailable(amount = 0) {
    if (amount) {
        for (let i = 0; i < juices.length; i++) {
            if (juices[i].stock > 0 && juices[i].fee <= amount)
                juices[i].available = true;
        }
    }
}

/**
 * 販売可能なジュースを表示します。
 */
function viewJuicesAvailable() {
    for (let i = 0; i < juices.length; i++) {
        if(juices[i].available)
            console.log(`⭕ ${juices[i].name} ¥${juices[i].fee}`);
    }
}

/**
 * 引数のnameと一致するジュースを出して、在庫数をデクリメントします。
 * 
 * @param {string}} name ジュース名
 */
function putOutJuice(name) {
    if(name) {
        for (let i = 0; i < juices.length; i++) {
            if(juices[i].name === name) {
                console.log(`ガコンガコン（${name}を出した）`);
                juices[i].stock--;
                break;
            }
        }
    }
}

/**
 * お釣りを計算し、お釣りがある場合は返金します。
 * 
 * @param {string} name ジュース名
 * @param {number} putMoney 人間がいれた金額
 */
function returnChange(name, putMoney) {
    let change = 0; // お釣り
    if(name && putMoney) {
        for (let i = 0; i < juices.length; i++) {
            if(juices[i].name === name) {
                change = putMoney - juices[i].fee;
                break;
            }
        }
        if(change)
        console.log(`チャリンチャリン（お釣り¥${change}を出した）`);
    }
}