window.x = 1;
const context = {x:2};
6
function testThis(y) {
    console.log(`${this.x}, ${y}`);
}
testThis(200);

const bind = function(fn, context) {
    const bindArgs = [].slice.call(arguments, 2);
    console.log((`${bindArgs} + 'байнд')`)) ;
    return function() {
      const fnArgs = [].slice.call(arguments);
      return fn.apply(context, bindArgs.concat(fnArgs));
    };
  };

const boundFunction = testThis.bind(context);
boundFunction(200)