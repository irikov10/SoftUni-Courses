function factorialDivision(num1, num2){

    let sumOfFirstNumber = 1;
    let sumOfSecondNumber = 1;
    let res = 0;

    for(let i = 1 ; i <= num1; i ++){
        sumOfFirstNumber *= i;
    }

    for(let j = 1 ; j <= num2; j ++){
        sumOfSecondNumber *= j;
    }
    
    res = sumOfFirstNumber / sumOfSecondNumber

    console.log(res.toFixed(2));
}
factorialDivision(5, 2)