function addAndSubtract(arr){
    let originalArraySum = 0;
    let modifiedArraySum = 0;

    for(let i = 0; i < arr.length; i++){
        originalArraySum += arr[i]
        if(arr[i] % 2 === 0){
            arr[i] += i;
        }else {
            arr[i] -= i;
        }

       modifiedArraySum += arr[i]
    }
    console.log(arr);
    console.log(originalArraySum);
    console.log(modifiedArraySum)
}
addAndSubtract([5, 15, 23, 56, 35])