const expect = require("chai").expect;
const substitutionModule = require("../src/substitution");

describe("substitutionModule", () => {
  it("should return false if new alphabet is not exactly 26 letters", () => {
    const actual = substitutionModule("hello", "short");
    expect(actual).to.be.false;
  });

  it("should return false if the new alphabet is missing", () => {
    const actual = substitutionModule("hello");
    expect(actual).to.be.false;
  });

  it("should encode a word using a substitute alphabet", () => {
    const actual = substitutionModule("thinkful", "xoyqmcgrukswaflnthdjpzibev")
    const expected = 'jrufscpw'
    expect(actual).to.equal(expected);
  });

  it("should maintain spaces in code", () => {
    const actual = substitutionModule("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
    const expected = 'elp xhm xf mbymwwmfj dne'
    expect(actual).to.equal(expected);
  });

  it("ignores capital letters", () => {
      const actual = substitutionModule("ThinkFul", "xoyqmcgrukswaflnthdjpzibev");
      const expected = 'jrufscpw'
  });

  it("should decode a word using a substitute alphabet", () => {
    const actual = substitutionModule("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false);
    const expected = "message"
    expect(actual).to.equal(expected);
  });
});
