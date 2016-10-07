//Implement your own version of the built-in array map function
//it will take 2 arguments:
//the first will be an array to map
//second will be a callback function
//map ([array], func)
// will return a new array based on results of callback

var greetings = [ "hello", "ciao", "konichiwa", "hola", "bonjour" ];

function test(elem) {
  return elem.length;
}

function merp(array, merp) {
  arr = [];
  // array.forEach(function (elem) {
    array.forEach(function (elem) {
    arr.push(merp (elem));
  });

  return arr;
}

console.log(merp(greetings, test));

