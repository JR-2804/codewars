const sortWord = (word) => word.split("").sort().join("");

const isAnagramOf = (word) => (currentWord) =>
  sortWord(currentWord) === sortWord(word);

const anagrams = (word, words) => words.filter(isAnagramOf(word));

const text = "abba";
const array = ["aabb", "abcd", "bbaa", "dada"];
const result = array.map(sortWord).filter((word) => word === sortWord(text));
result;
