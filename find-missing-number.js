// find and return missing number in sequence
// if sequence is valid return -1

// Examples:
// [1,2,3,4,5,6] -> -1
// [1,2,3,5,6] -> 4
// [5, 3, 2, 1, 6] -> 4
// [1,3,5,6] -> 2
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12] -> 11

function findMissingNumber(arr) {
    /*  sort the array */
    const sortedArr = arr.sort((a, b) => a - b);
  
    const arrLen = sortedArr.length;
  
    for (let i = 0; i < arrLen; i++) {
      /* getting currect index value and incrementing by one to compare with next inxed value  */
      let nextValue = sortedArr[i] + 1;
      /* checking for the last index reached in array  */
      if(i === arrLen -1) return -1;
  
      /* checking for currect index value +1 by next index value if both are same keep running the loop until last index else return missing value */
      if (nextValue === sortedArr[i+1]) 
        continue;
      else 
        return nextValue;
    }
  }
  
  console.log(findMissingNumber([1, 2, 3, 4, 5, 6]) === -1 ? 'Test passed' : 'Test failed');
  console.log(findMissingNumber([1, 2, 3, 5, 6]) === 4 ? 'Test passed' : 'Test failed');
  console.log(findMissingNumber([5, 3, 2, 1, 6]) === 4 ? 'Test passed' : 'Test failed');
  console.log(findMissingNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12]) === 11 ? 'Test passed' : 'Test failed');