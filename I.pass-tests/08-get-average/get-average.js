// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings
function average(numbers) {
    var filtered = numbers.filter(function (item) {
        return (typeof item === "number")
    });
    const sum = filtered.reduce(function (acc, val) { return acc + val; }, 0);
    const avg = (sum / filtered.length);
    return avg;
};


module.exports = average;