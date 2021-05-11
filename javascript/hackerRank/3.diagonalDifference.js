// Get the absolute difference of the diagonals of squre matrix.

const arr = [
  [1, 2, 7],
  [3, 4, 5],
  [6, 7, 8],
];
const n = arr.length;

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
