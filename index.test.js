const countVowels = require("./index");

test("count vowels in a string", () => {
  expect(countVowels("hello")).toBe(2);
  expect(countVowels("coding")).toBe(2);
  expect(countVowels("world")).toBe(1);
});

test("count vowels in non-string is 0", () => {
  //expect(countVowels(0)).toBe(0);
}) 