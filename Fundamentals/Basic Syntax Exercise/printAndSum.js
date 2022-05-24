function printAndSum(startNumber, endNumber){

    let printLine = '';
    let sum = 0;

    for(let i = startNumber; i <= endNumber; i++){
        sum += i
        printLine += `${i} `
    }
    console.log(printLine);
    console.log(`Sum: ${sum}`)
}
printAndSum(5, 10)