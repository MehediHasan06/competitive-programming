/** 
 * todo - Get the absolute difference of the diagonals of squre matrix.
*/ 

const arr = [
  [1, 2, 7],
  [3, 4, 5],
  [6, 7, 8],
];
const n = arr.length; // Here, array length is 3

let leftDiagonalSum = 0;
let rightDiagonalSum = 0;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (i == j) {
      leftDiagonalSum += arr[i][j];
    }
    if (i + j == n - 1) {
      rightDiagonalSum += arr[i][j];
    }
  }
}

const diagonalDifference = Math.abs(leftDiagonalSum - rightDiagonalSum);

console.log(diagonalDifference);

/**
 * * arrayName[class][subclass]
* *You can access an array within an array within an array. It might get confusing but to access them just keep adding [] to your code to access the “subclasses”
 */