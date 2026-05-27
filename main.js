const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;
var canvasBound = canvas.getBoundingClientRect();
var counter = 0;
var mouse = new Image();
mouse.src = "media/mouse-cursor-png-23335.png";
var iType = 0;
var txt = "Marc0-dev@" + navigator.appCodeName + ":~$ cd Projects";
var speed = 50;
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

function draw(){
    ctx.globalCompositeOperation = "destination-over";
    if(counter >= 100){
        counter = 0;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    ctx.fillStyle = "aquamarine";
    ctx.drawImage(mouse, cursor.x - canvasBound.left, cursor.y - canvasBound.top, 16, 16);
    counter++;
    window.requestAnimationFrame(draw);
}

init();
