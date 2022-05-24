function solve2(input){
    let breadAmount = Number(input.shift());
    let totalSugar = 0;
    let totalFlour = 0;
    let maxFlour = 0;
    let maxSugar = 0;

    for(let i = 0; i < input.length; i++){
        let sugarQuantity = Number(input[i++]);
        let flourQuantity = Number(input[i]);

        totalSugar += sugarQuantity;
        totalFlour += flourQuantity;

        if(sugarQuantity > maxSugar){
            maxSugar = sugarQuantity;
        }

        if(flourQuantity > maxFlour){
            maxFlour = flourQuantity
        }
    }

    let sugarNeeded = Math.ceil(totalSugar / 950);
    let flourNeeded = Math.ceil(totalFlour / 750);
    console.log(`Sugar: ${sugarNeeded}`);
    console.log(`Flour: ${flourNeeded}`);
    console.log(`Max used flour is ${maxFlour} grams, max used sugar is ${maxSugar} grams.`)
}
solve2(["4",
"500",
"350",
"560",
"430",
"600",
"345",
"578",
"543"])
