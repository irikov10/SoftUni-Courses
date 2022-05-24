function footballResult(input){
    let resultFromFirstGame = input[0];
    let resultFromSecondGame = input[1];
    let resultFromThirdGame = input[2];
    let n = 3;

    let matchesWon = 0;
    let matchesDraw = 0;
    let matchesLost = 0;

    let teamA1 = Number(resultFromFirstGame[0]);
    let teamB1= Number(resultFromFirstGame[2]);

    if(teamA1 > teamB1){
        matchesWon++
    }else if(teamA1 < teamB1){
        matchesLost++
    }else{
        matchesDraw++
    }

    let teamA2 = Number(resultFromSecondGame[0]);
    let teamB2 = Number(resultFromSecondGame[2]);

    if(teamA2 > teamB2){
        matchesWon++
    }else if(teamA2 < teamB2){
        matchesLost++
    }else{
        matchesDraw++
    }

    let teamA3 = Number(resultFromThirdGame[0]);
    let teamB3 = Number(resultFromThirdGame[2]);

    if(teamA3 > teamB3){
        matchesWon++
    }else if(teamA3 < teamB3){
        matchesLost++
    }else{
        matchesDraw++
    }


    console.log(`Team won ${matchesWon} games.`);
    console.log(`Team lost ${matchesLost} games.`);
    console.log(`Drawn games: ${matchesDraw}`)
}
footballResult(["3:1",
"0:2",
"0:0"])