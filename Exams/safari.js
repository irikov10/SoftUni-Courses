function safari(input){
    let budget = Number(input[0]);
    let fuel = Number(input[1]);
    let dayOfTheWeek = input[2];
    let guide = 100;

    let fuelNeeded = fuel * 2.10;
    let sum = fuelNeeded + guide;

    if(dayOfTheWeek === "Saturday"){
        sum = sum * 0.90;
    }else{
        sum = sum * 0.80
    }
    
    if(budget >= sum){
        console.log(`Safari time! Money left: ${(budget - sum).toFixed(2)} lv.`);
    }else{
        console.log(`Not enough money! Money needed: ${(sum - budget).toFixed(2)} lv.`);
    }
}
safari(["120",
"30",
"Saturday"])

