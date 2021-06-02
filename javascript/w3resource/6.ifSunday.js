/** 
 * * Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050.
*/

for(let year = 2014; year<= 2050; year++){
  let dayOfTheDate = new Date(`January 1, ${year}`).getDay();
  // Sunday is regarded as 0 in js 
  if(dayOfTheDate === 0){
    console.log(`1st January of Year ${year} is sunday.`);
  } else {
    console.log(`It's not..`);
  }  
}
