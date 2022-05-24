function dishwasher(input){
    let bottlesAmount = Number(input[0]);
    let index = 1;
    let command = input[index];
    let detergentQuantity = bottlesAmount * 750;
    let detergentNeeded = 0;
    let plates = 0;
    let pots = 0;

    while(command !== "End"){
        dishes = Number(input[index]);
        pots = Number(input[index++]);

        if(index % 3  === 0){
            detergentNeeded += command * 15;
        }else{
            detergentNeeded += command * 5;
        }

        if(detergentNeeded > detergentQuantity){
            break;
        }

        if(index % 3 === 0){
            pots = Number(input[index]);
            pots += Number(command)
        }else{
            plates += Number(command)
        }
        index++;
        command = input[index]
    }
    console.log(pots)

    if(detergentNeeded <= detergentQuantity){
        console.log(`Detergent was enough!`);
        console.log(`${plates} dishes and ${pots} pots were washed.`);
        console.log(`Leftover detergent ${Math.abs(detergentQuantity - detergentNeeded)} ml.`);
    }else{
        console.log(  `Not enough detergent, ${Math.abs(detergentNeeded - detergentQuantity)} ml. more necessary!`);
    }
}
dishwasher(["2", "53", "65", "55", "End"])