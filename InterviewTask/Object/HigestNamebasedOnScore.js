const scores = {
  Alice: 85,
  Bob: 90,
  Charlie: 88,
  David: 92,
};

Object.keys(scores).forEach((name) => {
  console.log(name);
}); // Alice, Bob, Charlie, David

const highestName = Object.keys(scores).reduce((a, b) =>
  scores[a] > scores[b] ? a : b
);
console.log(highestName); // David