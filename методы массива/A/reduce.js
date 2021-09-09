function add(a, b) {
    return a + b;
  }

Array.prototype.reduce2 = function (callback, initialValue) {
    if (this == null) {// проверка на массива 
      throw new Error("Не массив");
    }
  
    let result;
    let i = 0;
  
    let O = Object(this);
    let len = O.length;
  
    if (typeof callback !== "function") {// проверка что передаваемый колбек функция
      throw new Error("Не колбек");
    }
  
    if (arguments.length >= 2) {
      result = initialValue;
    } else {
      if (len === 0) {// проверка для начального значения
        throw new Error("Редьюс без начального значение");
      }
      result = O[i];
      i++;
    }
  
    for (; i < this.length; i++) {
      if (i in O) {
        result = callback(result, O[i], i, O);
      }
    }
  
    return result;
  };
  
  console.log([1, 2, 3, 4].reduce2(add));
  