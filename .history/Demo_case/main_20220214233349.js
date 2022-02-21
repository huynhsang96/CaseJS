// let ball1 = new Ball(20,20,20,"blue")
// ball1.draw();
// ball1.move();

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");



let ball = {
    radius: 12,
    x: 20,
    y: 20,
    dx: 1,
    dy: 3,
}

let bar = {
    width: 100,
    height: 10,
    x: 200,
    y: canvas.height - 30,
    speed: 5,
    isMovingLeft: false,
    isMovingRight: false,
}

let brick = {
    offset: 20,
    margin: 20,
    width: 60,
    height: 20,
}

let isGameOver = false;

function drawBall(){
    ctx.beginPath();
    ctx.arc(ball.x,ball.y,ball.radius,0,Math.PI*2);
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

// Width = 2 * OFFSET + 6 * WIDTH + 5 * MARGIN
// OFFSET = MARGIN = 20
// WIDTH = 60
// HEIGHT = 20


function drawBrick(){
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 6; j++){
            ctx.beginPath()
            ctx.rect(
                brick.offset + j * (brick.width + brick.margin),
                brick.offset + i * (brick.height + brick.margin),
                brick.width,
                brick.height,
            )
            ctx.fillStyle = "green"
            ctx.fill()
            ctx.closePath()
        }
    }
}

function collision(){
    if(ball.x + ball.radius > canvas.width || ball.x < ball.radius){
        ball.dx = -ball.dx
    }

    if(ball.y < ball.radius){
        ball.dy = -ball.dy
    }
}

function updateBall(){
    ball.x += ball.dx;
    ball.y += ball.dy;
}

function collisionBar(){
    if(ball.x + ball.radius >= bar.x && ball.x + ball.radius <= bar.x + bar.width && ball.y + ball.radius >= bar.y ){
        ball.dy = -ball.dy;
    }
}


function moveBar(){
    if(bar.isMovingLeft && bar.x > 0){
        bar.x -= bar.speed;
    }else if(bar.isMovingRight && bar.x < canvas.width - bar.width){
        bar.x += bar.speed
    }
}

function checkGame(){
    if(ball.y + ball.radius > canvas.height){
        isGameOver = true;
    }
}

function alerGameOver(){
    alert("Game Over")
}


function behavior(){
    if(!isGameOver){
        ctx.clearRect(0,0,canvas.width,canvas.height);
        drawBall()
        drawBar()
        drawBrick()
    
        moveBar()
    
        collision()

        collisionBar()
        
        updateBall()
        
        checkGame()
    
        requestAnimationFrame(behavior)
    } else{
        alerGameOver()
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



