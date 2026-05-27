const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;
var canvasBound = canvas.getBoundingClientRect();
var counter = 0;
var mouse = new Image();
mouse.src = "media/mouse-cursor-png-23335.png";
var iType = 0;
var txt = "Marc0-dev@" + navigator.platform + ":~$ cd Projects";
var speed = 50;
const TRAIL_LENGTH = 20;
const trail = [];
const cursor = {
    x: innerWidth/2,
    y:innerHeight/2,
};

addEventListener("resize", (e) => {
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
    location.reload();
});

addEventListener("mousemove", (e) => {
  cursor.x = e.pageX;
  cursor.y = e.pageY;
});

addEventListener(
  "touchmove",
  (e) => {
    e.preventDefault();
    cursor.x = e.touches[0].pageX;
    cursor.y = e.touches[0].pageY;
  },
  { passive: false },
);

function typeWriter() {
  if (iType < txt.length) {
    document.getElementById("typewriterLink").innerHTML += txt.charAt(iType);
    iType++;
    setTimeout(typeWriter, speed);
  }
}

function init(){
    typeWriter();
    window.requestAnimationFrame(draw);
}

function draw() {
  ctx.globalCompositeOperation = "destination-over";
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  trail.unshift({ x: cursor.x, y: cursor.y });
  if (trail.length > TRAIL_LENGTH) {
    trail.pop();
  }
  for (let i = 0; i < trail.length; i++) {
    const opacity = 1 - i / TRAIL_LENGTH;
    const size = 16 * opacity;
    ctx.globalAlpha = opacity;
    ctx.drawImage(
      mouse,
      trail[i].x - canvasBound.left - size / 2 + 8,
      trail[i].y - canvasBound.top - size / 2 + 8,
      size,
      size
    );
  }
  ctx.globalAlpha = 1;
  window.requestAnimationFrame(draw);
}

init();
