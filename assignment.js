

// project 1: kilometerToMeter

function kilometerToMeter(km){
    if(km > 0){
        var meter = km * 1000;
        return meter;
    }

}
var convtr = kilometerToMeter(-20);
console.log(convtr);


// project 2: budgetCalculator

function budgetCalculator(watch, phone, laptop) {
    var price1 = watch * 50;
    var price2 = phone * 100;
    var price3 = laptop * 500;
    var total = price1 + price2 + price3;
    return total;
}

// project 3: hotelCost

function hotelCost(days) {
    if(days <= 10 && days > 0){
        cost = days * 100;
        return cost;
    }
    if(days <= 20 && days > 0){
        var cost1 = 100 * 10;
        var remaning = days - 10;
        var cost2 = remaning * 80;
        cost = cost1 + cost2;
        return cost;
    }
    if(days >= 21){
        var cost1 = 100 * 10;
        var cost2 = 80 * 10;
        var remaning = days - 20;
        var cost3 = remaning * 50;
        cost = cost1 + cost2 + cost3;
        return cost;
    }
}


// project 4: megaFriend

function megaFriend(array){
    var maxLength = array[0].length;
    for(var i = 0; i <array.length; i++){
        var longestWord = "";
        if(array[i].length > maxLength){
            maxLength = array[i].length;
            longestWord = array[i];  
        }
    }
    return longestWord;
}   
