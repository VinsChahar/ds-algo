/* 1. using for loop */

Array.prototype.myMap = function (calback) {
    const newArray = [];
    for (let i = 0; i < this.length; i++) {
        const element = calback(this[i]);
        newArray.push(element);
    }

    return newArray;
}

/* 2. using foreach */

Array.prototype.myMapForeach = function (calback) {
    const newArray = [];
    this.forEach((v) => newArray.push(calback(v)))
    return newArray;
}


console.log([1, 2, 3].myMap((v) => v * 2));
console.log([1, 2, 3].myMapForeach((v) => v * 4));
