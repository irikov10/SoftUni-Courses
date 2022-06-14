function palindromeIntegers(arr){
    for(let i of arr){
        let current = String(i);
        let reversed = String(i).split('').reverse().join('');

        if(current === reversed){
            console.log(true);
        }else {
            console.log(false)
        }

    }
}   
palindromeIntegers([123,323,421,121])