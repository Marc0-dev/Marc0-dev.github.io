const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;
var instructions = "";
const linkSource = {
    Github: 'Github',
    Instagram: 'Instagram',
    Tiktok: 'TikTok',
    Linkedin: 'Linkedin',
    Mail: 'Mail'
};
var linkSelect = linkSource.Github;
var canvasBound = canvas.getBoundingClientRect();
const cursor = {
    x: innerWidth/2,
    y:innerHeight/2,
};
function init(){
    window.requestAnimationFrame(draw);
}
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
addEventListener("resize", (e) => {
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
    location.reload();
});
function openLink(){
    return function openLink(event){
        switch(linkSelect){
            case linkSource.Github:
                window.open("https://github.com/Marc0-dev", '_blank').focus();
                break;
            case linkSource.Instagram:
                window.open("https://www.instagram.com/arg0n6ut6?igsh=YzVlMWFleWZzdGh3", '_blank').focus();
                break;
            case linkSource.Tiktok:
                window.open("https://www.tiktok.com/@arg0n6ut?_t=ZN-90XpGZgogkQ&_r=1", '_blank').focus();
                break;
            case linkSource.Linkedin:
                window.open("https://www.linkedin.com/in/marco-cunsolo-7310b52a5/", '_blank').focus();
                break;
            case linkSource.Mail:
                window.open("mailto:marcocunsolo8@gmail.com", '_blank').focus();
                break;
        }
    };
}
addEventListener("dblclick", openLink());
function switchLink(){
    return function switchLink(event){
            switch(linkSelect){
            case linkSource.Github:
                linkSelect = linkSource.Instagram;
                break;
            case linkSource.Instagram:
                linkSelect = linkSource.Tiktok;
                break;
            case linkSource.Tiktok:
                linkSelect = linkSource.Linkedin;
                break;
            case linkSource.Linkedin:
                linkSelect = linkSource.Mail;
                break;
            case linkSource.Mail:
                linkSelect = linkSource.Github;
        }
    };
}
addEventListener("wheel", switchLink());
function detectDoubleTapClosure() {
  let lastTap = 0;
  let timeout;
  return function detectDoubleTap(event) {
    const curTime = new Date().getTime();
    const tapLen = curTime - lastTap;
    if (tapLen < 500 && tapLen > 0) {
      switch(linkSelect){
            case linkSource.Github:
                window.open("https://github.com/Marc0-dev", '_blank').focus();
                break;
            case linkSource.Instagram:
                window.open("https://www.instagram.com/arg0n6ut6?igsh=YzVlMWFleWZzdGh3", '_blank').focus();
                break;
            case linkSource.Tiktok:
                window.open("https://www.tiktok.com/@arg0n6ut?_t=ZN-90XpGZgogkQ&_r=1", '_blank').focus();
                break;
            case linkSource.Linkedin:
                window.open("https://www.linkedin.com/in/marco-cunsolo-7310b52a5/", '_blank').focus();
                break;
            case linkSource.Mail:
                window.open("mailto:marcocunsolo8@gmail.com", '_blank').focus();
                break;
        }
      event.preventDefault();
    } else {
      timeout = setTimeout(() => {
        clearTimeout(timeout);
        switch(linkSelect){
            case linkSource.Github:
                linkSelect = linkSource.Instagram;
                break;
            case linkSource.Instagram:
                linkSelect = linkSource.Tiktok;
                break;
            case linkSource.Tiktok:
                linkSelect = linkSource.Linkedin;
                break;
            case linkSource.Linkedin:
                linkSelect = linkSource.Mail;
                break;
            case linkSource.Mail:
                linkSelect = linkSource.Github;
        }
      }, 500);
    }
    lastTap = curTime;
  };
}
/* Regex test to determine if user is on mobile */
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    instructions = "switchlink = tap, \nopenlink = doubletap";
    document.body.addEventListener('touchend', detectDoubleTapClosure(), { passive: false });
}
else{
    instructions = "switchlink = scrollwheel, \nopenlink = doubleclick";
}

function draw(){
    ctx.globalCompositeOperation = "destination-over";
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "aquamarine";
    ctx.font = "2vw Courier";
    ctx.textAlign = "left";
    ctx.fillText(instructions, canvasBound.x,canvasBound.y + canvas.height/1.5);
    ctx.textAlign= "center";
    ctx.fillText(linkSelect, cursor.x - canvasBound.left, cursor.y - canvasBound.top);
    window.requestAnimationFrame(draw);
}
init();