function addNumbers(numbers) {

    const sum = numbers.reduce(function (acc, val) { return acc + val; }, 0);
    return sum;
}
module.exports = addNumbers;
