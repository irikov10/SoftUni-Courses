function sumFirstAndLastArrayElements(numbers){
    let firstNum = numbers[0];
    let secondNum = numbers[numbers.length - 1];

    let sum = firstNum + secondNum;
    console.log(sum)
}
sumFirstAndLastArrayElements([20, 30, 40])