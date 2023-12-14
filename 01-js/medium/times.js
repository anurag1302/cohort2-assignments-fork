/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {
  let sum = 0;

  let startDate = new Date();
  let startmilliSecs = startDate.getMilliseconds();

  for (let i = 0; i < n; i++) {
    sum = sum + i;
  }

  let endDate = new Date();
  let endMilliSecs = endDate.getMilliseconds();

  let timeElapsed = endMilliSecs - startmilliSecs;
  return { time: timeElapsed, sum: sum };
}

let result = calculateTime(10000000);
console.log(result.sum, result.time);
