
// Problem-1 
function kilometerToMeter (kilometer) {
        
                  var meter = kilometer * 1000;
                  return meter;
                }

    var TwoKilometer = kilometerToMeter (2);
    console.log (TwoKilometer);

    var FiveKilometer = kilometerToMeter (5);
    console.log (FiveKilometer);

// Problem-2
// I need 2 watches, 3 mobiles and 1 laptop. 
function budgetCalculator (watch, phone, laptop) {

    var watchPrise =  watch * 50;
    var phonePrise =  phone * 100;
    var laptopPrise = laptop * 500;

     var totalBudget = watchPrise + phonePrise + laptopPrise;
     return totalBudget;
}

var myBudget = budgetCalculator (2, 3, 1);

console.log (myBudget);

// Problem-3
// Hotel cost

function hotelCost (day) {

    taka = 0;
    if (day <= 10) {

        taka = day * 100;

    }
    else if (day <= 20) {

        var firstPart = 10 * 100;
        var remaining = day - 10;
        var secondPart = remaining * 80;

        taka = firstPart + secondPart;
    }
    else {
        var firstPart = 10 * 100;
        var secondPart = 10 * 80;
        var remaining = day - 20;
        var thirdPart = remaining * 50;

         taka = firstPart + secondPart + thirdPart;

    }
    return taka;
}
var myCost = hotelCost (21);

console.log (myCost);


// Problem 4
// Among the players of Bangladesh crickect team whose name is big
function megaFriend(players) {

    var word = 0;
    var longest = 0;
for (var i = 0; i < players.length; i++) {

    if (players[i].length > word) {

        var word = players[i].length;
        longest = players[i];
    }
}
return longest;
}
var largestName = megaFriend(["Shakib", "Tamim", "Mushfiqur",  "Mahmudullah", "Mashrafe"]);
console.log (largestName);