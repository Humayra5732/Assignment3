//Problem : 3
// suppose you have hotel in which if customer stay 1-10 days the rent per day is 100 TK. If they stay 11-20 days the
// they'll get discount and the rent per day will be 80 TK and if the stay more than 20 days they have to pay 50 tk rent
//per day. Now calculator the total hotel cost  of a customer.
//Solution
function hotelCost( days ){
    if(days>0){
    first10DayRent = 100;
    second10DayRent = 80;
    restOfDayRent = 50;
         if (days>0 && days<=10){
            var totalCost = days*first10DayRent;
         }
         else if(days>10 && days<=20){
             var daysMore10 = days - 10;
            var totalCost = 10*first10DayRent +daysMore10*second10DayRent;
         }
         else if(days>20){
             var daysMore20 = days-20;
             var totalCost = 10*first10DayRent+10*second10DayRent + daysMore20*restOfDayRent;
         }
         return totalCost; 
    }    
    else
    {
        console.log("Days can't be negative.Try with valid input please!")
    }
}
var totalRent = hotelCost(43);
console.log(totalRent);
