const getWords = (text) => text.split(" ");

const toScore = (acc, digit) => acc + digit.charCodeAt() - 96;

const toWordScore = (word) => ({
  word,
  score: word.split("").reduce(toScore, 0),
});

const findWordWithHighestScore = (acc, word) =>
  word.score > acc.score ? word : acc;

const high = (text) =>
  getWords(text).map(toWordScore).reduce(findWordWithHighestScore, { score: 0 })
    .word;
