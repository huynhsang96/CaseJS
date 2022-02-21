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
        this.ctx.clearRect(0,0,this.canvas.Width,this.canvas.height); // xóa canvas
        draw();
        this.x += 5;
        requestAnimationFrame(move);
    }
}
