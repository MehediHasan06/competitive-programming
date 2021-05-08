/**
 * Write a JavaScript program to display the current day and time in the following format.
*/

const date = new Date();
const day = date.getDay();

// Pc's timezone is set as bd. Thats why we're getting the local time while using vscode. But, browser's time zone is different. So, time related problem should be little tricky when we're tring to solve it using any repl.

let hours = date.getHours();

const format = hours >= 12 ? "PM" : "AM";
if (hours > 12) {
  hours = Math.abs(hours - 12);
}

const minutes = date.getMinutes();
const seconds = date.getSeconds();

const weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

console.log(
  `Today is : ${weekDays[day]}\nCurrent Time is : ${hours}:${minutes}:${seconds} ${format}\n`
);
