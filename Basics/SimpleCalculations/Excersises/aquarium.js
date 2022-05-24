function aquarium(input) {
    let lenghtInC = Number(input[0]);
    let widthInC = Number(input[1]);
    let heightC = Number(input[2]);
    let percent = Number(input[3]);

    let capacity = lenghtInC * widthInC * heightC
    let litres = capacity * (1 / 1000);
    let spaceTaken = percent / 100;
    let neededLitres = litres * (1 - spaceTaken);
    console.log(`${neededLitres} litres.`)
}
aquarium(["85", "75", "47", "17"])