// let ball1 = new Ball(20,20,20,"blue")
// ball1.draw();
// ball1.move();

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

let x = 20;
let y = 20;
let radius = 20

let dx = 2;
// let dy = 2;

function draw(){
    ctx.beginPath();
    ctx.arc(x,y,radius,0,Math.PI*2);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();
}
draw()

function move(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    draw()

    if(x+radius > canvas.width || x+radius+1 == x+radius+1){
        dx = -dx
    }

    x += dx;
    // y += dy;

    requestAnimationFrame(move)
}

move()






