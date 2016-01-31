
var BaseControl = function() {

  this.getElement = function(inputObj) {

    var type = inputObj.type;
    var  value = inputObj.value;

    logger.info("Locator input is with type \'"+ type +"\' and \'value\' is " + value);

    if(type === "css"){
      return element(by.css(value));
    } else  if(type === "model"){
      return element(by.model(value));
    } else  if(type === "id"){
      return element(by.id(value));
    } else  if(type === "binding"){
      return element(by.binding(value));
    } else  if(type === "cssContainingText"){
      return element(by.cssContainingText(value));
    }

  };

  this.getElements = function(inputObj) {

    var type = inputObj.type;
    var  value = inputObj.value;

    logger.info("Locator input is with type \'"+ type +"\' and \'value\' is " + value);

    if(type === "css"){
      return element.all(by.css(value));
    } else  if(type === "model"){
      return element.all(by.model(value));
    } else  if(type === "id"){
      return element.all(by.id(value));
    } else  if(type === "binding"){
      return element.all(by.binding(value));
    }else  if(type === "options"){
      return element(by.options(value));
    }else  if(type === "tagname"){
      return element(by.tagName(value));
    }

  };

};

module.exports = BaseControl;