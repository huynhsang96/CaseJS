


// const canvas = document.getElementById("myCanvas");
// const ctx = canvas.getContext("2d");


// // Đối tượng ball
// let ball = {
//     radius: 12,
//     x: 200,
//     y: 200,
//     dx: 1,
//     dy: 3,
// }

// // Đối tượng thanh bar
// let bar = {
//     width: 100,
//     height: 10,
//     x: 200,
//     y: canvas.height - 30,
//     speed: 5,
//     isMovingLeft: false,
//     isMovingRight: false,
// }

// // Đối tượng brick
// let brick = {
//     offsetX: 20,
//     offsetY: 20,
//     margin: 20,
//     width: 60,
//     height: 20,
//     totalRow: 3,
//     totalColum: 6,
//     isBroken: false,
// }

// let brickList = []
// for(let i = 0; i < brick.totalRow; i++){
//     for(let j = 0; j < brick.totalColum; j++){
//         brickList.push(
//             {
//                 x: brick.offsetX + j * (brick.width + brick.margin),
//                 y: brick.offsetY + i * (brick.height + brick.margin),
//             }
//         )
//     }
// }

// // Vẽ ball
// function drawBall(){
//     ctx.beginPath();
//     ctx.arc(ball.x,ball.y,ball.radius,0,Math.PI*2);
//     ctx.fillStyle = "blue";
//     ctx.fill();
//     ctx.closePath();
// }

// // Vẽ thanh bar
// function drawBar(){
//     ctx.beginPath();
//     ctx.rect(bar.x,bar.y,bar.width,bar.height);
//     ctx.fillStyle = "red";
//     ctx.fill();
//     ctx.closePath();
// }

// // Width = 2 * OFFSET + 6 * WIDTH + 5 * MARGIN
// // OFFSET = MARGIN = 20
// // WIDTH = 60
// // HEIGHT = 20

// // Vẽ đối tượng Brick
// function drawBrick(){
//     brickList.forEach(element => {
//         if(!element.isBroken){
//             ctx.beginPath()
//             ctx.rect(
//                 element.x,
//                 element.y,
//                 brick.width,
//                 brick.height,
//                 )
//             ctx.fillStyle = "green"
//             ctx.fill()
//             ctx.closePath()
//         }
//     });
// }

// // Xử lý va chạm Ball
// function collision(){
//     if(ball.x + ball.radius > canvas.width || ball.x < ball.radius){
//         ball.dx = -ball.dx
//     }

//     if(ball.y < ball.radius){
//         ball.dy = -ball.dy
//     }
// }

// function updateBall(){
//     ball.x += ball.dx;
//     ball.y += ball.dy;
// }

// // Xử lý va chạm Bar
// function collisionBar(){
//     if(ball.x + ball.radius >= bar.x && ball.x + ball.radius <= bar.x + bar.width && ball.y + ball.radius >= bar.y ){
//         ball.dy = -ball.dy;
//     }
// }

// // Xử lý va chạm bricks
// function collisionBricks(){
//     brickList.forEach(element =>{
//         if(!element.isBroken){
//             if(ball.x + ball.radius >= element.x && ball.x + ball.radius <= element.x + brick.width && ball.y + ball.radius >= element.y && ball.y + ball.radius <= element.y + brick.height){
//                 ball.dy = -ball.dy;
//                 element.isBroken = true;
//             }
//         }
//     })
// }

// // Di chuyển thanh Bar
// function moveBar(){
//     if(bar.isMovingLeft && bar.x > 0){
//         bar.x -= bar.speed;
//     }else if(bar.isMovingRight && bar.x < canvas.width - bar.width){
//         bar.x += bar.speed
//     }
// }


// // Xử lý thua game
// let isGameOver = false;

// // xử lý thắng Game
// let isEndGame = false;

// function endGame(){
//     isEndGame = brickList.every(element =>{
//         return element.isBroken === true;
//     })
    
// }
// console.log(isEndGame)

// function checkGame(){
//     if(ball.y + ball.radius > canvas.height){
//         isGameOver = true;
//     }
//     if(isEndGame){
//         isGameOver = true;
//     }
// }

// function alerGameOver(){
//     console.log("Game Over");
// }

// function behavior(){
//     if(!isGameOver){
//         ctx.clearRect(0,0,canvas.width,canvas.height);
//         drawBall();
//         drawBar();
//         drawBrick();
    
//         moveBar();
    
//         collision();

//         collisionBar();

//         collisionBricks();
        
//         updateBall();
        
//         checkGame();

//         endGame();
    
//         requestAnimationFrame(behavior);
//     } else{
//         alerGameOver();
//     }
    
// }

// behavior()



// document.addEventListener("keydown",function(e){
//     if(e.keyCode === 37){
//         bar.isMovingLeft = true;
//     }
//     if(e.keyCode === 39){
//         bar.isMovingRight = true;
//     }
// })


