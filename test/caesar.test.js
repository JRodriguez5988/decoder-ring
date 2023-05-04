// Write your tests here!
const expect = require("chai").expect; //this line is required when using the moacha testing suite
const caesar = require("../src/caesar").caesar;

describe("caesar()", () => {
    //grouping together tests to make them more readable
    describe("false returns", () => {
        //testing to make sure the function returns false when shift is 0
        it("should return false if shift value is equal to 0", () => {
            const input = "message";
            const shift = 0;
            const actual = caesar(input, shift);
            expect(actual).to.be.false;
        });
        //testing to make sure the function returns false when shift is less than -25
        it("should return false if the shift value is less than -25", () => {
            const input = "message";
            const shift = -26;
            const actual = caesar(input, shift);
            expect(actual).to.be.false;
        });
        //testing to make sure the function returns false when shift is more than 25
        it("should return false if the shift value is more than 25", () => {
            const input = "message";
            const shift = 26;
            const actual = caesar(input, shift);
            expect(actual).to.be.false;
        }); 
    });
    //creating subgroup of tests for encoded messages
    describe("encoding messages", () => {
        //testing to see if the message is encoded properly
        it("should return an encoded message that is shifted by the amount specified", () => {
            const input = "message";
            const shift = 3;
            const expected = "phvvdjh";
            const actual = caesar(input, shift);
            expect(actual).to.equal(expected);
        });
        //testing to see if capital letters are ignored
        it("should return an encoded message ignoring the capital letters from the input", () => {
            const input = "Message";
            const shift = 3;
            const expected = "phvvdjh";
            const actual = caesar(input, shift);
            expect(actual).to.equal(expected);
        });
        //testing to make sure spaces and punctuation are left as is
        it("should return an encoded message with spaces and punctuation left as is", () => {
            const input = "A message.";
            const shift = 3;
            const expected ="d phvvdjh.";
            const actual = caesar(input, shift);
            expect(actual).to.equal(expected);
        })
        //testing to see if encoded message is able to be shifted past the end of the alphabet
        it("should return an encoded message that is shifted past the end of the alphabet", () => {
            const input = "pizza";
            const shift = 3;
            const expected = "slccd";
            const actual = caesar(input, shift);
            expect(actual).to.equal(expected);
        })
    });
    //subgroup of tests for decoded messages
    describe("decoding messages", () => {
        //testing to see if message is decoded properly
        it("should return a properly decoded message", () => {
            const input = "phvvdjh";
            const shift = 3;
            const encode = false;
            const expected = "message";
            const actual = caesar(input, shift, encode);
            expect(actual).to.equal(expected);
        });
    })
});