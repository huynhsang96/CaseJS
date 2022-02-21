class Ball{
    constructor(x, y, radius, color){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.canvas = document.getElementById("myCanvas");
        this.ctx = this.canvas.getContext('2d');
    }

    draw(){
        this.ctx.beginPath();
        this.ctx.fillStyle = this.color;
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        this.ctx.fill();
        this.ctx.closePath()
    }

    move(){
        setInterval(function(){
            ball1.draw();
            this.x = this.x + 10;
        },1000)
    }
}
