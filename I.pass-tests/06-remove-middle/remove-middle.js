

function removeMiddle(wordslist) {
    const index = wordslist.length - 3;
    const middleWord = [];
    middleWord.push(wordslist[index]);
    if (index > -1) {
        wordslist.splice(index, 1);
    }
    return middleWord;
};


module.exports = removeMiddle;