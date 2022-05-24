function vegetableMarket(input){

    let vegetablesPrice = Number(input[0]);
    let fruitsPrice = Number(input[1]);
    let totalKilosVegetables = Number(input[2]);
    let totalKilosFruits = Number(input[3]);

    let totalVegePrice = vegetablesPrice * totalKilosVegetables;
    let totalFruitsPrice = fruitsPrice * totalKilosFruits;
    let sum = totalVegePrice + totalFruitsPrice;
    let res = sum / 1.94;
    console.log(res.toFixed(2));
}
    vegetableMarket(["0.194", "19.4", "10", "10"])	