function movieDay(input){
    let time = Number(input[0]);
    let scenes = Number(input[1]);
    let continuation = Number(input[2]);

    let preparation = time * 0.15;
    let timeForShooting = continuation * scenes;
    let totalTime = preparation + timeForShooting; 

    if(time > totalTime){
        console.log(`You managed to finish the movie on time! You have ${Math.ceil(time - totalTime)} minutes left!`)
    }else{
        console.log(`Time is up! To complete the movie you need ${Math.ceil(totalTime - time)} minutes.`)
    }
}
movieDay(["135",
"5",
"20"])
