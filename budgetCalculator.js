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