function maxNumber(arr){
    let resultArray = [];

    for(let i = 0; i < arr.length; i++){
        let num1 = arr[i];
        let isBiggest = true;
        for(let j = i + 1; j < arr.length; j++){
            let num2 = arr[j];

            if (num1 <= num2){
                isBiggest = false;
            }
        }

        if(isBiggest){
            resultArray.push(num1);
        }
    }
    console.log(resultArray.join(' '))
}
maxNumber([14, 24, 3, 19, 15, 17])