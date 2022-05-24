function equalPairs(input){
   let pairs = Number(input.shift());
    let num = 0;

    for(let i = 1; i <= pairs; i++){
        num = Number(input[i]);
    }
    console.log(num)
}
equalPairs(["3","1","2","0","3","4","-1"])