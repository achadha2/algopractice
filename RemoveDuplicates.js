var removeDuplicates = function(nums) {
  for (let i = 0; i < nums.length - 1; ) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i, 1);
    } else {
      i++;
    }
  }
  return nums;
};

let array = [1, 1, 2, 3, 4, 4, 6, 6, 6, 6, 6, 6, 6];
removeDuplicates(array);
