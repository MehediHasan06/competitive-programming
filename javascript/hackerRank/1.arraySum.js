// Sum of array
function simpleArraySum(ar) {
  let sum = 0;
  for (let i in ar) {
      sum = sum + ar[i]
  }

  return sum;
}

console.log(simpleArraySum([1,2,3,4]));
