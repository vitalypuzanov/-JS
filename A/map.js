
let array2 = [4, 6, 8, 9, 12, 53, -17, 2, 5, 7, 31, 97, -1, 17];

Array.prototype.map2 = function (callback, thisArg) {
    if (this == null || this == undefined) {  // проверка на массива 
        throw new Error("Не массив");
    }
    let context = this;

    let O = Object(this);

    if (arguments.length > 1) { // проверка на параметр thisArg
        context = thisArg;
    }

    if (typeof callback !== "function") { // проверка что передаваемый колбек функция
        throw new Error("Колбек не функция");
    }

    let len = O.length;

    let newArray = [];

    let i = 0;

    while (i < len) {  // проверка по индексу если индекс существуют выполняем колбек
        if (i in O) {
            newArray[i] = callback.call(context, this[i], i, O);
        }

        i++;
    }

    return newArray;
};

let increase1 = (num) => num + 1;
let mul2 = (num) => num * 2;

console.log(array2.map2(mul2).map2(increase1));