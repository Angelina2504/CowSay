const userInfo = require('./information');

const cowsay = require("cowsay");

console.log(cowsay.say({
    text : `I am ${userInfo.name} and from ${userInfo.campus} campus`,
    e : "oO",
    T : "U "
}));