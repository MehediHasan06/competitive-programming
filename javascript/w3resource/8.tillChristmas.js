const daysLeft = () => {
  var today = new Date().getTime();
  var christmas = new Date(`12/25/${new Date().getFullYear()}`).getTime();
  // var remainDays = Math.floor(((christmas-today)/(1000*3600*24))+0.5); 
  var remainDays = (christmas-today)/(1000*3600*24);

  return remainDays;
}

console.log(daysLeft());
