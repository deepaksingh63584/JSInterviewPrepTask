const users = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 18 },
  { name: 'Charlie', age: 25 },
  { name: 'Diana', age: 22 }
];

// Sort Names by Age using sort method
function sortByAge(users) {
  return [...users].sort((a, b) => a.age - b.age);
}
console.log(sortByAge(users)); // [ { name: 'Bob', age: 18 }, { name: 'Diana', age: 22 }, { name: 'Charlie', age: 25 }, { name: 'Alice', age: 30 } ]

// Sort Names by Age using bubble sort
for (let i = 0; i < users.length - 1; i++) {
  for (let j = 0; j < users.length - 1 - i; j++) {
    if (users[j].age > users[j + 1].age) {
      let temp = users[j];
      users[j] = users[j + 1];
      users[j + 1] = temp;
    }
  }
}

console.log(users); // [ { name: 'Bob', age: 18 }, { name: 'Diana', age: 22 }, { name: 'Charlie', age: 25 }, { name: 'Alice', age: 30 } ]
