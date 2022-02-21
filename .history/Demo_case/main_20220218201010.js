let ball1 = new Ball(250,150,15,"blue");
let bar1 = new Bar(100,20,"red");
let bricks = new Brick();


// --------------------------Event Keyboard---------------------

document.addEventListener("keydown",function(e){
    if(e.keyCode === 37){
        bar1.isMovingLeft = true;
    }
    if(e.keyCode === 39){
        bar1.isMovingRight = true;
    }
})


document.addEventListener("keyup",function(e){
    if(e.keyCode === 37){
        bar1.isMovingLeft = false;
    }
    if(e.keyCode === 39){
        bar1.isMovingRight = false;
    }
})

// ----------------------------Bar----------------------------

function barCollision(){
    if(ball1.x + ball1.radius >= bar1.x && 
        ball1.y + ball1.radius >= bar1.y &&    
        ball1.x + ball1.radius <= bar1.x + bar1.width){

        ball1.speedY = -ball1.speedY;
    }
}

// ----------------------------Bricks------------------------

// Tạo danh sách Bricks
for(let i = 0; i < bricks.totalColum; i++){
    for(let j = 0; j < bricks.totalRow; j++){
        bricks.brickList.push({
            x: bricks.offsetX + i * (bricks.width + bricks.margin),
            y: bricks.offsetY + j * (bricks.height + bricks.margin),
            isbroken: false,
        })
    }
}

// xử lý va chạm
function BricksCollision(){
    bricks.brickList.forEach(element =>{
        if(!element.isbroken){
            if(ball1.x + ball1.radius >= element.x && 
                ball1.x + ball1.radius <= element.x + bricks.width && 
                ball1.y + ball1.radius >= element.y && 
                ball1.y + ball1.radius <= element.y + bricks.height){
                ball1.speedY = -ball1.speedY;
                element.isbroken = true;
            }
        }
    })
}



function play(){
    ball1.checkGame();

    if(!ball1.isGameOver){
        ball1.move();
        ball1.updateBall();
        ball1.ballColiision();

        bar1.drawBar();
        bar1.moveBar();
        barCollision();

        bricks.drawBrick();
        BricksCollision()

        requestAnimationFrame(play); // Giống đệ quy
    }else{
        alert("End Game!")
    }
}
play()



