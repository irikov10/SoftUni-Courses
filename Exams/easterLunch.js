function easterLunch(input) {
    let easterBreadAmount = Number(input[0]);
    let eggsAmount = Number(input[1])
    let biscuitsInKilo = Number(input[2]);

    let paintForEggs = (eggsAmount * 12) * 0.15
    let priceForEasterBread = easterBreadAmount * 3.20;
    let priceForEggs = eggsAmount * 4.35;
    let priceForBuiscits = biscuitsInKilo * 5.40;
    let sum = priceForEasterBread + priceForBuiscits + priceForEggs + paintForEggs
    console.log(sum.toFixed(2))
}
easterLunch(["4",
"4",
"3"])

