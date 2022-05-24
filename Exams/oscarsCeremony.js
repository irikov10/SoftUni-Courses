function oscarsCeremony(input){
    let loan = Number(input[0]);

    let statues = loan * 0.70;
    let catering = statues * 0.85;
    let sounding = catering * 0.5;

    let sum = loan + statues + catering + sounding;
    console.log(sum.toFixed(2))
}
oscarsCeremony(["5555"])