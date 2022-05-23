const MovingObject = require("./moving_object")
const Asteroid = require("././asteroid")


const Utils = {
    inherits: function inherits (childClass, parentClass){
        Surrogate = function(){};
        Surrogate.prototype = parentClass.prototype;
        childClass.prototype = new Surrogate();
        childClass.prototype.constructor = childClass;
    }
};

module.exports = Utils;