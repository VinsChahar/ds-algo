function isPalindrom(str) {
    const revStr = str.split('').reverse().join('');

    const isPan = str === revStr;

    return isPan
}


function isPalindromForLoop(str) {
    const len = str.length;

    for (let i = 0; i < len / 2; i++) {
        console.log(str[i])
        if (str[i] !== str[len - 1 - i])
            return false;
        else
            return true;

    }
}

console.log(isPalindrom('eyel'));
console.log(isPalindromForLoop('A man, a plan, a canal. Panama'));