// example
// input: [3, 21, 88, 4, 36];
// expected: 88;


// also test that the original array has not changed
var largestnumber = require("./largest-number");
test("Get largest number", function () {

    // Arrange
    var myArray = [3, 21, 88, 4, 36];
    var unchanged = [3, 21, 88, 4, 36];
    var expected = 88;
    // Act
    var result = largestnumber(myArray);
    // Assert
    expect(result).toEqual(expected);
    expect(myArray).toEqual(unchanged);



});