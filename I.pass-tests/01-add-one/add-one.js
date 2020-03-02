module.exports = function (numbers) {
    numbersOne = [...numbers];
    numbersOne.forEach(function (v, i, numbers) { numbers[i] = v + 1; });
    return numbersOne;
};
