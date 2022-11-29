/* 1. using for loop */

const longestWord = function (str) {
    let splitStr = str.split(' ');
    let longestLength = 0;
    let bigWord;

    for (let i = 0; i < splitStr.length; i++) {
        if (splitStr[i].length > longestLength) {
            longestLength = splitStr[i].length;
            bigWord = splitStr[i];
        }
    }
    return { longestLength, bigWord };
};


/* 2. using sort methode */

const longestWordSort = function (str) {
    const splitStr = str.split(' ');

    const sortedStr = splitStr.sort((a, b) => b.length - a.length);
    return { word: sortedStr[0], length: sortedStr[0].length }
};


/* 3. using reduce methode */

const longestWordReduce = function (str) {
    const splitStr = str.split(' ');
    let bigWord = '';
    let longestLength = 0;

    splitStr.reduce((acc, curr) => {
        if (curr.length > acc.length) {
            longestLength = curr.length;
            bigWord = curr;
            return curr;
        } else {
            return acc;
        }
    }, '');

    return { longestLength, bigWord };
};


console.log(longestWord('The quick brown fox jumped over the lazy dog'))
console.log(longestWordSort('The quick brown fox jumped over the lazy dog'))
console.log(longestWordReduce('The quick brown fox jumped over the lazy dog'))