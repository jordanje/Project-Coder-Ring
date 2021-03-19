const expect = require("chai").expect;
const caesarModule = require("../src/caesar");

describe("caesarModule", () => {

  it("should return string who's letters that have been shifted", () => {
    const expected = 'wklqnixo';
    const actual = caesarModule("thinkful", 3);
    expect(actual).to.equal(expected);
  });

  it("should return 'false' if shift is 0, > 25 or < -25, or if no shift is given", () => {
    const actual = caesarModule("Thinkful", -26);
    expect(actual).to.be.false;
  });

  it("should maintain spaces and other non-alphabetic characters", () => {
    const expected = 'bpqa qa i amkzmb umaaiom!'
    const actual = caesarModule("This is a secret message!", 8);
    expect(actual).to.equal(expected);
  });

  it("should switch from 'encode' to 'decode'", () => {
    const expected = "thinkful";
    const actual = caesarModule("wklqnixo", 3, false);
    expect(actual).to.equal(expected);
  });

  it("The alphabet should form a 'loop' ", () => {
    const expected = "xyz";
    const actual = caesarModule("abc", -3);
    expect(actual).to.equal(expected);
  });
  
  it("Should ignore capital letters", () =>{
      const expected = 'this is a secret message!';
      const actual = caesarModule("BPQA qa I amkzmb umaaiom!", 8, false); 
      expect(actual).to.equal(expected);
  });

});