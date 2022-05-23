const Utils = require("./utils")
const MovingObject = require("./moving_object")

function Asteroid({pos = [250, 0], vel = [0,10], radius = 50, color = "black"}) {
    this.pos = pos;
    this.vel = vel;
    this.radius = radius;
    this.color = color;

    Utils.inherits(Asteroid, MovingObject);
}


window.Asteroid = Asteroid;
module.exports = Asteroid;