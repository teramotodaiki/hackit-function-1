// 4. 自由のキャンバス
var sketch = require('sketch');


background(255);

// 最後の関数は、sketch.draw だ！
// sketch.draw をつかうと、マウスで絵を描くこともできるよ
// 残りの時間で、このキャンバスに自由に絵を描こう！

sketch.draw = function () {

  tegaki();

};

function tegaki() {
  line(pmouseX, pmouseY, mouseX, mouseY);
}
