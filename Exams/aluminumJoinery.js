function aluminumJoinery(input) {
    let count = Number(input[0]);
    let type = input[1];
    let way = input[2];

    if (type === "90X130") {
        let price = 110 * count;

        if (count > 30) {
            price = price + (price * 0.50);
        } else if (count > 60) {
            price = price * 0.80;
        } else if (count > 99) {
            price = price * 1.04
        }

        if (way === "With delivery") {
            price = price + 60;
        } else if(way === "Without delivery"){
            price = price + 0;
        }
        console.log(`${price} BGN`);

    } else if (type === "100X150") {
        let price = 140 * count;

        if (count > 40) {
            price = price * 0.94;
        } else if (count > 80) {
            price =  price * 0.90;
        } else if (count > 99) {
            price =  price * 1.04
        }

        if (way === "With delivery") {
            price =  price + 60;
        } else {
            price =  price + 0;
        }
        console.log(`${price} BGN`);

    } else if (type === "130X80") {
        let price = 190 * count;

        if (count > 20) {
            price =  price * 0.93;
        } else if (count > 50) {
            price =  price * 0.88;
        } else if (count > 99) {
            price =  price * 1.04
        }

        if(way === "With delivery"){
            price =  price + 60;
        }else{
            price =  price + 0;
        }
        console.log(`${price} BGN`);

    } else if (type === "200X300") {
        let price = 250 * count;

        if (count > 25) {
            price =  price * 0.91;
        } else if (count > 50) {
            price =  price * 0.86;
        } else if (count > 99) {
            price =  price * 1.04
        }

        if(way === "With delivery"){
            price =  price + 60;
        }else{
            price =  price + 0;
        }
        console.log(`${price} BGN`);
    }

    if(way === "90X130" && way === "100X150" && way === "130X80" && way === "200X300"){

        if(count < 10){
            console.log("Invalid order")
        }
    }
}
aluminumJoinery(["40", 
"90X130",
"Without delivery"])


