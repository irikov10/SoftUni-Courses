function evenAndOddSubtraction(arr) {
    let sumOfEvenNums = 0;
    let sumOfOddNums = 0;
    let total = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sumOfEvenNums += arr[i];
        } else {
            sumOfOddNums += arr[i];
        }
    }

    total = sumOfEvenNums - sumOfOddNums;
    console.log(total)
}
evenAndOddSubtraction([1, 2, 3, 4, 5, 6])