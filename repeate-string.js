/* 1. using for loop */

const repeateString = (str, time) => {
    let repStr = '';

    for (let i = 0; i < time; i++) {
        repStr += str;
    }

    return repStr;
};

/* 2. using while loop */

const repateStringWhile = (str, times) => {
    let repStr = '';

    while (times > 0) {
        repStr += str;
        times--;
    }

    return repStr;
};


console.log(repeateString('Hello!', 3));
console.log(repateStringWhile('Hello!', 3));