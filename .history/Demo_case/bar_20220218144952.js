class Bar{
    constructor(witdh, height, color){
        this.witdh = witdh;
        this.height = height;
        this.x = 200;
        this.y = this.canvas.height;
        this.color = color;
        this.speed = 5;
        this.canvas = document.getElementById("myCanvas");
        this.ctx = this.canvas.getContext('2d');
    }
    
    drawBar(){
        this.ctx.beginPath();
        this.rect(this.x, this.y, this.witdh, this.height)
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        this.ctx.closePath();
    }
}