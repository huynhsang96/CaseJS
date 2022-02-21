class Ball{
    constructor(x, y, radius, color){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.speedX = 1;
        this.speedY = 3;
        this.canvas = document.getElementById("myCanvas");
        this.ctx = this.canvas.getContext('2d');
    }

    draw(){
        this.ctx.beginPath();
        this.ctx.fillStyle = this.color;
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        this.ctx.closePath();
    }

    updateBall(){
        this.x += this.speedX;
        this.y += this.speedY;
    }

    ballColiision(){
        if(this.x + this.radius > this.canvas.width || this.x < this.radius){
            this.speedX = -this.speedX;
        }
        if(this.y < this.radius){
            this.speedY = -this.speedY
        }
    }

    checkGame(){
        
    }

    move(){
        this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height); // xóa canvas
        this.draw();
    }
}
