var greetPeople = require("./greet-people");
test("print list of names prefixed with Hello", function () {
  // Arrange
  var myArray = ['Irina', 'Ashleigh', 'Etza'];
  var unchanged = ['Irina', 'Ashleigh', 'Etza'];
  var expected = 'Hello IrinaAshleighEtza';
  // Act
  var result = greetPeople(myArray);
  // Assert
  expect(result).toEqual(expected);
  expect(myArray).toEqual(unchanged);
});
