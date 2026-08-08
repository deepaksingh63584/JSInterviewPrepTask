// Question 1 --
console.log("1");
setTimeout(() => console.log("2"), 0);
Promise.resolve().then(() => console.log("3"));

async function run() {
  console.log("4");
  await Promise.resolve();
  console.log("5");
}
run();
console.log("6");
// 1
// 4
// 6
// 3
// 5
// 2

// Question 2 --
Promise.resolve(1)
  .then((x) => {
    console.log(x);
    return x + 1;
  }) //1
  .then((x) => {
    console.log(x);
    throw new Error("boom");
  }) //2
  .then((x) => console.log("never", x)) //not print .then after error
  .catch((e) => {
    console.log("caught:", e.message);
    return 10;
  }) //10
  .then((x) => console.log("after catch:", x)); //not print .then after error
// 1
// 2
// caught: boom
// after catch: 10

// Question 3 --
const result = (() => {
  let state = 10;
  const p1 = Promise.resolve().then(() => {
    state += 5;
    return state;
  });
  const p2 = Promise.resolve().then(() => {
    state *= 2;
    return state;
  });
  return Promise.all([p1, p2]).then((values) => {
    console.log("Values:", values);
    console.log("Final State:", state);
  });
})();
// Values: [ 15, 30 ]
// Final State: 30

// Question 4 --

function heavyProcess() {
  let giantArray = new Array(1000000).fill("💾"); // Large memory footprint
  return function checkStatus(retries) {
    return Promise.resolve().then(() => {
      if (retries === 0) {
        return "Done";
      }
      // Something using giantArray safely, e.g., checking a header
      const sample = giantArray[0];
      return checkStatus(retries - 1);
    });
  };
}
const start = heavyProcess();
start(5000).then(console.log);
// Done
