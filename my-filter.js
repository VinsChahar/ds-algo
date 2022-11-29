/* 1. using for loop */
Array.prototype.myFilter = function (calback) {
    const newArray = [];

    for (let i = 0; i < this.length; i++) {
        const element = this[i];
        calback(element) ? newArray.push(this[i]) : '';
    }

    return newArray;
};


/* using foreach loop */
Array.prototype.myFilterForeach = function (calback) {
    const newArray = [];

    this.forEach(v => {
        calback(v) ? newArray.push(v) : '';
    });

    return newArray;
}


console.log([1, 2, 3, 4, 5].myFilter((v) => v > 3));
console.log([1, 2, 3, 4, 5].myFilterForeach((v) => v > 2));
