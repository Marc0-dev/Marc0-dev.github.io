const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;
var canvasBound = canvas.getBoundingClientRect();
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
function init(){
    window.requestAnimationFrame(draw);
}
var counter = 0;
var mouse = new Image();
mouse.src = "media/mouse-cursor-png-23335.png";
function draw(){
    ctx.globalCompositeOperation = "destination-over";
    if(counter >= 700){
        counter = 0;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    ctx.fillStyle = "aquamarine";
    ctx.drawImage(mouse, cursor.x - canvasBound.left, cursor.y - canvasBound.top, 16, 16);
    counter++;
    window.requestAnimationFrame(draw);
}
init();