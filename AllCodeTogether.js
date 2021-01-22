


//Problem 1 : Convert distance from kilometer to meter
//Solution
// Creating a function named kilometerToMeter
function kilometerToMeter(userInputKilometer){
    if( userInputKilometer>0){
        var convertMeter = userInputKilometer*1000;
        return convertMeter;
    }
    else{
        console.log("Sorry Invalid Input! Distance can't be zero/negative.Try again!")
    }
    
}
//calling the function 
var afterConvert = kilometerToMeter(8);
console.log(afterConvert);

//Problem : 2 
//Take 3 number from user as input (watch,mobile,laptop) which price respectively 50,100 and 500 . Calculator total budget using function.
//Solution
//creating a function named budgetCalculator

function budgetCalculator(numberOfWatch,numberOfMobile,numberOfLaptop){

    if (numberOfWatch<0 || numberOfMobile<0 || numberOfLaptop<0){
     console.log("Invalid Input! Try again!")
 }
else
 {
    var priceOfWatch = 50 ;
    var priceOfMobile = 100 ;
    var priceOfLaptop = 500 ;
    var totalBudget = numberOfWatch*priceOfWatch + numberOfMobile*priceOfMobile + numberOfLaptop*priceOfLaptop;
    return totalBudget;
 }
}
var budgetIs = budgetCalculator (2,3,4);
console.log(budgetIs);

//Problem : 3
// suppose you have hotel in which if customer stay 1-10 days the rent per day is 100 TK. If they stay 11-20 days the they'll get discount and the rent per day will be 80 TK and if the stay more than 20 days they have to pay 50 tk rentper day. Now calculator the total hotel cost  of a customer.
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

//Problem : 4
// Take input of few string and find out which one is the longest string.
//Solution
function megaFriend(friendsName){

    var maxLetter = friendsName[0];

    for(var i =0; i<friendsName.length;i++){
        var temp = friendsName[i];
        if(temp.length>maxLetter.length){
            maxLetter = temp;
        }
    }
    return maxLetter;
}
var names = megaFriend (["Afsana" , "Nazma" , "Srity" , "Zinia" , "Humayra"]);
console.log(names);


