function finalCompetition(input){
    let dancers = Number(input[0]);
    let points = Number(input[1]);
    let season = input[2];
    let place = input[3];

    let wonPrice = dancers * points;
    let expenses = 0;

    if(place === "Bulgaria"){
        if(season === "summer"){
            expenses = wonPrice * 0.95;
        }else if(season === "winter"){
           expenses = wonPrice * 0.92;
        }
    }else if(place === "Abroad"){
        if(season === "summer"){
            wonPrice = wonPrice + (wonPrice * 0.50);
            expenses = wonPrice - (wonPrice * 0.10);
        }else if(season === "winter"){
            wonPrice = wonPrice + (wonPrice * 0.50);
            expenses = wonPrice -(wonPrice * 0.15);
        }
    }

    let moneyForCharity = expenses * 0.75;
    let leftMoney = expenses - moneyForCharity;
    let moneyForDancers = leftMoney / dancers;

    console.log(`Charity - ${moneyForCharity.toFixed(2)}`);
    console.log(`Money per dancer - ${moneyForDancers.toFixed(2)}`)
}
finalCompetition(["1",
"89.5",
"summer",
"Abroad"])



