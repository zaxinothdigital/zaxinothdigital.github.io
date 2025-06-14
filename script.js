var splash = document.querySelector('#splash');

var splashTexts = [
  "zeet zeet",
  "why do they call it oven when you of in the cold food of out hot eat the food?",
  "minecraft splash text ripoff",
  "i use linux",
  "Microshaft Internet Exploder",
  "Microshaft Winblows",
  "Microshaft Edgy",
  "remember to eat food and drink water and you will be fine",
  "buy the plus pro platinum nitro extra premium deluxe plan",
  "i freaking love furnace",
  "get pro to-- NO SHUT UP GET OUT OF MY FACE",
  "keep all body parts inside of the minecart at all times. also, no flash photography",
  "use linux please it's just better",
  "eat cheese",
  "this text is colorful",
  "meap",
  "who needs capital letters? not tildearrow.",
  "there's like a 99% chance I am having soup for lunch",
  "snes music me likey",
  "i forgot to do that one thing but i can't remember what it is",
  "google has too much money, nintendo has become boring, and then there's microshaft xbrick",
  "the only thing microshaft did right is GS Wavetable Synth",
  "we peaked at XP [insert minecraft noise]",
  "if you are reading this sentence you are probably refreshing the page to read all of these or just looking at the source code",
  "meh? məh.",
  "closed hihat electric chair sound effect",
  "i want a new wii so i can homebrew",
  "bro nintendo went and promised to brick the switch 2",
  "nintendo literally made games that will expire when they move on to the switch 4",
  "go ahead and switch 2 your PC",
  "why does frozen pizza burn your mouth the most",
  "eat asbestos and live",
  "python why must you capitalize true and use underscores",
  "undefined",
  "[object Object]",
  "[object Promise]",
  "null",
  "NaN",
  "cats are evil but i like them for some reason",
];

var r = 255;
var g = 0;
var b = 0;

var dr = 0;
var dg = 1;
var db = 0;

var speed = 9;

function updateSplash() {
  splash.style.color = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
  
  r += dr * speed;
  g += dg * speed;
  b += db * speed;
  
  if (dg == 1 && g >= 255) {
    r -= g - 255;
    dg = 0;
    dr = -1;
  }
  if (dr == -1 && r <= 0) {
    dr = 0;
    b = -r;
    db = 1;
  }
  if (db == 1 && b >= 255) {
    g -= b - 255;
    db = 0;
    dg = -1;
  }
  if (dg == -1 && g <= 0) {
    dg = 0;
    r = -g;
    dr = 1;
  }
  if (dr == 1 && r >= 255) {
    dr = 0;
    b -= r - 255;
    db = -1;
  }
  if (db == -1 && b <= 0) {
    db = 0;
    g = -r;
    dg = 1;
  }
  requestAnimationFrame(updateSplash);
}

splash.innerHTML = splashTexts[Math.floor(Math.random() * splashTexts.length)];
