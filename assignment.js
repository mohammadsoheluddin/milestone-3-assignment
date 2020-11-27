/** 
function feetToMile(feet) {
    var mile = feet/5280;
    return mile;
}
var mile = feetToMile();
console.log(mile);
*/

/** 
function woodCalculator(chair, table, bed) {
    var chair = chair * 1;
    var table = table * 3;
    var bed = bed * 5;
    totalWood = chair + table + bed;
    return totalWood;  
}
var totalWood = woodCalculator(5, 10, 15);
console.log(totalWood);
*/

/** 
function brickCalculator(floor){
    var feet = 0;
    if (floor <= 10 ){
        feet = floor * 15;
    } else if (floor <= 20) {
        var first = 10 * 15;
        var remaining = floor - 10;
        var second = remaining * 12;
        feet = first + second;
    } else {
        var first = 10 * 15;
        var second = 10 * 12;
        var remaining = floor - 20;
        var third = remaining * 10;
        feet = first + second + third;   
    }
    var brick = feet * 1000;
    return brick; 
}
var brickCount = brickCalculator(50);
console.log(brickCount);
*/

function tinyFriend(friends){
        var result = [];
        var c = 0;
        var smallest = friends[0].length;
        for(var i = 1; i < friends.length; i++){
            if(friends[i].length < smallest)
            {
                smallest = friends[i].length;
            }
        }
        for(var i = 0; i < friends.length; i++){
            if(friends[i].length==smallest)
        {
            result[c]=friends[i];
            c++;
        }
    }
    return result;
}

var friends = ['Akbar', 'Rashid', 'Asaduzzam', 'Nur'];

var res4 = tinyFriend(friends);
console.log(res4);
