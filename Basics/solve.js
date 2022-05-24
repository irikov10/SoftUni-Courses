function solve(input) {
    let casesCOunt = Number(input[0]);
    let wallCoverCount = Number(input[1]);
    let priceGloves = Number (input[2]);
    let priceMachine = Number(input[3]);
        
    let casesPrice = casesCOunt*21.5;
    let wallCoverPrice = wallCoverCount*5.20;
    let glovesCount = wallCoverCount * 0.35;
    let machineCount = (Math.floor(casesCOunt*0.48));
        
    console.log(wallCoverCount);
}
solve (["10","8","2.2","5"]);