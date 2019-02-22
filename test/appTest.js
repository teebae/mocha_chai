const assert = require("chai").assert;
const app = require("../app");
const {sayHello, sayBye, addTwoNumber, factorial} = app;

describe("App", function() {
  context("sayHello()", function(){
    it("App should return hello", function() {
      assert.equal(sayHello(), "hello");
    });
  });
  context("sayBye()", function(){
    it("should return bye", function(){
      assert.equal(sayBye(), "bye");
    });
    it("should return value of type string", function(){
      assert.typeOf(sayBye(), "string");
    });
  });
  context("addTwoNumber()", function(){
    it("should return 10", function(){
      assert.equal(addTwoNumber(5,5), 10);
    });
    it("should return value of type number", function(){
      assert.typeOf(addTwoNumber(5,5), "number");
    });
  });
  context("factorial()", function(){
    it("should return 120 for 5 factorial", function(){
      assert.equal(factorial(5), 120);
    });
    it("should return value of type number", function(){
      assert.typeOf(factorial(5), "number");
    });
    it("should not accept negative number", function(){
      assert.typeOf(factorial(-5), "undefined");
    });
  });
});
