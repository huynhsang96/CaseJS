class Ball{
    constructor(){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.canvas = document.querySelector("#myCanvas");
        this.ctx = this.canvas.getContext('2d');
    }

    draw(){
        this.ctx.beginPath();
        this.ctx.fillStyle = this.color;
        this.ctx.arc(this.x, this.y, this.radius, this)
    }
}