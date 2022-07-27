function storage(arr){
    let map = new Map();

    for(let el of arr){
        let [product, quantity] = el.split(' ');

        if(map.has(product)){
            let oldQuantity = map.get(product);
            map.set(product, oldQuantity + Number(quantity));
        } else {
            map.set(product,Number(quantity));
        }
    }
  
    for(let [key,value] of map){
        console.log(`${key} -> ${value}`)
    }
}
storage(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']
)