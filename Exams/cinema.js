function cinema(input){
    let capacity = Number(input[0]);

    let priceForOneTicket = 5;
    let peopleInCinema = 0;
    let total = 0;
    let word;
    let cinemaIncome = 0;

    for(let i = 1; i < input.length; i++){
         ch = peopleInCinema.charAt(i);
         
            console.log(ch)

         total += priceForOneTicket * peopleInCinema
        if(peopleInCinema % 3 === 0){
            total -= 5;
        }

        if(word === "Movie time!"){
            break;
        }
    }
     let remainingSeats = capacity - peopleInCinema;
    cinemaIncome = total - remainingSeats
}
cinema(["60",
"10",
"6",
"3",
"20",
"15",
"Movie time!"])
