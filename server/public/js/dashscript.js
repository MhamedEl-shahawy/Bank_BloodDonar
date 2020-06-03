let donationDay = document.getElementById("donationDay");
let nextDonationDay = document.getElementById("nextDonationDay");

window.onload = () => {
  let newDate = donationDay.textContent.split('-');
  let years = Number(newDate[0]);
  let months = 3 + Number(newDate[1]);
  let days = 22 + Number(newDate[2]);
/*   console.log(newDate)
  console.log(years)
 console.log(months)
 console.log(days) */

   let newDays = 0;
   let newMonths = 0;

  if(days > 30){
     newDays = days - 30;
     months++;
  }else {
     newDays = days;
  }
   if(months > 12){
      newMonths = months - 12;
      years++;
   }else{
    newMonths = months;
   }

   nextDonationDay.textContent = `${years}-${newMonths}-${newDays}`;
  
}
