
var CalculatorSteps = function() {

  this.World = require("../world.js").World;

  this.Given('The browser log', function ()
  {
    this.calculator_page.loadURL();
    this.expect(1).to.eventually.equal(2);
    browser.executeScript(function() {console.error('error from test')});
  });

  this.Given('The calculator is open', function () {
        this.calculator_page.loadURL();
  });

  this.When('I calculate $first $operator $second', function (first, operator, second) {
    this.calculator_page.setFirstValue(first);
    this.calculator_page.setOperator(operator);
    this.calculator_page.setSecondValue(second);
    this.calculator_page.clickGo();
  });

  this.When('I enter first value of $first', function (first) {
    this.calculator_page.setFirstValue(first);
  });

  this.When('I enter second value of $second', function (second) {
    this.calculator_page.setSecondValue(second);
  });

  this.When('I click Go', function () {
    this.calculator_page.clickGo();
  });

  this.Then('the result should equal $result', function (result, callback) {
    this.expect(this.calculator_page.getResult()).to.eventually.equal(result).and.notify(callback);
  });
};

module.exports = CalculatorSteps;