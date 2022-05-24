function filmPremiere(input) {
    let projection = input[0];
    let filmPackage = input[1];
    let tickets = Number(input[2]);
    let totalPrice = 0

    switch (projection) {
        case "John Wick":

            if (filmPackage === "Drink") {
                totalPrice = tickets * 12;
            } else if (filmPackage === "Popcorn") {
                totalPrice = tickets * 15;
            } else if (filmPackage === "Menu") {
                totalPrice = tickets * 19;
            }
            break;

        case "Star Wars":

            if (filmPackage === "Drink") {
                totalPrice = tickets * 18;
            } else if (filmPackage === "Popcorn") {
                totalPrice = tickets * 25;
            } else if (filmPackage === "Menu") {
                totalPrice = tickets * 30;
            }

            if (tickets >= 4) {
                totalPrice = totalPrice * 0.70;
            }
            break;

        case "Jumanji":


            if (filmPackage === "Drink") {
                totalPrice = tickets * 9;
            } else if (filmPackage === "Popcorn") {
                totalPrice = tickets * 11;
            } else if (filmPackage === "Menu") {
                totalPrice = tickets * 14;
            }

            if (tickets == 2) {
                totalPrice = totalPrice * 0.85;
            }
            break;

    }
    console.log(`Your bill is ${totalPrice.toFixed(2)} leva.`)
}
filmPremiere(["Jumanji",
"Menu",
"3"])


