class Bar{
    constructor(witdh, height, color){
        this.witdh = witdh;
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
        this.ctx.rect(this.x, this.y, this.witdh, this.height);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        this.ctx.closePath();
    }


    moveBar(){
        if(this.isMovingLeft && this.x > 0){
            this.x -= this.speed;
        }else if(
            this.isMovingRight && this.y + this.witdh < this.canvas.witdh){
                this.y += this.speed;
            }
        }
}