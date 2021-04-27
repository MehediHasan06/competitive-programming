const currentTime = new Date();
const year = currentTime.getFullYear();
const month = currentTime.getMonth() + 1; //It starts counting from 0 to 11.
const date = currentTime.getDate();

console.log(`${month}/${date}/${year}`);