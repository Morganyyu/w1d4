var words = ["ground", "control", "to", "major", "tom"];

//map function
function map(arr, callback) {
  var output = [];     // create array because map output is always a new array
  for (let i = 0; i < arr.length; i++) {
    output.push(callback(arr[i]));
  }
  console.log(output);
}



map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});