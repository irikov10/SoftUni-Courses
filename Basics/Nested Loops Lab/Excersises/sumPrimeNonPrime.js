function sumPrimeNonPrime(input){

    // до 'stop';
    // ако числото е отрицателно- continue;
    // събиране на числата (прости с прости и съставни със съставни);

    let index = 0;
    let num = 0;
    let command = input[index];
    let isPrime = true;
    let primeSum = 0;
    let nonPrimeSum = 0;

    while(command !== "stop"){
        num = Number(input[command]);
        if(num < 0){
            console.log("Number is negative.");
            index++;
            command = input[index];
            continue;
        }

        if(num === 1){
            isPrime = false;
        }else if(num === 2){
            isPrime = true;
        }else{
            for(let i = num; i >= 2; i--){
                if(num % i === 0, i !== num){
                    isPrime = false;
                    break;
                }
            }
        }

        if(isPrime){
            primeSum += num
        }else{
            nonPrimeSum += num
        }

        console.log(primeSum);
        console.log(nonPrimeSum)
        
        index++
        command = input[index];
    }


}
sumPrimeNonPrime(["3","9","0","7","19","4","stop"])