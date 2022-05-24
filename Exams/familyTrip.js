function familyTrip(input) {
    let budget = Number(input[0]);
    let overnightCount = Number(input[1]);
    let priceForTheOvernight = Number(input[2]);
    let percent = Number(input[3]);

    if (overnightCount > 7) {
        priceForTheOvernight = priceForTheOvernight * 0.95;
    }
    let wholeVacation = overnightCount * priceForTheOvernight;
    let totalCost = budget * (percent / 100);
    let sum = wholeVacation + totalCost;

    if (budget >= sum) {
        console.log(`Ivanovi will be left with ${(budget - sum).toFixed(2)} leva after vacation.`)
    } else {
        console.log(`${(sum - budget).toFixed(2)} leva needed.`)
    }
}
familyTrip(["800.50",
    "8",
    "100",
    "2"])


