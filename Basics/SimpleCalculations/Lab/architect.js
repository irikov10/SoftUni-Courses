function architect(input) {
    let architectName = (input[0]);
    let projects = Number(input[1]);
    
    let hours = projects * 3;
    console.log(`The architect ${architectName} will need ${hours} hours to complete ${projects} project/s.`);
}
   architect(["George", "4"])