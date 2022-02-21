class  Brick{
    constructor(){
        this.offsetX = 20;
        this.offsetY = 20;
        this.margin = 20;
        this.width = 60;
        this.height = 20;
        this.totalRow = 3;
        this.totalColum = 6;
        this.isBroken = false;
        this.brickList = []
        this.canvas = document.getElementById("myCanvas");
        this.ctx = this.canvas.getContext('2d');
    }

    
    drawBrick(){
        this.brickList.forEach(element => {
            // console.log(this.brickList[0].isbroken)
            console.log(element[0])
            if(element !== this.isBroken){
                this.ctx.beginPath();
                this.ctx.rect(
                    element.x,
                    element.y,
                    this.width,
                    this.height,
                );
                this.ctx.fillStyle = "green";
                this.ctx.fill();
                this.ctx.closePath();
            }
        })
    }


}




