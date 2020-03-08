// example
// input: [22, 13, 73, 82, 4];
// expected: [22, 82, 4];
// also test that the original array has not changed
var geteven = require("./get-even-numbers");
test("Get even number", function () {

    // Arrange
    var myArray = [22, 13, 73, 82, 4];
    var unchanged = [22, 13, 73, 82, 4];
    var expected = [22, 82, 4];
    // Act
    var result = geteven(myArray);
    // Assert
    expect(result).toEqual(expected);
    expect(myArray).toEqual(unchanged);



});