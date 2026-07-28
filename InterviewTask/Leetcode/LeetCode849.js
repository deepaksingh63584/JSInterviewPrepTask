/**
 * React Question No: 1
 * @param {number[]} seats
 * @return {number}
 *LeetCode 849
 */
var maxDistToClosest = function(seats) {
    max = -Infinity;
    let prev, curr;
    let firstDist = -1;
    for (curr = 0, prev = -1; curr < seats.length; curr++) {
        if(seats[curr] === 1) {
            const dist = curr - prev - 1;
            if (dist  > max) {
                max = dist;
                if (firstDist == -1) {
                    firstDist = max;
                }
            }
            prev = curr;
        }
    }
    let lastDist = curr - prev - 1;
    return Math.max(
        firstDist,
        Math.trunc(max/2) + (max % 2 !== 0),
        lastDist
    );
};