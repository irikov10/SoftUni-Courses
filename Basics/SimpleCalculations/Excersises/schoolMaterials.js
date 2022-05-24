function schoolMaterials(input) {
    let amountOfPens = Number(input[0] * 5.80);
    let amountOfMarkersPackages = Number(input[1] * 7.20);
    let literOfDetergent = Number(input[2] * 1.20);
    let discount = Number(input[3] / 100);

    let allMaterials = amountOfPens + amountOfMarkersPackages + literOfDetergent;
    let priceWithDiscount = allMaterials - (allMaterials * discount);
    console.log(priceWithDiscount)
}
    schoolMaterials(["2", "3", "4", "25"])