const solution = (text, ending) => text.endsWith(ending);

assert.strictEqual(solution('abcde', 'cde'), true);
assert.strictEqual(solution('abcde', 'abc'), false);
