// let ball1 = new Ball(20,20,20,"blue")
// ball1.draw()

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

ctx.moveTo(0,0);
ctx.lineTo(100,100);
ctx.stroke();