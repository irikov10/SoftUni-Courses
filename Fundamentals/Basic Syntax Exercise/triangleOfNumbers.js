function triangleOfNumbers(num) {
    for (let rows = 1; rows <= num; rows++) {
        let printLine = '';

        for (let c = 1; c <= rows; c++) {
            printLine += `${rows} `
        }

        console.log(printLine)
    }
}
triangleOfNumbers(3)