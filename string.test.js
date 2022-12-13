
const {stringLength, reverseString} = require('./string');
test('This is short string', () => {
    expect(stringLength('')).toBe(0);
});

test('The string lenght is 5', () => {
    expect(stringLength('Hello')).toBe(5);
});
test('The is long string', () => {
    expect(stringLength('Hello World')).toBe(11);
});

test('This is olleh', () => {
    expect(reverseString('hello')).toBe('olleh');
});
