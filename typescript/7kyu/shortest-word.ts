const smallWordsFirst = (word1: string, word2: string) =>
  word1.length - word2.length;

const findShort = (text: string): number =>
  text.split(" ").sort(smallWordsFirst)[0].length;

export { findShort };
