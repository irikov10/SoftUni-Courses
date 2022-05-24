function foodForPets(input) {
    let daysAmount = Number(input[0]);
    let totalQuantity = Number(input[1]);
 
    let index = 2;
    let currentDay = 1;
    let dogQuantity = 0;
    let catQuantity = 0;
    let sum = 0;
    let total = 0;
    
    while(currentDay <= daysAmount){
        let dogQuantityForDay = Number(input[index++]);
        let catQuantityForDay = Number(input[index]);
        sum = dogQuantityForDay + catQuantityForDay
 
        if(days % 3 === 0){
            sum = sum * 0.10;
        }
        dogQuantity += dogQuantityForDay;
        catQuantity += catQuantityForDay;
 
        total = dogQuantity + catQuantity;
        index++;
 
        if(index >= input.length){
            break;
        }
    }
    let resDog = dogQuantity / total * 100;
    let resCat = catQuantity / total * 100;
    let resTotal = total / totalQuantity * 100;
        
    console.log(`Total eaten biscuits: ${Math.round(sum)}gr.`);
    console.log(`${resTotal.toFixed(2)}% of the food has been eaten.`);
    console.log(`${resDog.toFixed(2)}% eaten from the dog.`);
    console.log(`${resCat.toFixed(2)}% eaten from the cat.`)
        
}
foodForPets(["3",
"500",
"100",
"30",
"110",
"25",
"120",
"35"])

