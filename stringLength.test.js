const { default: expect } = require('expect');
const stringLength = require('./stringLength');
test('The dhort string', () => {
    expect(stringLength('')).toBe(0);
});

test('The string lenght is 5', () => {
    expect(stringLength('Hello')).toBe(5);
});
test('The is long string', () => {
    expect(stringLength('Hello World')).toBe(11);
});