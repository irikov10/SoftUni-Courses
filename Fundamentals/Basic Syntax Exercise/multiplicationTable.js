function multiplicationTable(num){

    let res = 0;

    for(let i = 1; i <= 10; i++){
        res = `${num} X ${i} = ${num * i}`;
        console.log(res);
    }
}   
multiplicationTable(5)