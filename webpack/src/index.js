
console.log("Webpack is working!")
const MovingObject =require("./moving_object.js")
window.MovingObject = MovingObject;

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById('game-canvas');
    canvas.width = 500,
    canvas.height =500;
    const ctx = canvas.getContext("2d");

    var grd = ctx.createLinearGradient(0,0,canvas.width,canvas.height);
    grd.addColorStop(0, "teal");
    grd.addColorStop(1, "white");

    ctx.fillStyle = grd;
    ctx.fillRect(0 , 0, canvas.width,canvas.height);

    var grd2 = ctx.createLinearGradient(0,0,canvas.width,canvas.height);
    grd2.addColorStop(0, "blue");
    grd2.addColorStop(1, "red");

    ctx.beginPath();
    ctx.arc(250,250, 100, 0, 2 * Math.PI)
    ctx.strokeStyle = grd2;
    ctx.lineWidth =40
    ctx.stroke()
})