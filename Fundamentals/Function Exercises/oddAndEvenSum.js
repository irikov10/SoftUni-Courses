function oddAndEvenSum(num){
    let numAsString = num.toString();
    let evenSum = 0;
    let oddSum = 0;

    for(let i of numAsString){
        let currentNum = Number(i)
        if(currentNum % 2 === 0){
            evenSum += currentNum;
        }else{
            oddSum += currentNum;
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)
}
oddAndEvenSum(1000435)