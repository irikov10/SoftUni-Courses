function grandpaStavri(input){
    let days = Number(input[0]);
    
    let litres = 0;
    let degrees = 0;
    let sumOfLitres = 0;
    let sumOfDegrees = 0;
    let avg = 0;
    for(let i = 1; i < input.length ; i++){
        litres = Number(input[i++]);
        degrees = Number(input[i]);

        sumOfLitres += litres
        sumOfDegrees += litres * degrees;
    
    }

    avg = sumOfDegrees / sumOfLitres
    console.log(`Liter: ${sumOfLitres.toFixed(2)}`);
    console.log(`Degrees: ${avg.toFixed(2)}`);

    if(avg <= 38){
        console.log("Not good, you should baking!")
    }else if(avg > 38 && avg <= 42){
        console.log("Super!" )
    }else if(avg > 42){
        console.log("Dilution with distilled water!" )
    }
}
grandpaStavri(["3",
"100",
"45",
"50",
"55",
"150",
"36"])
