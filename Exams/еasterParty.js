function easterParty(input){
    let guestsCount = Number(input[0]);
    let cuvertForOnePerson = Number(input[1]);
    let budget = Number(input[2]);

    if(guestsCount >= 10 && guestsCount <= 15){
        cuvertForOnePerson = cuvertForOnePerson * 0.85;
    }else if(guestsCount > 15 && guestsCount <= 20){
        cuvertForOnePerson = cuvertForOnePerson * 0.80;
    }else if(guestsCount > 20){
        cuvertForOnePerson = cuvertForOnePerson * 0.75;
    }

    let cake = budget * 0.10;
    let totalPrice = guestsCount * cuvertForOnePerson + cake;
    
    if(budget >= totalPrice){
        console.log(`It is party time! ${(budget - totalPrice).toFixed(2)} leva left.`);
    }else{
        console.log(`No party! ${(totalPrice - budget).toFixed(2)} leva needed.`)
    }
}
easterParty(["8",
"25",
"340"])


