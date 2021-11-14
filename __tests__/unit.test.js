// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
//Test matches valid phone numbers
test('(818)818-8181 is a valid phone number', () => {
    expect(functions.isPhoneNumber('(818)818-8181')).toBe(true);
});

test('(415)328-8585 is a valid phone number', () => {
    expect(functions.isPhoneNumber('(415)328-8585')).toBe(true);
});

test('banana is not a valid phone number', () => {
    expect(functions.isPhoneNumber('banana')).toBe(false);
});

test('0 is not valid phone number', () => {
    expect(functions.isPhoneNumber('0')).toBe(false);
});


//Test matches valid emails
test('enam@ucsd.edu is a valid email', () => {
    expect(functions.isEmail('enam@ucsd.edu')).toBe(true);
});

test('spamEmail@gmail.com is a valid email', () => {
    expect(functions.isEmail('spamEmail@gmail.com')).toBe(true);
});

test('123456789 is a not valid email', () => {
    expect(functions.isEmail('123456789')).toBe(false);
});

test('spamEmail is not a valid email', () => {
    expect(functions.isEmail('spamEmail')).toBe(false);
});


/** Test
 * The password's first character must be a letter, 
 * it must contain at least * 4 characters and no more 
 * than 15 characters and no characters other than * * 
 * letters, numbers and the underscore may be used
 */
test('cse110 is a strong password', () => {
    expect(functions.isStrongPassword('cse110')).toBe(true);
});

test('CAKEisGOOD is a strong password', () => {
    expect(functions.isStrongPassword('CAKEisGOOD')).toBe(true);
});


test('110cse is a not strong password', () => {
    expect(functions.isStrongPassword('110csce')).toBe(false);
});

test('cat is a not strong password', () => {
    expect(functions.isStrongPassword('cat')).toBe(false);
});




// Test This regular expressions matches dates of the 
// form XX / XX / YYYY where XX can be 1 or 2 digits long 
// and YYYY is always 4 digits long.
test('1/1/2001 is a ', () => {
    expect(functions.isDate('1/1/2001')).toBe(true);
});

test('13/05/2021 is a date', () => {
    expect(functions.isDate('13/05/2021')).toBe(true);
});


test('123/12/1234 is a not date', () => {
    expect(functions.isDate('123/12/1234')).toBe(false);
});

test('12/12/21 is a not date', () => {
    expect(functions.isDate('12/12/21')).toBe(false);
});


// Test Matches valid 3 or 6 character hex 
// codes used for HTML or CSS.
test('#FFF is a valid hex code', () => {
    expect(functions.isHexColor('#FFF')).toBe(true);
});

test('#01d8e5 is a valid hex code', () => {
    expect(functions.isHexColor('#01d8e5')).toBe(true);
});


test('#egg is a not valid hex code', () => {
    expect(functions.isHexColor('#egg')).toBe(false);
});

test('#1234567 is a not valid hex code', () => {
    expect(functions.isHexColor('#1234567')).toBe(false);
});