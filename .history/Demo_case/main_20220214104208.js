// let ball1 = new Ball(20,20,20,"blue")
// ball1.draw();
// ball1.move();

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

function draw(){
    ctx.beginPath();
    ctx.arc(20,20,20,0,Math.PI*2);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();
}

draw()



