function addAndSubtract(num1, num2, num3){
    let resultFromSum = sum(num1, num2)
    let finalRes = subtract(resultFromSum, num3);
    console.log(finalRes)

    function sum(num1, num2){
        return num1 + num2;
    }

    function subtract(resultFromSum, num3){
        return resultFromSum - num3
    }
}
addAndSubtract(23,6,10)