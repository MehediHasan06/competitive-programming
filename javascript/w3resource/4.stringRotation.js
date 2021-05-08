/**
 *  Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front. 
 */

 let str = "w3resource";
 const count = str.length;
 let reverseString = "";
 
 for(let i=0; i<count; i++){
   let chunkString = str.substring(str.length-1);
   str = str.substring(0, str.length-1);
   reverseString = reverseString.concat(chunkString);  
 }
 
 console.log(reverseString);
