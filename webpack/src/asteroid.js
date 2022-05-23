const Utils = require("./utils")
const MovingObject = require("./moving_object")

function Asteroid(pos = [250, 0], vel = [0,50], radius = 50, color = "black") {
    const canvas = document.getElementById('game-canvas');
    canvas.width = 500,
    canvas.height =500;

    this.context = canvas.getContext("2d");
    this.pos = pos;
    this.vel = vel;
    this.radius = radius;
    this.color = color;
}
Utils.inherits(Asteroid, MovingObject);

window.Asteroid = Asteroid;
module.exports = Asteroid;