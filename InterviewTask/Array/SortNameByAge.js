// Question 2: Sort Names by Age
// 1. input :
// name =["abhi" , "vartika","aryan","divya","rihan"]
// age=[29,30,10,30,25]
// output :result=["aryan","rihan",abhi","vartika","divya"]

const name = ["abhi", "vartika", "aryan", "divya", "rihan"];
const age = [29, 30, 10, 30, 25];

const shortByAge = name.map((n, i) => ({ name: n, age: age[i] }));
console.log(shortByAge);

shortByAge.sort((a, b) => a.age - b.age);

const shortAge = shortByAge.map((s) => s.name);
console.log(shortAge); // ["aryan", "rihan", "abhi", "vartika", "divya"]