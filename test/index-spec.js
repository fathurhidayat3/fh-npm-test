const assert = require("assert");
const { upperCase, greet } = require("../index");

describe("upperCase", function() {
  describe("uppercase function", function() {
    it("changes letter case", function() {
      let result = upperCase("Fathur");

      assert.equal(result, "FATHUR");
    });
  });
});

describe("greet", function() {
  describe("greet function", function() {
    it("adds Hello to name", function() {
      let result = greet("Fathur");

      assert.equal(result, "Hello Fathur");
    });
  });
});
