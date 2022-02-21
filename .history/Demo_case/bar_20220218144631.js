class Bar{
    constructor(witdh, height, color){
        this.witdh = witdh;
        this.height = height;
        this.x = 200;
        this.y = this.canvas.height - 30;
        this.color = color;
        this.speed = 5;
        this.canvas = document.getElementById("myCanvas");
        this.ctx = this.canvas.getContext('2d');
    }
    
    moveBar()
}