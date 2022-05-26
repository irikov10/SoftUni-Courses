function integerAndFloat(num1, num2, num3){
    let sum = num1 + num2 + num3;
    let sumToString = String(sum);
    let isFloat = false;

    for(let i = 0; i < sumToString.length; i++){
        if(sumToString[i] === "."){
            isFloat = true;
        } 
    }

    console.log(`${sum} - ${isFloat ? "Float" : "Integer"}`);
}
integerAndFloat(9, 100, 1.1)