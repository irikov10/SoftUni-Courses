function oscarsWeekInCinema(input) {
    let name = input[0];
    let type = input[1];
    let ticketsBought = Number(input[2]);
    let totalPrice = 0;

    if (name === "A Star Is Born") {

        if (type === "normal") {
            totalPrice = ticketsBought * 7.5;
        } else if (type === "luxury") {
            totalPrice = ticketsBought * 10.5;
        } else if (type === "ultra luxury") {
            totalPrice = ticketsBought * 13.5;
        }
    } else if (name === "Bohemian Rhapsody") {

        if (type === "normal") {
            totalPrice = ticketsBought * 7.35;
        } else if (type === "luxury") {
            totalPrice = ticketsBought * 9.45;
        } else if (type === "ultra luxury") {
            totalPrice = ticketsBought * 12.75;
        }

    } else if (name === "Green Book") {

        if (type === "normal") {
            totalPrice = ticketsBought * 8.15;
        } else if (type === "luxury") {
            totalPrice = ticketsBought * 10.25;
        } else if (type === "ultra luxury") {
            totalPrice = ticketsBought * 13.25;
        }

    } else if (name === "The Favourite") {

        if (type === "normal") {
            totalPrice = ticketsBought * 8.75;
        } else if (type === "luxury") {
            totalPrice = ticketsBought * 11.55;
        } else if (type === "ultra luxury") {
            totalPrice = ticketsBought * 13.95;
        }
    }
    console.log(`${name} -> ${totalPrice.toFixed(2)} lv.`)
}
oscarsWeekInCinema(["The Favourite",
"ultra luxury",
"34"])


