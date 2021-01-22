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
