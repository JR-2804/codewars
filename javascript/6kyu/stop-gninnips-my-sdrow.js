const getWords = (string) => string.split(" ");

const reverseWord = (word) => word.split("").reverse().join("");

const reverseWordWithMoreThanFiveLetters = (word) =>
  word.length < 5 ? word : reverseWord(word);

const spinWords = (string) =>
  getWords(string).map(reverseWordWithMoreThanFiveLetters).join(" ");
