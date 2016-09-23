// 3. 応用のキャンバス
var sketch = require('sketch');

// ミッションがとどいたよ！
// 「 >_< の顔文字を描こう」

background(255);

line(000, 000, 000, 1000);

// ヒント：hutogo（不等号）という関数を作っておいたよ！
// hutogo(100, 200, 400, 500); という風に書けば、
// 左から100,上から200の場所〜左から400,上から500の場所に１本と、
// その下に、左から100,上から800の場所〜左から400,上から500の場所に１本で、
// 合計２本の線を同時に引くよ！
// キャンバスの幅と高さは、どちらも 1000 だよ

hutogo(100, 200, 400, 500);

function hutogo(x1, y1, x2, y2) {
  line(x1, y1, x2, y2);
  line(x1, y2 + y2 - y1, x2, y2);
}


// ＊書き換えたら、電源ボタンを押してコードをキャンバスに送ろう
