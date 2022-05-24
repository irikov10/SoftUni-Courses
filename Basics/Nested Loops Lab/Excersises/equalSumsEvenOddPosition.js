function equalSumsEvenOddPosition(input) {

    let num1 = Number(input[0]);
    let num2 = Number(input[1]);

    let buff = "";
    

    for (let i = num1; i <= num2; i++) {
        let num = i.toString();

        let sumEven = Number(num[0]) + Number(num[2]) + Number(num[4])
        let sumOdd = Number(num[1]) + Number(num[3]) + Number(num[5])

        if(sumEven === sumOdd ){
            buff +=  " " + `${num}`
        }
    }
    console.log(buff)
}         
equalSumsEvenOddPosition(["100000", "100050"])