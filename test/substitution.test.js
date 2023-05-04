// Write your tests here!
const expect = require("chai").expect; //this line is required when using the moacha testing suite
const substitution = require("../src/substitution").substitution;

describe("substitution", () => {
    //subgroup of tests for false returns 
    describe("false returns", () => {
        //testing to see if false is returned when 'alphabet' is missing
        it("should return false if substitution alphabet is missing", () => {
            const input = "hello";
            const actual = substitution(input);
            expect(actual).to.be.false;
        });
        //testing to see if false is returned 'alphabet' is not 26 characters long
        it("should return false if the substitution alphabet does not contain exactly 26 characters", () => {
            const input = "hello";
            const alphabet = "abc";
            const actual = substitution(input, alphabet);
            expect(actual).to.be.false;
        });
        //testing to see if false is returned when the characters of 'alphabet' are not unique
        it("should return false if all characters in the substitution alphabet are not unique", () => {
            const input = "hello";
            const alphabet = "qwertyuiioplkjhgnmvfdcxsaz";
            const actual = substitution(input, alphabet);
            expect(actual).to.be.false;
        });
    });
    //subgroup of tests for encoding messages
    describe("encoding", () => {
        //testing to see if an encoded message is returned
        it("should return an encoded message", () => {
            const input = "message";
            const alphabet = "qwertyuioplkjhgfdsazxcvbnm";
            const expected = "jtaaqut";
            const actual = substitution(input, alphabet);
            expect(actual).to.equal(expected);
        });
        //testing to see if an encoded message is returned when 'alphabet' contains special characters
        it("should encode message if substitution alphabet conatins special characters", () => {
            const input = "faded";
            const alphabet = "#$@%ghtujeonwqpmzdx9850rla";
            const expected = "h#%g%";
            const actual = substitution(input, alphabet);
            expect(actual).to.equal(expected);
        });
        //testing to make sure spaces are minatained throughout
        it("should maintain spaces throughout", () => {
            const input = "a message";
            const alphabet = "qwertyuioplkjhgfdsazxcvbnm";
            const expected = "q jtaaqut";
            const actual = substitution(input, alphabet);
            expect(actual).to.equal(expected);
        });
        //testing to make sure capital letters in the input do not effect the output
        it("should ignore capital letters", () => {
            const input = "A message";
            const alphabet = "qwertyuioplkjhgfdsazxcvbnm";
            const expected = "q jtaaqut";
            const actual = substitution(input, alphabet);
            expect(actual).to.equal(expected);
        });
    });
    //subgroup of tests for decoding messages
    describe("decoding", () => {
        //testing to see if a decoded message is returned
        it("should return a decaoded message", () => {
            const input = "jtaaqut";
            const alphabet = "qwertyuioplkjhgfdsazxcvbnm";
            const encode = false;
            const expected = "message";
            const actual = substitution(input, alphabet, encode);
            expect(actual).to.equal(expected);
        });
        //testing to see if a decoded message is returned when 'alphabet' contains special characters
        it("should decode message if substitution alphabet conatins special characters", () => {
            const input = "h#%g%";
            const alphabet = "#$@%ghtujeonwqpmzdx9850rla";
            const encode = false;
            const expected = "faded";
            const actual = substitution(input, alphabet, encode);
            expect(actual).to.equal(expected);
        });
        //testing to make sure spaces are maintained throughout
        it("should maintain spaces throughout", () => {
            const input = "q jtaaqut";
            const alphabet = "qwertyuioplkjhgfdsazxcvbnm";
            const encode = false;
            const expected = "a message";
            const actual = substitution(input, alphabet, encode);
            expect(actual).to.equal(expected);
        });
        //testing to amkes sure capital letters in the input do not effect the output
        it("should ignore capital letters", () => {
            const input = "Q jtaaqut";
            const alphabet = "qwertyuioplkjhgfdsazxcvbnm";
            const encode = false;
            const expected = "a message";
            const actual = substitution(input, alphabet, encode);
            expect(actual).to.equal(expected);
        });
    });
});