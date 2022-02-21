// let ball1 = new Ball(20,20,20,"blue")
// ball1.draw();
// ball1.move();

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

let radius = 10;
let x = radius;
let y = radius;

// let dx = 3;
let dy = 3;

let bar = {
    width: 100,
    height: 20,
    x: 200,
    y: canvas.height - 30,
    speed: 5,
    
}

function drawBall(){
    ctx.beginPath();
    ctx.arc(x,y,radius,0,Math.PI*2);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();
}

function drawBar(){
    ctx.beginPath();
    ctx.rect(bar.x,bar.y,bar.width,bar.height);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();
}

function collision(){
    if(x+radius > canvas.width || x < radius){
        dx = -dx
    }

    if(y+radius > canvas.width || y < radius || y+radius > bar.y){
        dy = -dy
    }
}

function updateBall(){
    // x += dx;
    y += dy;
}


function behavior(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    drawBall()

    collision()
    
    updateBall()

    drawBar()

    requestAnimationFrame(behavior)
}

behavior()

document.addEventListener("keydown",function(e){
    console.log(e)
    if(e.keyCode === 37 && bar.x > 0){
        bar.x -= bar.speed;
        console.log(bar.x)
    }
    if(e.keyCode === 39 && bar.x < canvas.width - bar.width){
        bar.x += bar.speed;
        console.log(bar.x)
    }
})






