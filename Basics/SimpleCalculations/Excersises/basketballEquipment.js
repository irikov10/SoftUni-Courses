function basketballEquipment(input) {
    let yearTax = Number(input[0]);
    
    let basketballTrainers = yearTax - yearTax * (40 / 100);
    let basketballShirt = basketballTrainers - basketballTrainers * (20 / 100);
    let basketballBall = basketballShirt * 0.25;
    let basketballAcessories = basketballBall * 0.2;
    let totalPrice = yearTax + basketballTrainers + basketballShirt + basketballBall + basketballAcessories;
    console.log(totalPrice)
}
    basketballEquipment(["365"])