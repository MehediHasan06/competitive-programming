const a = 5;
const b = 6;
const c = 7;

// s for semiperimeter
const s = (a + b + c) / 2;
const sum = Math.sqrt(s * (s - a) * (s - b) * (s - c));

console.log(sum);
