function mobileOperator(input){
    let contract = input[0];
    let type = input[1];
    let addedPhone = input[2];
    let months = Number(input[3]);
    let price = 0

    if(contract === "one"){

        if(type === "Small"){
            price = 9.98;
        }else if(type === "Middle"){
            price = 18.99;
        }else if(type === "Large"){
            price = 25.98;
        }else if("ExtraLarge"){
            price = 35.99;
        }
    }else if(contract === "two"){

        if(type === "Small"){
            price = 8.58;
        }else if(type === "Middle"){
            price = 17.09;
        }else if(type === "Large"){
            price = 23.59;
        }else if("ExtraLarge"){
            price = 31.79;
        }

        price = price - 3.75
    }

    if(addedPhone === "yes"){

        if(price <= 10){
            price = price + 5.50
        }else if(price <= 30){
            price = price + 4.35;
        }else if(price > 30){
            price = price + 3.85;
        }
    }

    let totalPrice = price * months
    console.log(totalPrice.toFixed(2))
}
mobileOperator(["two",
"Large",
"no",
"10"])






