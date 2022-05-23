function MovingObject ({pos,vel,radius,color}){
    this.pos= pos;
    this.vel =vel;
    this.radius = radius;
    this.color=color;

    function move() {
        this.pos[0] +=vel[0];
        this.pos[1] += vel[1];
    }
}

module.exports = MovingObject;

