/// arr.forEach(function(item, index, array)
///  Метод массива который 

let arr = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
Array.prototype.forEach2 = function (callback) {

    this arr = this;
    for (let i = 0; i < arr.length; i++) {
        const argument = arguments[i];
        callback(arr[i], i, arr )
    }
}

array.forEach2(item, index, array) =>{
console.log({item})
console.log({index})
console.log({array})
} 

////////////

let arr = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
Array.prototype.forEach2 = function (callback) {

    this arr = this;
    if (this == null || this == undefind) {
        throw new Error ('Не массив')
        
    }
    for (let i = 0; i < arr.length; i++) {
        const argument = arguments[i];
        callback(arr[i], i, arr )
    }
}

array.forEach2(item, index, array) =>{
console.log({item})
console.log({index})
console.log({array})
} 