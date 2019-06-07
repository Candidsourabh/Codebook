/* 
Given an array of integers and a number to test for, 
rearrange the array such that all of the elements equal to a test value are at the end of the array. 
The other elements should remain in the same order. For example: rearrange([1, 2, 2, 3, 1], 2) => [1, 3, 1, 2, 2] 
*/
function rearrange(numberSet, signal) {
  var bufferNumberSet = [];
  var startPointer = 0;
  var lastPointer = numberSet.length - 1;
  for (x in numberSet) {
    var number = numberSet[x];
    if (number == signal) {
      bufferNumberSet[lastPointer] = number;
      lastPointer = lastPointer - 1;
    } else {
      bufferNumberSet[startPointer] = number;
      startPointer = startPointer + 1;
    }
  }
  return bufferNumberSet;
}

var ar = [1, 2, 2, 3, 1];
var s = 2;

console.log(rearrange(ar, s));
