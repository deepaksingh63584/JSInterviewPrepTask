function callName() {
    console.log(`Hello Call, ${this.name}`); //call
}
const obj1 = {name :'Deepak'}
callName.call(obj1); //call

function nameObj(nameVal) {
    console.log(`${nameVal}, ${this.name}`); //bind apply
}
const obj = {name :'Deepak'};
const boundName = nameObj.bind(obj);//bind
boundName('Hello Bind');
nameObj.apply(obj, ['Hello Apply']); //apply


