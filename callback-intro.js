//for loop
function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      found([i]);   // execute callback
    }
  }
}

function actionWhenFound(output) {
  console.log("Found Waldo at index " + output + "!");
}

findWaldo(["Alice", "Waldo", "bob", "Winston"], actionWhenFound);

//found Waldo at index []!

//forEach
function findWaldo(arr, found) {

  arr.forEach(function(person, index) {
    if (person === "Waldo") {
      found(index);   // execute callback
    }
  })

};


function actionWhenFound(output) {
  console.log("Found Waldo at index " + output + "!");
}

findWaldo(["Alice", "Waldo", "bob", "Winston"], actionWhenFound);

