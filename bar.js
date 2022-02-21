class Bar{
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.x = 200;
        this.y = 470;
        this.color = color;
        this.speed = 5;
        this.isMovingLeft = false;
        this.isMovingRight = false;
        this.canvas = document.getElementById("myCanvas");
        this.ctx = this.canvas.getContext('2d');
    }
    
    drawBar(){
        this.ctx.beginPath();
        this.ctx.rect(this.x, this.y, this.width, this.height);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        this.ctx.closePath();
    }


    moveBar(){
        if(this.isMovingLeft && this.x > 0){
            this.x -= this.speed;
        }
        if(this.isMovingRight && this.x < this.canvas.width - this.width){
                this.x += this.speed;
            }
        }
}