let ball = new Ball(250,150,10,"blue");
let bar = new Bar(100,20,"red");
let bricks = new Brick();
let myCanvas = document.querySelector("#myCanvas");
let ctx = myCanvas.getContext('2d');

// --------------------------Event Keyboard---------------------

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

// ----------------------------Bar----------------------------

function barCollision(){
    if(ball.x + ball.radius >= bar.x && 
        ball.y + ball.radius >= bar.y &&    
        ball.x + ball.radius <= bar.x + bar.width){

        ball.speedY = -ball.speedY;
    }
}

// ----------------------------Bricks------------------------

// Tạo danh sách Bricks

function creatBricksList(){
    for(let i = 0; i < bricks.totalColum; i++){
        for(let j = 0; j < bricks.totalRow; j++){
            bricks.brickList.push({
                x: bricks.offsetX + i * (bricks.width + bricks.margin),
                y: bricks.offsetY + j * (bricks.height + bricks.margin),
                isbroken: false,
            })
        }
    }
}

creatBricksList()

// xử lý va chạm

let score = 0;
let scoreball = document.querySelector(".scores");
function BricksCollision(){
    bricks.brickList.forEach(function(element){
        if(!element.isbroken){
            if(ball.x >= element.x &&
                ball.x <= element.x + bricks.width &&
                ball.y + ball.radius >= element.y &&
                ball.y - ball.radius <= element.y + bricks.height){
                ball.speedY = -ball.speedY;
                element.isbroken = true;
                score += 1;
                scoreball.textContent = `${score}`;
            }
        }
    })
}

function play(){
    ball.checkGame();
    bricks.checkEndGame();

    if(!ball.isGameOver && !bricks.isEndGame){
        ball.move();
        ball.updateBall();
        ball.ballColiision();

        bar.drawBar();
        bar.moveBar();
        barCollision();

        bricks.drawBrick();
        BricksCollision();

        requestAnimationFrame(play); // Giống đệ quy
    }else{
        // alert("End Game!");
        score = 0;
        ball.isGameOver == true;
        bricks.isEndGame == true;
    }
}

play();

let reStart = document.querySelector(".btn-start");

function startGameAgain(){
    ball.x = 150;
    ball.y = 150;
    
}

reStart.onclick = function(){
    // window.location.reload();
    ctx.clearRect(0,0,myCanvas.width,myCanvas.height);
    ball = new Ball(250,150,10,"blue");
    bar = new Bar(100,20,"red");
    bricks = new Brick();
    score = 0;
    play();
}






