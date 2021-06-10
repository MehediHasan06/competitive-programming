/**
 **  to calculate days left until next Christmas
 */

const daysLeft = () => {
  var today = new Date().getTime();
  if(new Date().getMonth() == 11 && new Date().getDate() > 25){
    var christmas = new Date(`12/25/${new Date().getFullYear() + 1}`).getTime();  
  } else {
    var christmas = new Date(`12/25/${new Date().getFullYear()}`).getTime();  
  }

  var remainDays = Math.ceil(((christmas-today)/(1000*3600*24))); 
  return remainDays;
}

console.log(daysLeft());
