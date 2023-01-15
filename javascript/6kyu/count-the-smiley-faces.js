const isSmileyFace = (face) => /[\:\;][-~]?[D\)]/.test(face);

const countSmileys = (array) => array.filter(isSmileyFace).length;

assert.strictEqual(countSmileys([]), 0);
assert.strictEqual(countSmileys([':D', ':~)', ';~D', ':)']), 4);
assert.strictEqual(countSmileys([':)', ':(', ':D', ':O', ':;']), 2);
assert.strictEqual(countSmileys([';]', ':[', ';*', ':$', ';-D']), 1);
