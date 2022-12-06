/* 1. using splice */

function removeDuplicateValues(params) {
    let newArray = [];

    for (let i = 0; i < params.length; i++) {
        for (let j = i + 1; j < params.length; j++) {
            if (params[i] === params[j])
                newArray = params.splice(params[j]);
        }
    }

    return newArray;
}

/* 2. using Set */

function removeDuplicateValuesSet(arr) {
    let newArray = [];

    newArray = [...new Set(arr)];

    return newArray;
};


/* 3. using sort + foor loop */

function removeDuplicateValuesSort(arr) {
    let newArray = [];

    const sortedArr = arr.sort((a, b) => a - b);

    for (let i = 0; i < sortedArr.length; i++) {
        if (sortedArr[i] !== sortedArr[i + 1])
            newArray.push(sortedArr[i]);
    }

    return newArray;
}

function removeDuplicateValuesFor(arr) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] !== arr[j])
                newArray.push(arr[i]);
        }
    }

    return newArray;
}




console.log(removeDuplicateValues([2, 3, 4, 5, 6, 2, 1, 3]));
console.log(removeDuplicateValuesSet([2, 3, 4, 5, 6, 2, 1, 3]));
console.log(removeDuplicateValuesSort([2, 6, 3, 4, 5, 6, 2, 1, 3]));
console.log(removeDuplicateValuesFor([2, 6, 3, 4, 5, 6, 2, 1, 3]));