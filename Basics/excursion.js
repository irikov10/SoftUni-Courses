function excursion(input) {
    let people = Number(input[0]);
    let nightAmount = Number(input[1]);
    let cardsAmount = Number(input[2]);
    let ticketsCount = Number(input[3]);
    
    let nights = nightAmount * 20;
    let cards = cardsAmount * 1.60;
    let tickets = ticketsCount * 6;
    let sum = nights + cards + tickets;
    let sumForFroup = sum * people;
    let finalSum = sumForFroup * 1.25;
    console.log(finalSum.toFixed(2))
}
excursion(["131",
"9",
"33",
"46"])