function findWaldo(arr, found) {
  //goes through findWaldo list
  arr.forEach(function(name, index){
    if (name == "Waldo") {
      //callback function
      found(index);
    }
  });
}

function actionWhenFound(index) {
  //print
  console.log(`Found him at ${index}`);
}

findWaldo(["Alice", "Waldo", "Bob", "Winston"], actionWhenFound);

