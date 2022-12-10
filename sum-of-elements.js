/* 1. using reduce */

function sumReduce(arr) {
    return arr.reduce((acc, curr) => (acc += curr), 0);
}


console.log(sumReduce([1, 2, 3, 4, 4, 4]));

