function maidenParty(input){
    let m = Number(input[0]);
    let n = Number(input[1]);
    let s = Number(input[2]);
    let str ="";
    for(let i = n; i >= m; i--){
        if (i%2===0 && i%3===0 ){
            if( i === s){
                break;
            }
            str += `${i} `
        }
    }
    console.log(str);
}
maidenParty(["1",
"36",
"12"])