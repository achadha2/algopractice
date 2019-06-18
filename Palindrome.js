var isPalindrome = function(x) {
  let array = x.toString().split("");
  let temp = [];
  let newArr = [];
  let lastItemIndex = array.length - 1;
  for (let i = 0; i < array.length / 2; i++) {
    newArr[i] = array[lastItemIndex - i];
    newArr[lastItemIndex - i] = array[i];
  }
  // console.log(newArr);
  // console.log(array);
  return newArr.join() === array.join();
};
