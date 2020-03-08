var removeVowels = require("./remove-vowels-in-array");
test("remove vowels from all words in array", function () {
  // Arrange
  var myArray = ["Irina", "Etza", "Daniel"];
  var unchanged = ["Irina", "Etza", "Daniel"];
  var expected = ["__i_a", "___a", "_a_ie_"];
  // Act
  var result = removeVowels(myArray);
  // Assert
  expect(result).toEqual(expected);
  expect(myArray).toEqual(unchanged);
});

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "Dnl"]
