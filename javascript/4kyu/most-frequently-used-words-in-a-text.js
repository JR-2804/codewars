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
