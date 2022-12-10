function numberOfWordsInString(str, w) {
    const wordCount = {};
    const splitStr = str.replace(/[\.,!\?]/g, '').split(' ');

    splitStr.forEach(word => {
        let count = 1;
        if (wordCount.hasOwnProperty(word))
            wordCount[word] = wordCount[word] + 1;
        else
            wordCount[word] = count;
    });


    for (const [key, value] of Object.entries(wordCount)) {
        if (w.toLowerCase() === key.toLowerCase())
            return value;
        else
            0;
    };
}


console.log(numberOfWordsInString('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'in'));
