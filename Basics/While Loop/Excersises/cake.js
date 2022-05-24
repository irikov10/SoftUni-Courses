function cake(input){
    let cakeLength = Number(input[0]);
    let cakeWidth = Number(input[1]);
    let index = 2;
    let command = input[index];

    let cakePieces = cakeLength * cakeWidth;
    let takenPieces = 0;

    while(command !== "STOP"){
        takenPieces = Number(command);
        cakePieces -= takenPieces;

        if(cakePieces < 0 ){
            console.log(`No more cake left! You need ${Math.abs(cakePieces)} pieces more.`);
            break;
        }
        index++
        command = input[index]
    }

    if(cakePieces >= 0){
        console.log(`${cakePieces} pieces are left.`);
    }
}
cake(["10", "2", "2", "4", "6", "STOP"])