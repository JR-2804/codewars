const getSentences = (text) => text.split("\n");

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
  getSentences(text).map(toStripSentence(markers)).join("\n");
