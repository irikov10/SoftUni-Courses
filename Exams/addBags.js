function addBags(input){
    let priceForBags = Number(input[0]);
    let kilograms = Number(input[1]);
    let days = Number(input[2]);
    let amount = Number(input[3]);
    let d = 0

    let totalPrice = priceForBags / amount;

    if(kilograms <= 10){
        d = totalPrice * 0.80;
    }else if(kilograms > 10 && kilograms <= 20){
        d = totalPrice * 0.50;
    }else if(kilograms > 20){
        d = totalPrice 
    }

    if(days <= 7){
        d = totalPrice * 1.40;
    }else if(days > 7 && days <= 30){
        d = totalPrice * 1.15;
    }else if(days > 30){
        d = totalPrice * 1.10
    }

    let sum = d * amount;
    console.log(`The total price of bags is: ${sum.toFixed(2)} lv.`)
}    
addBags(["25.50",
"5",
"36",
"6"])
