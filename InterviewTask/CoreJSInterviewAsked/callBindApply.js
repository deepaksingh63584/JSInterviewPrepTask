function callName() {
    console.log(`Hello Call, ${this.name}`); // Hello Call, Deepak
}
const obj1 = {name :'Deepak'}
callName.call(obj1); //hello Call, Deepak

function nameObj(nameVal) {
    console.log(`${nameVal}, ${this.name}`); // hello Apply, Deepak
}
const obj = {name :'Deepak'};
const boundName = nameObj.bind(obj);//bind
boundName('Hello Bind');
nameObj.apply(obj, ['Hello Apply']); //apply


