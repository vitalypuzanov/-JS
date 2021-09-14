class Robot {
    constructor(name){
    this.name = name;
}
}
function add (op1,op2){
    this.name=this.name || 'Human'
return this.name + ' can count to ' + (op1 + op2);
}

Function.prototype.myOwnBind = function(robot) {
  const addFunction = this;
  return function bindFunction() {
      return addFunction.apply(
          robot, // robot
          [].slice.call(arguments) // [1, 2]
      );
  };
}

console.log(add(0,1));
const voltron = new Robot ('voltron')
const voltronfn = add.myOwnBind(voltron)


console.log(voltronfn(1,2));
console.log(voltronfn(20,30));

