function furniture(arr) {
    let text = arr.join(' ');
    let pattern = />>(?<furniture>[A-Z][A-z]+)<<(?<price>[\d.]+)!(?<quantity>\d+)/g
    let totalPrice = 0; 
    let valid;
    let furnitureShop = [];

    while((valid = pattern.exec(text)) !== null) {
        let validFurniture = valid.groups['furniture'];
        let validPrice = Number(valid.groups['price']);
        let validQuantity = Number(valid.groups['quantity']);
        
        furnitureShop.push(validFurniture);

        totalPrice += validPrice * validQuantity;
    }

    console.log("Bought furniture:");
    furnitureShop.forEach(furniture => console.log(furniture))
    console.log(`Total money spend: ${totalPrice.toFixed(2)}`)
}
furniture(['>>Sofa<<312.23!3',
'>>TV<<300!5',
'>Invalid<<!5',
'Purchase']
)