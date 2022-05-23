
console.log("Webpack is working!")
const MovingObject =require("./moving_object.js")
window.MovingObject = MovingObject;

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById('game-canvas');
    canvas.width = 500,
    canvas.height =500;
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = "teal";
    ctx.fillRect(0 , 0, canvas.width,canvas.height)


    ctx.beginPath();
    ctx.arc(250,250, 100, 0, 2 * Math.PI)
    ctx.strokeStyle = "orange"
    ctx.lineWidth =40
    ctx.stroke()
})