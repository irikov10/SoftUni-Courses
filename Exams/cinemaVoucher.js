function cinemaVoucher(input){
    let voucherPrice = Number(input[0]);

    let price = 0;
    let firstLetter = "ABC".charCodeAt(0);
    let secondLetter = "ABC".charCodeAt(1); 

    for(let i = 1; i < input.length; i++){
        let word = input[i]
        if(word > 8){
            price = firstLetter + secondLetter
        }
    }
    console.log(price)
}
cinemaVoucher(["300",
"Captain Marvel",
"popcorn",
"Pepsi"])
