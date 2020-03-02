function secondLargest(numbers) {
    numbers.sort(function (a, b) {
        return a - b;
    });
    return numbers[numbers.length - 2];
};


module.exports = secondLargest;