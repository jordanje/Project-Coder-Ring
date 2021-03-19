const expect = require("chai").expect;
const polybiusModule = require("../src/polybius");

describe("polybiusModule", () => {
  it("should translate 42 to '(i/j)'", () => {
    const expected = "th(i/j)nkful";
    const actual = polybiusModule("4432423352125413", false);
    expect(actual).to.equal(expected);
  });

  it("should translate i and j to 42", () => {
    const expected = "4432423352125413";
    const actual = polybiusModule("thinkful")
    expect(actual).to.equal(expected);
  });

  it("should maintain spaces in code", () => {
    const expected = "3251131343 2543241341"
    const actual = polybiusModule("Hello world"); 
    expect(actual).to.equal(expected);
  });
});