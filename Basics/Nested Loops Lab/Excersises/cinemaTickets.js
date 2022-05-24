function cinemaTickets(input){
    let index = 0;
    let command = input[index];
    let freeSpace = 0;
    let studentCounter = 0;
    let standardCounter = 0;
    let kidCounter = 0;
    let ticketCounter = 0;
    let total = 0;

    while(command !== "Finish"){
        let name = command;
        index++
        freeSpace = Number(input[index])
        index++;
        let type = input[index];

        while(type !== "End"){
            ticketCounter++
            switch(type){
                case "student": studentCounter++;break;
                case "standart": standardCounter++;break;
                case "kid": kidCounter++;break;
            }

            if(ticketCounter >= freeSpace){
                break;
            }
            type= input[++index];
        }
        total += ticketCounter;
        let resultForOneFilm = ticketCounter / freeSpace * 100;

        console.log(`${name} - ${resultForOneFilm.toFixed(2)}% full.`);
        command = input[++index];
    }
    console.log(`Total tickets: ${total}`);
    console.log(`${(studentCounter / total * 100).toFixed(2)}% student tickets.`);
    console.log(`${(standardCounter / total * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(kidCounter / total * 100).toFixed(2)}% kids tickets.`);

}
cinemaTickets(["Taxi",
"10",
"standard",
"kid",
"student",
"student",
"standard",
"standard",
"End"])