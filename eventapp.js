const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('tutorial',()=>{
    console.log("Tutorial event has occured");
})

eventEmitter.emit('tutorial',1,1);

class Person extends EventEmitter {
    constructor(name) {
        super();
        this._name = name;
    }

    get name() {
        return this._name;
    }
}

let pedro = new Person('Pedro');
let christina = new Person('Christina');

christina.on("name", ()=>{
    console.log("My name is " + christina.name);
})
christina.emit('name');
//pedro extends the event listener class so you can use EventEmitter methods on pedro

pedro.on('name', ()=>{
    console.log("My name is " + pedro.name);
})

pedro.emit('name');

