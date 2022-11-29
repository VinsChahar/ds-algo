/* 1. Using for loop */

const reverseString = (str) => {
    let revStr = '';

    for (let i = str.length - 1; i >= 0; i--) {
        revStr += str[i];
    }

    return revStr;
}


/* 2. Using array reverse methods */

const reverseStr = (str) => {
    let revStr = '';
    revStr = str.split('').reverse().join('');

    return revStr;
};

console.log(reverseString('Hello world!'));
console.log(reverseStr('Hello world!'));


