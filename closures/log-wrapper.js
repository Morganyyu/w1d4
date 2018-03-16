var wrapLog = function (callback, name) {
  return function() {
    var args = Array.prototype.slice.call(arguments); //converting arguments into array
    var result = callback.apply(null, args); //apply - calls a function with arguments as an array
    console.log(name + "(" + args.join(', ') + ")" + " => " + result);
    return result;    //so external functions can actually get a result, refer to line 26 & 29
  }
};

var area = function (x, y) {
  return x * y;
};


var logArea = wrapLog(area, "area");

logArea(5, 3); // area(5, 3) => 15
logArea(3, 2); // area(3, 2) => 6

var volume = function (x, y, z) {
  return x * y * z;
};
var logVolume = wrapLog(volume, "volume");


var volumeOf532 = logVolume(5, 3, 2); // volume(5, 3, 2) => 30
logVolume(3, 2, 4); // volume(3, 2, 4) => 24

// console.log(volumeOf532)    //example