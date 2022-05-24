function maxNumber(input) {
    let index = 0;
    let command = input[index];
    index++

    let biggestNumber = Number(input[index]);

    while (command !== "Stop") {

        let num = Number(command);

        if (biggestNumber < num) {
            biggestNumber = num
        }

        command = input[index];
        index++
    }
    console.log(biggestNumber)
}
maxNumber(["45",
"-20",
"7",
"99",
"Stop"])


