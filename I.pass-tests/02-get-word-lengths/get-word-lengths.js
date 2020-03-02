var getWordLengths = function (someWords) {
    someWordsLength = [...someWords];
    someWordsLength.forEach(function (v, i, someWordsLength) { someWordsLength[i] = v.length; });
    return someWordsLength;
};

module.exports = getWordLengths;
