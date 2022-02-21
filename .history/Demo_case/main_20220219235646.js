let ball = new Ball(250,150,10,"blue");
let bar = new Bar(100,20,"red");
let bricks = new Brick();


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
        // if(!element.isbroken){
            // if(ball.x + ball.radius >= element.x && 
            //     ball.x + ball.radius <= element.x + bricks.width && 
            //     ball.y + ball.radius >= element.y && 
            //     ball.y + ball.radius <= element.y + bricks.height){
            //     ball.speedY = -ball.speedY;
            //     element.isbroken = true;
            // }

        // }
        let p = {
            Ax = ball.x;
            Ay = ball.y;
        }

        let rect_left = element.x;
        let rect_top = element.y;
        let rect_right = element.x + bricks.width;
        let rect_bottom = element.y + bricks.height;

        if(ball.x < rect_left){
            Ax = rect_left;
        } else if(ball.x > rect_right){
            Ax = rect_right;
        }

        if(ball.y < rect_top){
            Ay = rect_top;
        } else if(ball.y > rect_bottom){
            Ay = rect_bottom;
        }

        let dx = ball.x - Ax;
        let dy = ball.y - Ay;

        let isCollided = (dx * dx + dy * dy) <= ball.radius * ball.radius;

        // if(isCollided){
        //     if(Ax == rect_left || Ax == rect_right){
        //         ball.speedX = -ball.speedX;
        //         element.isbroken = true;
        //     } 
        //     if(Ay == rect_top || Ay == rect_bottom){
        //         ball.speedY = -ball.speedY;
        //         element.isbroken = true;
        //     } 
        // }
        if(isCollided){
            ball.speedY = -ball.speedY;
            element.isbroken = true;
        }
        // console.log(Ax)
        // console.log(Ay)
        // console.log(dx)
        // console.log(dy)
        console.log(rect_left)
        console.log(rect_right)
        console.log(rect_top)
        console.log(rect_bottom)

    })
}
console.log(BricksCollision())


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
        // BricksCollision()

        requestAnimationFrame(play); // Giống đệ quy
    }else{
        alert("End Game!")
    }
}
play()



