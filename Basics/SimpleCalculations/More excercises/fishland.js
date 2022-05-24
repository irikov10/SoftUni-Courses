function fishland(input){
    let mackerel = Number(input[0]);
    let sprat = Number(input[1]);
    let bonito = Number(input[2]);
    let scad = Number(input[3]);
    let clams = Number(input[4]);

    let priceForBonito = mackerel + (mackerel * 0.60);
    let sumForBonito = bonito * priceForBonito;
    let priceForScad = sprat + (sprat * 0.80);
    let sumForScad = scad * priceForScad;
    let priceForClams = clams * 7.50;
    let totalPrice = sumForBonito + sumForScad + priceForClams;
    console.log(totalPrice.toFixed(2));
}
    fishland(["6.90", "4.20", "1.5", "2.5", "1"])