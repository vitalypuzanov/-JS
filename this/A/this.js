window.x = 1;
const context = {x:2};
6
function testThis(y) {
    console.log(`${this.x}, ${y}`);
}
testThis(200);

const boundFunction = testThis.bind(context);
boundFunction(200)