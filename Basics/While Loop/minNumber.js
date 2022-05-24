function minNumber(input){
    let index = 0;
    let command = input[index];
    index++

    let smallestNumber = Number(input[index]);

    while (command !== "Stop") {

        let num = Number(command);

        if (smallestNumber > num) {
            smallestNumber = num;
        }

        command = input[index];
        index++
    }
    console.log(smallestNumber)
}
minNumber(["100",
"99",
"80",
"70",
"Stop"])
