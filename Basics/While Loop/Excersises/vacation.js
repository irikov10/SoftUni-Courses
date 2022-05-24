function vacation(input) {
    let moneyNeeded = Number(input[0]);
    let availableMoney = Number(input[1]);
    let index = 2;
    let days = 0;
    let action = input[index];
    let spendDays = 0;

    while (availableMoney < moneyNeeded) {
        days++;
        index++;
 
        if (action === "spend") {
            spendDays++;
 
            if (spendDays === 5) {
                console.log("You can't save the money.");
                console.log(days);
                break;
            }

            let moneyToSpend = Number(input[index]);
            availableMoney -= moneyToSpend;

            if (availableMoney < 0) {
                availableMoney = 0;
            }

        } else if (action === "save") {
            let moneyToSave = Number(input[index]);
            availableMoney += moneyToSave;
        }

        index++;
        action = input[index];
    }

    if(availableMoney >= moneyNeeded) {
        console.log(`You saved the money for ${days} days.`);
    }
}
vacation(["250",
"150",
"spend",
"50",
"spend",
"50",
"save",
"100",
"save",
"100"])