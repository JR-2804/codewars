const sortWord = (word) => word.split('').sort().join('');

const isAnagramOf = (word) => (currentWord) =>
  sortWord(currentWord) === sortWord(word);

const anagrams = (word, words) => words.filter(isAnagramOf(word));

const text = 'abba';
const array = ['aabb', 'abcd', 'bbaa', 'dada'];
const result = array.map(sortWord).filter((word) => word === sortWord(text));
result;

const assert = require('chai').assert;

// Should return a list of all anagrams
assert.deepEqual(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']), [
  'aabb',
  'bbaa',
]);
assert.deepEqual(
  anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']),
  ['carer', 'racer'],
);

// Should return an empty array for no anagrams
assert.deepEqual(anagrams('laser', ['lazing', 'lazy', 'lacer']), []);
