'use strict';

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var CalculatorPage = require("./support/pageobjects/calculator_page.js");
var BaseControl = require("./support/controls/base_control.js");


var World = function World() {
    chai.use(chaiAsPromised);
    this.expect = chai.expect;

    this.base_control = new BaseControl();
    this.calculator_page =  new CalculatorPage();

}

module.exports.World = World;
