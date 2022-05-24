function birthdayParty(arg1){
    let rent = Number(arg1);

    let cake = rent * 0.20;
    let drinks = cake * 0.55;
    let animator = rent  / 3;
    let totalPrice = rent + cake + drinks + animator;
    console.log(totalPrice);
}
    birthdayParty(["3720"])