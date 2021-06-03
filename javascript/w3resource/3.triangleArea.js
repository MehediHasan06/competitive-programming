/**
 * Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7
 */

 const triangleArea = (a, b, c) => {
  // s for semiperimeter
  const s = (a + b + c) / 2;
  const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  return area;
}

console.log(triangleArea(5,6,7));
