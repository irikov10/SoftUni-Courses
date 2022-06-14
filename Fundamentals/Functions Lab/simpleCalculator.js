function simpleCalculator(a, b, operator){
    let res;

    switch(operator){
        case "multiply": res = (a,b) => a * b;break;
        case "divide":  res = (a,b) => a / b;break;
        case "add": res = (a,b) => a + b;break;
        case "subtract": res = (a,b) => a - b;break;
    }
    console.log(res(a,b));
}
simpleCalculator(5,5,'multiply')
simpleCalculator(40,8,'divide')
simpleCalculator(12,19,'add')
simpleCalculator(50,13,'subtract')