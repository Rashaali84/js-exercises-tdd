var removeVowels = require("./remove-vowels");
test("remove vowels from word", function () {
  // Arrange
  var myArray = 'samuel';
  var unchanged = 'samuel';
  var expected = '_a_ue_';
  // Act
  var result = removeVowels('samuel');
  // Assert
  expect(result).toEqual(expected);
  expect(myArray).toEqual(unchanged);
});
