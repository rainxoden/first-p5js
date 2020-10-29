/* eslint-disable no-undef, no-unused-vars */

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Put setup code here
}

function draw() {
  const step = 30; //各ブロックの間隔

  for (let y = 0; y <= height; y += step) {
    if (y % (step * 2) == 0) {
      // y の値が (step*2) で割り切れる時
      for (let x = step; x <= width; x += step * 2) {
        noStroke(); //ストローク無効化
        fill(255, 0, 0); //図形塗り潰し: 赤
        rect(x, y, step, step); //四角形描画
      }
    } else {
      // y の値が (step*2) で割り切れない時
      for (let x = 0; x <= width; x += step * 2) {
        noStroke(); //ストローク無効化
        fill(255, 0, 0); //図形塗り潰し: 赤
        rect(x, y, step, step); //四角形描画
      }
    }
  }
}

// This Redraws the Canvas when resized
windowResized = function () {
  resizeCanvas(windowWidth, windowHeight);
};
