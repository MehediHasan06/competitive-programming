/**
 * todo - Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with places after the decimal.
 */

function plusMinus(arr) {
  // Write your code here
  let negNum = 0;
  let zeroNum = 0;
  let posNum = 0;
  let n = arr.length;

  for (let i in arr) {
      if (arr[i] < 0) {
          negNum += 1;
      } else if (arr[i] > 0) {
          posNum += 1;
      } else {
          zeroNum += 1;
      }
  };

  let negRatio = (negNum / n).toFixed(6);
  let zeroRatio = (zeroNum / n).toFixed(6);
  let posRatio = (posNum / n).toFixed(6);
  let result = `${posRatio}\n${negRatio}\n${zeroRatio}`;
  console.log(result);
}

