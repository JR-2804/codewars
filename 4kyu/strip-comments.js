const getSentences = (text) => text.split('\n');

const toStripSentence = (markers) => (sentence) =>
  sentence.slice(0, indexToStrip(markers, sentence)).trim();

const indexToStrip = (markers, sentence) =>
  markers
    .map(toIndexOfMarkerInSentence(sentence))
    .filter(isValidIndex)
    .sort()
    .shift() || sentence.length;

const toIndexOfMarkerInSentence = (sentence) => (marker) =>
  sentence.indexOf(marker);

const isValidIndex = (index) => index > 0;

const solution = (text, markers) =>
  getSentences(text).map(toStripSentence(markers)).join('\n');

assert.strictEqual(
  solution('apples, plums % and bananas\npears\noranges !applesauce', [
    '%',
    '!',
  ]),
  'apples, plums\npears\noranges',
);

assert.strictEqual(solution('Q @b\nu\ne -e f g', ['@', '-']), 'Q\nu\ne');
