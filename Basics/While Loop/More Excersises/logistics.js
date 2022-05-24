function logistics(input){
    let loadCount = Number(input[0]);

    let loadsWithBus = 0;
    let loadsWithTruck = 0;
    let loadsWithTrain = 0;
    let sum = 0;

    for(let i = 1; i <= loadCount; i++){
        let quantity = Number(input[i]);
        sum += quantity;

        if(quantity <= 3){
            loadsWithBus += quantity
        }else if(quantity > 3 && quantity <= 11){
            loadsWithTruck += quantity
        }else if(quantity >= 12){
            loadsWithTrain += quantity
        }
    }
    let avgLoads = (loadsWithBus * 200 + loadsWithTruck * 175 + loadsWithTrain * 120) / sum;
    let busPercentage = loadsWithBus / sum * 100;
    let truckPercentage = loadsWithTruck / sum * 100;
    let trainPercentage = loadsWithTrain / sum * 100;

    console.log(avgLoads.toFixed(2));
    console.log(`${busPercentage.toFixed(2)}%`);
    console.log(`${truckPercentage.toFixed(2)}%`);
    console.log(`${trainPercentage.toFixed(2)}%`);
}
logistics(['4', '1', '5','16','3'])