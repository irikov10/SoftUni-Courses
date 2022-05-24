function foodDelivery(input) {
    let amountOfChickenMenus = Number(input[0]);
    let menuWithFish = Number(input[1]);
    let amountOfVegetarianMenus = Number(input[2]);
    let priceOfTheDelivery = 2.50

    let priceOfTheChickenMenus = amountOfChickenMenus * 10.35;
    let amountOfMenusWithFish = menuWithFish * 12.40;
    let Vege = amountOfVegetarianMenus * 8.15;
    
    let totalPrice = priceOfTheChickenMenus + amountOfMenusWithFish + Vege;
    let desertPrice = totalPrice * 0.2;
    let totalPriceOfTheOrder = totalPrice + desertPrice + priceOfTheDelivery
    console.log(totalPriceOfTheOrder)
}
foodDelivery(["9", "2", "6"])