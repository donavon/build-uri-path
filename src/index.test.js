import buildUriPath from '.';

const tests = [
  [buildUriPath``, ''],
  [buildUriPath`a`, 'a'],
  [buildUriPath`a/${'b'}`, 'a/b'],
  [buildUriPath`a/${''}`, 'a/'],
  [buildUriPath`/${''}`, '/'],
  [buildUriPath`a/${'b/c'}`, 'a/b%2Fc'],
  [buildUriPath`a/${'b&c'}`, 'a/b%26c'],
  [buildUriPath`a/${'b?c'}`, 'a/b%3Fc'],
];

tests.forEach(([a, b]) => {
  test(a || '(empty string)', () => {
    expect(a).toBe(b);
  });
});
