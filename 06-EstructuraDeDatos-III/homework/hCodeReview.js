const testArr = [4,8,10,15];
// depthFirstForEach(function(val){ testArr.push(val); })
BinarySearchTree.prototype.depthFirstForEach = function () {
  // in order
  function pusheada(val) {
    testArr.push(val);
  }
  this.left && this.left.depthFirstForEach(cb, order); // pause
  pusheada(this.value);
  this.right && this.right.depthFirstForEach(cb, order);
};
/*
{value:x, left:{}, right:{}}
      10
    8    15
  4


 

*/
