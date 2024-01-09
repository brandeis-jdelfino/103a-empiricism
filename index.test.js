const countVowels = require("./index");

test("count vowels in a string", () => {
  expect(countVowels("hello")).not.toBe(0);
  expect(countVowels("coding")).not.toBe(0);
  expect(countVowels("world")).not.toBe(0);
});

test("count vowels in non-string is 0", () => {
  expect(countVowels(0)).toBe(0);
}) 