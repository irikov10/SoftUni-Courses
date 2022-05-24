function sumOfTwoNumbers(input) {
    let firstNumber = Number(input[0]);
    let endNumber = Number(input[1]);
    let magicNumber = Number(input[2]);

    let num1 = 0;
    let num2 = 0;
    let combinations = 0;
    let isFound = false;
    for (let a = firstNumber; a <= endNumber; a++) {
        for (let b = firstNumber; b <= endNumber; b++) {
            combinations++;
            if (a + b === magicNumber) {
                num1 = a;
                num2 = b;
                isFound = true;
                break;
            }
        }

        if(isFound){
            break;
        }
    }

    if(isFound){
        console.log(`Combination N:${combinations} (${num1} + ${num2} = ${magicNumber})`);
    }else{
        console.log(`${combinations} combinations - neither equals ${magicNumber}`)
    }
}
sumOfTwoNumbers(["88",
"888",
"1000"])