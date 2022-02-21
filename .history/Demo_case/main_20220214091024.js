// let ball1 = new Ball(20,20,20,"blue")
// ball1.draw()

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");


ctx.rect(30,30,50,50);
ctx.stroke();
ctx.fillStyle = "red";
ctx.fill();
// ctx.close()

ctx.rect(30,90,50,50)
ctx.stroke()
