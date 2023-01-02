const pad = (time) => (time < 10 ? `0${time}` : time);

const calculateHours = (time) => pad(Math.floor(time / 3600));

const calculateMinutes = (time) => pad(Math.floor((time / 60) % 60));

const calculateSeconds = (time) => pad(Math.floor(time % 60));

const humanReadable = (time) =>
  `${calculateHours(time)}:${calculateMinutes(time)}:${calculateSeconds(time)}`;

assert.strictEqual(humanReadable(0), '00:00:00');
assert.strictEqual(humanReadable(59), '00:00:59');
assert.strictEqual(humanReadable(60), '00:01:00');
assert.strictEqual(humanReadable(90), '00:01:30');
assert.strictEqual(humanReadable(3599), '00:59:59');
assert.strictEqual(humanReadable(3600), '01:00:00');
assert.strictEqual(humanReadable(45296), '12:34:56');
assert.strictEqual(humanReadable(86399), '23:59:59');
assert.strictEqual(humanReadable(86400), '24:00:00');
assert.strictEqual(humanReadable(359999), '99:59:59');
