// let ball1 = new Ball(20,20,20,"blue")
// ball1.draw();
// ball1.move();

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

let radius = 10;
let x = radius;
let y = radius;

let dx = 3;
let dy = 2;

function drawBall(){
    ctx.beginPath();
    ctx.arc(x,y,radius,0,Math.PI*2);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();
}
drawBall()

function collision(){
    if(x+radius > canvas.width || x < radius ){
        dx = -dx
    }

    if(y+radius > canvas.width || y < radius ){
        dy = -dy
    }
}

function updateBall(){
    x += dx;
    y += dy;
}

function behavior(){
    ctx.clearPath(drawBall());
    drawBall()

    collision()
    
    updateBall()

    requestAnimationFrame(behavior)
}

behavior()

function drawBar(){
    ctx.beginPath();
    ctx.rect(300,300,100,20);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();
}

drawBar()



