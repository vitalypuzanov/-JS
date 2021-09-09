const testArray = [1,1,1,2,2,3,4,4,5,5,5,5];
/// топорный метод 
function getUnique(arr){
    let current=[];
for (const num of arr) {
    if(!current.includes(num)){
        current.push(num);
    }   
}  
return current;
} 
let uniqueArr =  getUnique(testArray)
/// метод через set 
let uniqueArr1 = [...new Set(testArray)]

console.log (getUnique(testArray));
/// для поиска единтсвенного уникального по сравнению со всеми 
function finde(arr) {
const filterarr = arr.filter(el => el !== arr[0])
if(filterarr.length === 1){
    return filterarr[0];
} else{
    return arr[0];
}
}
console.log(finde(testArray));