function tennisEquipment(input){
    let priceForOneRacket = Number(input[0]);
    let amountOfTennisRackets = Number(input[1]);
    let amoutOfTrainers = Number(input[2]);

    let priceForPairTrainers = priceForOneRacket / 6;
    let tennisRacketPrice = amountOfTennisRackets * priceForOneRacket;
    let priceForTrainers = amoutOfTrainers * priceForPairTrainers;
    let otherEquipment = (tennisRacketPrice + priceForTrainers) * 0.2;
    let totalPrice = tennisRacketPrice + priceForTrainers + otherEquipment;
    let priceForDjokovic = Math.floor(totalPrice / 8);
    let priceForSponsor = Math.ceil(totalPrice * 7/8);
    console.log(`Price to be paid by Djokovic ${priceForDjokovic}`);
    console.log(`Price to be paid by sponsors ${priceForSponsor}`);
}
tennisEquipment(["850", "4", "2"])