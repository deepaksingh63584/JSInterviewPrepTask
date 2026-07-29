// Atm machine :
// You have an atm with denominations and counts (500,100,50)
// user requests a with drawl amount  and dispenses notes

// ATM withdraw problem: explanation of code for denomination & balance check.
// Output
// 2200 -> [4, 2, 0]  (4×500 + 2×100 = 2200)
// 2650 -> [5, 1, 1]  (5×500 + 1×100 + 1×50 = 2650)
// 1210 -> “Invalid Amt”  (not possible with available denominations)
// 5000 -> “Insufficient”  (ATM doesn’t have that much cash)

function atmWithdrawCountNote(amount, denomination, counts) {
  const totalcash = denomination.reduce(
    (sum, demonation, i) => sum + demonation * counts[i],
    0,
  );
  if (amount > totalcash) return "Insufficient";
  let result = [];
  let remider = amount;

  for (let i = 0; i < denomination.length; i++) {
    const maxNotes = Math.min(Math.floor(remider / denomination[i]), counts[i]);
    result[i] = maxNotes;
    remider -= maxNotes * denomination[i];
  }
  if (remider === 0) {
    return result;
  } else {
    return "Invalid Amt";
  }
}

console.log(atmWithdrawCountNote(5000, [500, 100, 50], [6, 4, 6])); // Insufficient
console.log(atmWithdrawCountNote(3250, [500, 100, 50], [6, 4, 6])); // [ 6, 2, 1 ]
console.log(atmWithdrawCountNote(1222, [500, 100, 50], [6, 4, 6])); // Invalid Amt
