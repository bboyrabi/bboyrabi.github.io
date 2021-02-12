'use strict';
// ------------------------------------------------------------------------
// 文字列は文字の「配列」で、
// JSでは色々な変数型を一緒に配列に格納できるという例
// ------------------------------------------------------------------------
console.log('abcde'[4]);
console.log(['4', 3, 'あいう', {}]);

// ------------------------------------------------------------------------
// それぞれの名前をコンソールに出力します
// ------------------------------------------------------------------------
const studentNames = ['明智光秀', '織田信長', '豊臣秀吉'];
// for (let i = 0; i < studentNames.length; i++) {
//     console.log(studentNames[i]);
// }

// ------------------------------------------------------------------------
// forEach文の例
// ------------------------------------------------------------------------
// studentNames.forEach(function(name) {console.log(name)});
// studentNames.forEach(name => console.log(name));

// ------------------------------------------------------------------------
// 選択ソート
// ------------------------------------------------------------------------
// const mathPoints = [71, 86, 65];
// for (let i = 0; i < mathPoints.length; i++) {
//     let maxIndex = i;
//     for (let j = i + 1; j < mathPoints.length; j++) {
//         if(mathPoints[maxIndex] < mathPoints[j]) {
//             maxIndex = j;
//         }
//     }
//     let tmp = mathPoints[maxIndex];
//     mathPoints[maxIndex] = mathPoints[i];
//     mathPoints[i] = tmp;
// }
// mathPoints.forEach(r => console.log(r));

// ------------------------------------------------------------------------
// 生徒の配列とオブジェクト
// ------------------------------------------------------------------------
const students = [
    {
        no: 1,
        name: '明智光秀',
        jaPoint: 74,
        mathPoint: 71,
        enPoint: 70
    },
    {
        no: 2,
        name: '織田信長',
        jaPoint: 78,
        mathPoint: 86,
        enPoint: 67
    },
    {
        no: 3,
        name: '豊臣秀吉',
        jaPoint: 87,
        mathPoint: 65,
        enPoint: 56
    }
];

// ------------------------------------------------------------------------
// 総合の得点を集計します。
// ------------------------------------------------------------------------
let total = 0;
// for (let i = 0; i < students.length; i++) {
//     // 各教科の合計点をオブジェクトに追加します。
//     students[i].sum =
//         students[i].jaPoint + students[i].mathPoint + students[i].enPoint;
//     total += students[i].sum;
// }

// ------------------------------------------------------------------------
// 平均点を出力します。
// ------------------------------------------------------------------------
// console.log(`クラスの全教科の平均点は${Math.round(total / students.length)}点です。`);

// ------------------------------------------------------------------------
// 総合の得点順位を降順に並べ替えます。
// ------------------------------------------------------------------------
// for (let i = 0; i < students.length; i++) {
//     let maxIndex = i;
//     for (let j = i + 1; j < students.length; j++) {
//         if(students[maxIndex].sum < students[j].sum) {
//             maxIndex = j;
//         }
//     }
//     let tmp = students[maxIndex];
//     students[maxIndex] = students[i];
//     students[i] = tmp;
// }

// ------------------------------------------------------------------------
// 結果を表示します。
// ------------------------------------------------------------------------
// for (let i = 0; i < students.length; i++) {
//     console.log(`【全教科における順位】第${i + 1}位: ${students[i].name} ${students[i].sum}点`);
// }


// 国語の平均点は？
// 数学の平均点は？
// 英語の平均点は？
// 各教科の順位は？

// また同じ様な処理を書くの？
// => いいえ。関数を定義します。

/**
 * 配列内のオブジェクトの指定されたメンバーの平均点を計算して結果を返却します。
 * 結果は四捨五入された整数を返します。
 * 
 * @param {array} array 
 * @param {string} member 
 */
// function calcAvg(array = [], member = '') {
//     let total = 0;
//     for (let i = 0; i < array.length; i++) {
//         if (array[i][member])
//             total += array[i][member];
//     }
//     return Math.round(total / array.length) ;
// }

/**
 * 配列内のオブジェクトの指定されたメンバーの降順に引数の配列を並べ替えます。
 * 
 * @param {array} array 
 * @param {string} member 
 */
// function orderDesc(array = [], member = '') {
//     for (let i = 0; i < array.length; i++) {
//         let maxIndex = i;
//         for (let j = i + 1; j < array.length; j++) {
//             if(array[maxIndex][member] < array[j][member]) {
//                 maxIndex = j;
//             }
//         }
//         let tmp = array[maxIndex];
//         array[maxIndex] = array[i];
//         array[i] = tmp;
//     }
// }

/**
 * ランキングをコンソールに出力します。
 * 
 * @param {array} array 
 * @param {string} member 
 */
// function viewRanking(array = [], member = '') {
//     for (let i = 0; i < array.length; i++) {
//         console.log(`第${i + 1}位: ${array[i].name} ${students[i][member]}点`);
//     }
// }
// ------------------------------------------------------------------------
// 関数を使用したそれぞれの処理です。
// ------------------------------------------------------------------------
// 国語の平均点は？
// const jaTotal = calcAvg(students, 'jaPoint');
// console.log(`国語の平均点は${jaTotal}点です。`);

// 数学の平均点は？
// const mathTotal = calcAvg(students, 'mathPoint');
// console.log(`数学の平均点は${mathTotal}点です。`);

// 英語の平均点は？
// const enTotal = calcAvg(students, 'enPoint');
// console.log(`英語の平均点は${enTotal}点です。`);

// 各教科の順位
// 国語
// orderDesc(students, 'jaPoint');
// console.log('【国語の順位】');
// viewRanking(students, 'jaPoint');

// 数学
// orderDesc(students, 'mathPoint');
// console.log('【数学の順位】');
// viewRanking(students, 'mathPoint');

// 英語
// orderDesc(students, 'enPoint');
// console.log('【英語の順位】');
// viewRanking(students, 'enPoint');