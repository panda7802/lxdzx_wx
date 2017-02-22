// ttools.js
var util = require('./util.js')

function deb(msg){
    console.log(util.formatTime(new Date()) + "  " + msg);
}

function err(msg){
    console.error(util.formatTime(new Date()) + "  " + msg);
}


module.exports = {
  deb: deb,
  err: err
}
