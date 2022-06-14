function orders(product, quantity) {
    let res;

    switch(product){
        case "coffee": res = 1.50 * quantity;break;
        case "water": res = 1 * quantity;break;
        case "coke":  res = 1.40 * quantity;break;
        case "snacks":  res = 2 * quantity;break;
    }

    console.log(res.toFixed(2));
}
orders("water", 5)
orders("coffee", 2)