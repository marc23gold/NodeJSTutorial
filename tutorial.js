const sum = (num1,num2) => num1 + num2;
const PI = 3.14;
class SomeMathObject {
    constructor() {
        console.log("Object Created");
    }
}

/*
This is one way to export individually
module.exports.sum = sum;
module.exports.PI = PI;
module.exports.SomeMathObject = SomeMathObject;
*/

//The other way would be to put all the things you want to export in
//An object property like so:
module.exports = {
    sum: sum,
    PI: PI,
    SomeMathObject: SomeMathObject
}
