
function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      found([i]);   // execute callback
    }
  }
}

function actionWhenFound(e) {
  console.log("Found Waldo at index " + e + "!");
}

findWaldo(["Alice", "Waldo", "bob", "Winston"], actionWhenFound);

//found Waldo at index []!