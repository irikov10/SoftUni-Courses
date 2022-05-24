function  backToThePast(input){
    let i = 0
    let money = Number(input[i++]);
    let year = Number(input[i++]);

    let age = 17;

    for(let p = 1800; p <= year; p++){
        if(p % 2 === 0){
            age++
           money -= 12000
        }else{
            age++
           money -= 12000 + 50 * age;
        }

    }
        if (money >= 0) {
        console.log(`Yes! He will live a carefree life and will have ${money.toFixed(2)} dollars left.`);
        } else {
        console.log(`He will need ${Math.abs(money).toFixed(2)} dollars to survive.`);
    }
}
backToThePast(["50000", "1802"])