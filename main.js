//////CREATE A FUNCTION THAT TAKES AN ARRAY AND CHERRY PICKS CERTAIN VALUES OUT///////
/////(the original challenge included a stipulation to return the number of values removed)//////
/////(I solved it by pushing the removed values to a separate array and///////////
///// returning a variable = separateArray.length //////////////////

const nums = [5, 10, -3, -3, 7, 9];

function removeVal(nums, val) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums;
};

function removeVal2(nums, val) {
  let answerArray = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      answerArray.push(nums[i]);
    }
  }
  return answerArray;
}

console.log(removeVal2([3,2,2,3], 3))
console.log(removeVal2(nums, -3));

////// SOLVED ///////////