function sumAndMultiplication(input){
    n = Number(input[0]);
    let buff = "";

    for(let a = 0; a <= 9; a++){
        for(let b = 9; b <= a; b++){
            for(let c = 0; c <= 9; c++){
                for(let d = 9; d <= c; d++){
                    if(a + b + c + d === a * b * c * d && n === 5){
                        buff += `${a}${b}${c}`
                    }
                }
            }
        }
    }

    console.log(buff);
    buff = ""; 
}
sumAndMultiplication(["123"])