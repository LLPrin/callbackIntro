
//findWaldo takes input arr & found
function findWaldo(arr, found) {
  //goes through each item findWaldo list using name in arr and it's index number
  //callback function
  arr.forEach(function(name, index){
    //if the name in the list is "Waldo"
    // call upon found func & set found value to index number
    if (name == "Waldo") {
      found(index);
    }
  });
}

//index value is passed through actionWhenFound
function actionWhenFound(index) {
  //taking the index value and printing in sentence;
  //shortened print from ("found him at: " + index);
  //print
  console.log(`Found him at ${index}`);
}

//calling upon findWaldo function
//pass through arr and actionWhenFound (= found) is used as an argument
//find Waldo in list, print out where he is in list
findWaldo(["Alice", "Waldo", "Bob", "Winston"], actionWhenFound);

