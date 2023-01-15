const getWords = (text) => text.split(' ');

const toScore = (acc, digit) => acc + digit.charCodeAt() - 96;

const toWordScore = (word) => ({
  word,
  score: word.split('').reduce(toScore, 0),
});

const findWordWithHighestScore = (acc, word) =>
  word.score > acc.score ? word : acc;

const high = (text) =>
  getWords(text).map(toWordScore).reduce(findWordWithHighestScore, { score: 0 })
    .word;

assert.strictEqual(high('man i need a taxi up to ubud'), 'taxi');
assert.strictEqual(high('what time are we climbing up the volcano'), 'volcano');
assert.strictEqual(high('take me to semynak'), 'semynak');
assert.strictEqual(high('aa b'), 'aa');
assert.strictEqual(high('b aa'), 'b');
assert.strictEqual(high('bb d'), 'bb');
assert.strictEqual(high('d bb'), 'd');
assert.strictEqual(high('aaa b'), 'aaa');
