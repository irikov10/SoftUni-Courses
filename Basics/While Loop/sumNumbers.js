function sumNumbers(input){
    let index = 0;
    let num = Number(input[index]);
    index++;
    let total = 0;

    while(total < num){

        let n = Number(input[index]);
        index++

        total += n;
    }
    console.log(total)
}
sumNumbers(["100",
"10",
"20",
"30",
"40"])
