// let ball1 = new Ball(20,20,20,"blue")
// ball1.draw();
// ball1.move();

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

let radius = 10;
// let x = radius;
let y = radius;

let dx = 1;
let dy = 3;

let bar = {
    width: 100,
    height: 20,
    x: 200,
    y: canvas.height - 30,
    speed: 5,
    isMovingLeft: false,
    isMovingRight: false,
}

let isGameOver = false;

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

    if(y < radius){
        dy = -dy
    }
}

function collisionBar(){
    if(y+radius > bar.x){
        console.log(y+radius);
        console.log(bar.x + bar.width);
        dy = -dy;
    }
}

function updateBall(){
    x += dx;
    y += dy;
}

function moveBar(){
    if(bar.isMovingLeft && bar.x > 0){
        bar.x -= bar.speed;
    }else if(bar.isMovingRight && bar.x < canvas.width - bar.width){
        bar.x += bar.speed
    }
}

function behavior(){
    if(!isGameOver){
        ctx.clearRect(0,0,canvas.width,canvas.height);
        drawBall()
        drawBar()
    
        moveBar()
    
        collision()

        collisionBar()
        
        updateBall()
        
        if(y+radius > canvas.height){
            isGameOver = true;
        }
    
    
        requestAnimationFrame(behavior)
    } else{
        alert("Game Over")
    }
    
}

behavior()



document.addEventListener("keydown",function(e){
    if(e.keyCode === 37){
        bar.isMovingLeft = true;
    }
    if(e.keyCode === 39){
        bar.isMovingRight = true;
    }
})


document.addEventListener("keyup",function(e){
    if(e.keyCode === 37){
        bar.isMovingLeft = false;
    }
    if(e.keyCode === 39){
        bar.isMovingRight = false;
    }
})



