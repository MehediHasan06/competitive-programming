/**
 * Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.
 */
/**
 * Leap Year Logic
 * Every year that is exactly divisible by four is a leap year, except for years that are exactly divisible by 100, but these centurial years are leap years if they are exactly divisible by 400. For example, the years 1700, 1800, and 1900 are not leap years, but the years 1600 and 2000 are.
 */

const year = 1600;
if ((year % 4 == 0 && year % 100 !== 0) || year % 400 == 0) {
  console.log("This is a leap year.");
} else {
  console.log("Not a leap year.");
}
