var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];

//inputNumsIndex and inputArr aren't needed. Func only uses inputNums
//callback function
var result = input.map(function (inputNums, inputNumsIndex, inputArr){
  //Square x & y
  // add results together
  //Math square root
  return Math.sqrt(inputNums.x * inputNums.x + inputNums.y * inputNums.y);

});

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);
