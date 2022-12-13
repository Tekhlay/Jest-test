
const {calculator,stringLength, reverseString} = require('./string');

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


describe('This is task 3', () => {
    const c = new calculator();
    test('This is 3', () => {
        expect(c.multiply(1,2)).toBe(2);
    });

    test('This is -1', () => {
        expect(c.subtract(1,2)).toBe(-1);
    });

    test('This is 3', () => {
        expect(c.add(1,2)).toBe(3);
    });
});


