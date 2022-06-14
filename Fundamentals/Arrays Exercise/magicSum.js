function magicSum(arr, wantedNumber){
    let newArray = [];
    for(let i = 0; i < arr.length; i++){

        for(let j = i + 1; j < arr.length; j++){

            if(arr[i] + arr[j] === wantedNumber){
                let result = `${arr[i]} ${arr[j]}`
                newArray.push(result);
            }
        }
    }
    console.log(newArray.join('\n'))
}
magicSum([1, 7, 6, 2, 19, 23], 8)