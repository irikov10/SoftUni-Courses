function perfectNumber(num){
    let divisors = 1

    for(let i = 2; i < num; i++){

        if(num % i === 0){
            divisors += i
        }
    }

    if(divisors === num){
        console.log("We have a perfect number!")
    } else {
        console.log("It's not so perfect.")
    }
}
perfectNumber(6)