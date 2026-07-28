(function () {
  if (true) {
    var x = 10;
    let y = 20;
  }
  console.log(typeof x); // number
  console.log(typeof y); // undefined
})();

(function () {
  // var is function scoped and let is block scoped
  for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 0); // 3, 3, 3
  }
  // Using let creates a new scope for each iteration of the loop
  for (let j = 0; j < 3; j++) {
    setTimeout(() => console.log(j), 0); // 0, 1, 2
  }
})();

function scopeTest() {
  console.log(x); // undefined
  //console.log(y); // ReferenceError: y is not defined
  //console.log(z); // ReferenceError: z is not defined
  var x = 10;
  let y = 20;
  const z = 30;
  // console.log("abc block:"); // ReferenceError: Cannot access 'y' before initialization
  // console.log(y); // ReferenceError: Cannot access 'y' before initialization
  // console.log(z); // ReferenceError: Cannot access 'z' before initialization
  if (true) {
    var x = 100;
    let y = 200;
    const z = 300;
    console.log("abc block:"); // abc block 100 200 300
    console.log(x); // 100
    console.log(y); // 200
    console.log(z); // 300
  }
  console.log(" xyz block:"); //xyz block 100 20 30
  console.log(x); // 100
  console.log(y); // 20
  console.log(z); // 30
}
scopeTest();
