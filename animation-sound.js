var mySound;
var col;

function preload() {
  soundFormats('mp3', 'ogg');
  mySound = loadSound('Piano.mp3');
}
function setup() {
  createCanvas(400, 400)
  colorMode = HSB;
  mySound.setVolume(0.5);
  col = color(0,0,100);
}


var b = 20;
var changeInB = 4;
var c = 40;
var changeInC = 4;
var d = 60;
var changeInD = 4;
var e = 80;
var changeInE = 4;
var f = 100;
var changeInF = 4;
var g = 120;
var changeInG = 4;
var h = 140;
var changeInH = 4;
var i = 160;
var changeInI = 4;
var j = 180;
var changeInJ = 4;
var k = 200;
var changeInK = 4;
var l = 220;
var changeInL = 4;
var m = 240;
var changeInM = 4;
var n = 260;
var changeInN = 4;
var o = 280;
var changeInO = 4;
var p = 300;
var changeInP = 4;
var q = 320;
var changeInQ = 4;
var r = 340;
var changeInR = 4;
var s = 360;
var changeInS = 4;
var t = 380;
var changeInT = 4;

function draw() {
  background(0);
  stroke(col);
  strokeWeight(5);


  line (120, b, 120, 400);
  b = b + changeInB;
  if (b > width) {
    changeInB = -4;
  }
  if (b < 0) {
    changeInB = 4;
    mySound.play();
  } 
  line (130, c, 130, 400);
  c = c + changeInC;
  if (c > width) {
    changeInC = -4;
  }
  
  if (c < 0) {
    changeInC = 4;
    mySound.play();
  }
  line (140, d, 140, 400);
  d = d + changeInD;
  if (d > width) {
    changeInD = -4;
  }
  
  if (d < 0) {
    changeInD = 4;
    mySound.play();
  }
  
  line (150, e, 150, 400);
  e = e + changeInE;
  if (e > width) {
    changeInE = -4;
  }
  
  if (e < 0) {
    changeInE = 4;
    mySound.play();
  }
  line (160, f, 160, 400);
  f = f + changeInF;
  if (f > width) {
    changeInF = -4;
  }
  
  if (f < 0) {
    changeInF = 4;
    mySound.play();
  }
  line (170, g, 170, 400);
  g = g + changeInG;
  if (g > width) {
    changeInG = -4;
  }
  
  if (g < 0) {
    changeInG = 4;
    mySound.play();
  }
  line (180, h, 180, 400);
   h = h + changeInH;
  if (h > width) {
    changeInH = -4;
  }
  
  if (h < 0) {
    changeInH = 4;
    mySound.play();
  }
  line (190, i, 190, 400);
  i = i + changeInI;
  if (i > width) {
    changeInI = -4;
  }
  
  if (i < 0) {
    changeInI = 4;
    mySound.play();
  }
  line (200, j, 200, 400);
  j = j + changeInJ;
  if (j > width) {
    changeInJ = -4;
  }
  
  if (j < 0) {
    changeInJ = 4;
    mySound.play();
  }
  line (210, k, 210, 400);
   k = k + changeInK;
  if (k > width) {
    changeInK = -4;
  }
  
  if (k < 0) {
    changeInK = 4;
    mySound.play();
  }
  line (220, l, 220, 400);
  l = l + changeInL;
  if (l > width) {
    changeInL = -4;
  }
  
  if (l < 0) {
    changeInL = 4;
    mySound.play();
  }
  line (230, m, 230, 400);
 m = m + changeInM;
  if (m > width) {
    changeInM = -4;
  }
  if (m < 0) {
    changeInM = 4;
    mySound.play();
  }
  line (240, n, 240, 400);
  n = n + changeInN;
  if (n > width) {
    changeInN = -4;
  }
  
  if (n < 0) {
    changeInN = 4;
    mySound.play();
  }
  line (250, o, 250, 400);
  o = o + changeInO;
  if (o > width) {
    changeInO = -4;
  }
  
  if (o < 0) {
    changeInO = 4;
    mySound.play();
  }
  line (260, p, 260, 400);
  p = p + changeInP;
  if (p > width) {
    changeInP = -4;
  }
  
  if (p < 0) {
    changeInP = 4;
    mySound.play();
  }
  line (270, q, 270, 400);
  q = q + changeInQ;
  if (q > width) {
 	changeInQ = -4;
  }
  
  if (q < 0) {
    changeInQ = 4;
    mySound.play();
  }
  line (280, r, 280, 400);
  r = r + changeInR;
  if (r > width) {
    changeInR = -4;
  }
  
  if (r < 0) {
    changeInR = 4;
    mySound.play();
  }
  line (290, s, 290, 400);
  s = s + changeInS;
  if (s > width) {
    changeInS = -4;
  }
  
  if (s < 0) {
    changeInS = 4;
    mySound.play();
  }
  line (300, t, 300, 400);
  t = t + changeInT;
  if (t > width) {
    changeInT = -4;
  }
  if (t < 0) {
    changeInT = 4;
    mySound.play();
    col = color(random(0,255), 100, 100);
  }

}
