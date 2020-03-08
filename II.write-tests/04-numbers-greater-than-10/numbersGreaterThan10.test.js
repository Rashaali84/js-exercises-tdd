var largerThanTen = require("./numbersGreaterThan10");

test("Get numbers greater than 10", function () {

    // Arrange
    var myArray = [4, 10, 32, 9, 21];
    var unchanged = [4, 10, 32, 9, 21];
    var expected = [32, 21];
    // Act
    var result = largerThanTen(myArray);
    // Assert
    expect(result).toEqual(expected);
    expect(myArray).toEqual(unchanged);




});

// input: [4, 10, 32, 9, 21];
// expected output: [32, 21];
