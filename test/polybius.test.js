// Write your tests here!
const expect = require("chai").expect; //this line is required when using the moacha testing suite
const polybius = require("../src/polybius").polybius;

describe("polybius", () => {
    //created a subgroup of tests for encoding messages
    describe("encoding", () => {
        //testing to make sure output is a string data type
        it("should return an encoded message as a string", () => {
            const input = "message";
            const actual = polybius(input);
            expect(actual).to.be.a("string")
        });
        //testing to make sure message encoded as number pairs
        it("should return a properly encdoded message as number pairs", () => {
            const input = "message";
            const expected = "23513434112251";
            const actual = polybius(input);
            expect(actual).to.equal(expected);
        });
        //testing to make sure capital letters have no effect on the output
        it("should return an encoded message disregarding capital letters", () => {
            const input = "Message";
            const expected = "23513434112251";
            const actual = polybius(input);
            expect(actual).to.equal(expected);
        });
        //testing to make sure spaces are still present in the output 
        it("should maintain spaces throughout", () => {
            const input = "a message";
            const expected = "11 23513434112251";
            const actual = polybius(input);
            expect(actual).to.equal(expected);
        });
        //testing to see if both 'i' and 'j' are translated as 42
        it("should encode both i and j as 42", () => {
            const input = "jimmy";
            const expected = "4242232345";
            const actual = polybius(input);
            expect(actual).to.equal(expected);
        });
    });
    //created subgroup of tests for decoding messages
    describe("decoding", () => {
        //testing to see if false is returned when the length of numbers excluding spaces is odd
        it("should return false if total amount of numbers is odd", () => {
            const input = "12345";
            const encode = false;
            const actual = polybius(input, encode);
            expect(actual).to.be.false;
        });
        //testing to see if false is returned if a 0 is included in the input
        it("should return false if the input contins a 0", () => {
            const input = "012345";
            const encode = false
            const actual = polybius(input, encode);
            expect(actual).to.be.false;
        });
        //testing to make sure spaces are still present in the output
        it("should maintain spaces throughout", () => {
            const input = "11 23513434112251";
            const encode = false;
            const expected = "a message";
            const actual = polybius(input, encode);
            expect(actual).to.equal(expected);
        });
        //testing to make sure both 'i' and 'j' are returned in the output when a 42 is given at the input
        it("shoul return both i and j when given 42", () => {
            const input = "42112323423322";
            const encode = false
            const expected = "i/jammi/jng"
            const actual = polybius(input, encode);
            expect(actual).to.equal(expected);
        });
    });
});