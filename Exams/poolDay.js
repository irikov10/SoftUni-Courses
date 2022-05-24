function poolDay(input){
    let amount = Number(input[0]);
    let tax = Number(input[1]);
    let priceForDeck = Number(input[2]);
    let priceForUmbrella = Number(input[3]);

    let totalTax = amount * tax;
    let peopleDeck = Math.ceil(amount * 0.75);
    let peopleUmbrella = Math.ceil(amount * 0.50)
    let deck = peopleDeck * priceForDeck; 
    let umbrella = peopleUmbrella * priceForUmbrella
    let sum = totalTax + deck + umbrella
    console.log(`${sum.toFixed(2)} lv.`)
}
    poolDay(["50", "6", "8", "4"])