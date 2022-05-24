function fruitMarket(arg1, arg2, arg3, arg4, arg5){
    let strawberriesPrice = Number(arg1);
    let bananaQuantity = Number(arg2);
    let orangeQuantity = Number(arg3);
    let rasberriesQuantity = Number(arg4);
    let strawberriesQuantity = Number(arg5);

    let rasberriesPrice = strawberriesPrice * 0.50;
    let orangePrice = rasberriesPrice * 0.60;
    let bananaPrice = rasberriesPrice * 0.20;
    let r = rasberriesQuantity * rasberriesPrice;
    let o = orangePrice * orangeQuantity;
    let b = bananaPrice * bananaQuantity;
    let s = strawberriesPrice * strawberriesQuantity;
    let sum = r + o + b + s;
    console.log(sum.toFixed(2));
}
fruitMarket(["63.5", "3.57", "6.35", "8.15", "2.5"])