// document.addEventListener("keyup",function(e){
//     if(e.keyCode === 37){
//         bar.isMovingLeft = false;
//     }
//     if(e.keyCode === 39){
    //         bar.isMovingRight = false;
    //     }
    // })

    // làm hướng dẫn, thời gian, tính điểm, tính thời gian

    function Ball(mapWidth, mapHeight) {
        this.mapWidth = mapWidth;
        this.mapHeight = mapHeight;
    
        this.radius = 10;
        this.speedX = 3;
        this.speedY = -3;
    
        this.cx = Math.floor(mapWidth/2);
        this.cy = mapHeight-100;
    
        this.color = "green";
        this.running = true;
    }
    Ball.prototype.update = function() {
        if (this.running) {
            this.cx += this.speedX;
            this.cy += this.speedY;
    
            if (this.cx - this.radius < 0 || this.cx + this.radius > this.mapWidth) this.speedX = -this.speedX;
    
            if (this.cy - this.radius < 0) this.speedY = -this.speedY;
            else if (this.cy + this.radius > this.mapHeight) this.running = false;
            //this.speedY = -this.speedY;
        }
    }
    Ball.prototype.draw = function(context) {
        context.beginPath();
        context.fillStyle = this.color;
        context.arc(this.cx, this.cy, this.radius, 0, Math.PI * 2, true);
        context.closePath();
        context.fill();
    }
    Ball.prototype.collide = function(rect) {
        if (!this.running) return;
        var p = {
            x: this.cx,
            y: this.cy
        };
    
        if (p.x < rect.left) p.x = rect.left;
        else if (p.x > rect.right) p.x = rect.right;
    
        if (p.y < rect.top) p.y = rect.top;
        else if (p.y > rect.bottom) p.y = rect.bottom;
    
        var dx = this.cx - p.x;
        var dy = this.cy - p.y;
    
        var isCollided = (dx * dx + dy * dy) <= this.radius * this.radius;
    
        if (isCollided) {
    
            if (p.x == rect.left || p.x == rect.right) this.speedX = -this.speedX;
    
            if (p.y == rect.top || p.y == rect.bottom) this.speedY = -this.speedY;
    
            //_output.innerHTML = "("+p.x+ " "+p.y+")";                    
        }
        return isCollided;
    }
    
    /*************** Rect *******************/
    
    function Rect(left, top, width, height, color) {
        this.MAX_SPEED = 4;
        this.width = width;
        this.height = height;
    
        this.left = left;
        this.top = top;
        this.right = this.left + width;
        this.bottom = this.top + height;
    
        this.color = color;
    }
    Rect.prototype.moveTo = function(x) {
    
        this.left = x - this.width / 2;
    
        //this.left = centerX;        
        this.right = this.left + this.width;
    }
    
    Rect.prototype.draw = function(context) {
        context.fillStyle = this.color;
        context.fillRect(this.left, this.top, this.width, this.height);
    }
    
    /************** Main *************/
    var FPS = 60;
    var BRICK_WIDTH = 40;
    var BRICK_HEIGHT = 20;
    var BRICK_ROWS = 3;
    var BRICK_COLS = 8;
    
    
    var _canvas;
    var _context;
    var _ball;
    var _paddle;
    var _bricks = [];
    var _timer;
    
    function canvas_mousemove(e) {
        var x = e.pageX - _canvas.offsetLeft;
    
        _paddle.moveTo(x);
    }
    
    function clear() {
        _context.clearRect(0, 0, _canvas.width, _canvas.height);
    }
    
    function draw() {
        clear();
    
        for (var i = 0; i < BRICK_ROWS; i++) {
            for (var j = 0; j < BRICK_COLS; j++) {
                if (_bricks[i][j]) _bricks[i][j].draw(_context);
            }
        }
    
        _ball.draw(_context);
        _paddle.draw(_context);
    }
    
    function update() {
        _ball.update();
    
        for (var i = 0; i < BRICK_ROWS; i++) {
            for (var j = 0; j < BRICK_COLS; j++) {
                if (_bricks[i][j] && _ball.collide(_bricks[i][j])) _bricks[i][j] = null;
            }
        }
        _ball.collide(_paddle);
        draw();
    }
    
    function init() {
        var paddleWidth = 100;
        var paddleHeight = 20;
        _output = document.getElementById("output");
        _canvas = document.getElementById("canvas");
        _canvas.onmousemove = canvas_mousemove;
        _context = _canvas.getContext("2d");
    
        _ball = new Ball(_canvas.width, _canvas.height);
        _paddle = new Rect((_canvas.width - paddleWidth) / 2, _canvas.height - paddleHeight - 20, paddleWidth, paddleHeight, "brown");
    
        // init bricks
        _bricks = new Array(BRICK_ROWS);
        for (var i = 0; i < BRICK_ROWS; i++) {
            _bricks[i] = new Array(BRICK_COLS);
            for (var j = 0; j < BRICK_COLS; j++) {
                _bricks[i][j] = new Rect(j * (BRICK_WIDTH + 5) + 10, i * (BRICK_HEIGHT + 5) + 10, BRICK_WIDTH, BRICK_HEIGHT, "blue");
            }
        }
    
        // start
        _timer = window.setInterval(update, 1000 / FPS);
    }
    
    
    
    
    init();