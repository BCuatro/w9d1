function MovingObject (pos,vel,radius,color){
    this.pos= pos;
    this.vel =vel;
    this.radius = radius;
    this.color=color;
}

MovingObject.prototype.move = function() {
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
    this.draw(this.context);
}

MovingObject.prototype.draw = function(ctx) {
    ctx.beginPath();
    ctx.arc(this.pos[0],this.pos[1], this.radius, 0, 2 * Math.PI)
    ctx.strokeStyle = "black";
    ctx.lineWidth =40
    ctx.stroke()
}

window.MovingObject = MovingObject;
module.exports = MovingObject;

