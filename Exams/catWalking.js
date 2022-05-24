function catWalking(input) {
    let minutes = Number(input[0]);
    let walksCount = Number(input[1]);
    let calories = Number(input[2]);

    let walkMinutes = minutes * walksCount;
    let caloriesPerMinute = walkMinutes * 5;
    let caloriesGet = calories * 0.50;

    if (caloriesPerMinute >= caloriesGet) {
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${caloriesPerMinute}.`)
    } else {
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${caloriesPerMinute}.`)
    }
}
catWalking(["40",
    "2",
    "300"])

