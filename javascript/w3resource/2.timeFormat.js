/**
 * Write a JavaScript program to get the current date.
 */

const currentDate = () => {
  const currentTime = new Date();
  const year = currentTime.getFullYear();
  const month = currentTime.getMonth() + 1; //It starts counting from 0 to 11.
  const date = currentTime.getDate();

  return `${month}/${date}/${year}`;
}

console.log(currentDate());
