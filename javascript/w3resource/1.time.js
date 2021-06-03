/**
 * Write a JavaScript program to display the current day and time in the following format.
 * *Today is : Thursday        
 * *Current Time is : 3:3:23 PM
*/

const displayTime = () =>{
  const date = new Date();

  const day = date.getDay();
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  // Pc's timezone is set as bd. Thats why we're getting the local time while using vscode. But, browser's time zone is different. So, time related problem should be little tricky when we're tring to solve it using any repl.

  const format = hours >= 12 ? "PM" : "AM";
  if (hours > 12) {
    hours = Math.abs(hours - 12);
  }

  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return `Today is : ${weekDays[day]}\nCurrent Time is : ${hours}:${minutes}:${seconds} ${format}\n`  
}

console.log(displayTime());
