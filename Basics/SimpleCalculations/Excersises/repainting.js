function repainting(input) {
    neededQuantityNylon = Number(input[0]);
    amountOfPaintNeeded = Number(input[1]);
    quantityOfSolvent = Number(input[2]);
    amountOfHours = Number(input[3]);

    let priceOfBags = 0.40;
    let priceForNylon = (neededQuantityNylon + 2) * 1.50;
    let priceForPaint = (amountOfPaintNeeded + amountOfPaintNeeded * 0.1) * 14.50;
    let priceForSolvent = quantityOfSolvent * 5.00;
    let priceForAllMaterials = priceForNylon + priceForPaint + priceForSolvent + priceOfBags;
    let sumForCraftman = (priceForAllMaterials * (30 / 100)) * amountOfHours;
    let finalPrice = priceForAllMaterials + sumForCraftman;
    console.log(finalPrice)
}
    repainting(["10", "11", "4", "8"])
