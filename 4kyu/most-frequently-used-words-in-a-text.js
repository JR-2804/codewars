const sortWords = (word1, word2) => word2[1] - word1[1];

const parseText = (text) => text.replace(/[^a-zA-Z']/g, " ");

const isValidWord = (word) => word.toString().length !== 0 && word !== "'";

const toLowerCase = (word) => word.toLowerCase();

const countWords = (words, word) => words.set(word, (words.get(word) || 0) + 1);

const topThreeWords = (text) =>
  [
    ...parseText(text)
      .split(" ")
      .filter(isValidWord)
      .map(toLowerCase)
      .reduce(countWords, new Map()),
  ]
    .sort(sortWords)
    .slice(0, 3)
    .map((item) => item[0]);

assert.deepEqual(topThreeWords("a a a  b  c c  d d d d  e e e e e"), [
  "e",
  "d",
  "a",
]);

assert.deepEqual(topThreeWords("a a c b b"), ["a", "b", "c"]);

assert.deepEqual(
  topThreeWords("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e"),
  ["e", "ddd", "aa"],
);

assert.deepEqual(topThreeWords("  //wont won't won't "), ["won't", "wont"]);

assert.deepEqual(topThreeWords("  , e   .. "), ["e"]);

assert.deepEqual(topThreeWords("  ...  "), []);

assert.deepEqual(topThreeWords("  '  "), []);

assert.deepEqual(
  topThreeWords(`In a village of La Mancha, the name of which I have no desire to call to
mind, there lived not long since one of those gentlemen that keep a lance
in the lance-rack, an old buckler, a lean hack, and a greyhound for
coursing. An olla of rather more beef than mutton, a salad on most
nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
on Sundays, made away with three-quarters of his income.`),
  ["a", "of", "on"],
);
