const Utils = require("./utils")
const Index = require("./index")

function MovingObject (pos,vel,radius,color){
    this.pos= pos;
    this.vel =vel;
    this.radius = radius;
    this.color=color;

    function move() {
        this.pos[0] +=vel[0];
        this.pos[1] += vel[1];
    }
}

function draw() {
    
    ctx.beginPath();
    ctx.arc(0,1, 75, 0, 2 * Math.PI)
    ctx.strokeStyle = "yellow";
    ctx.lineWidth =40
    ctx.stroke()
}

window.MovingObject = MovingObject;
module.exports = MovingObject;

