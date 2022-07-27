function softUniBarIncome(arr) {
    let text = arr.join(' ');
    let pattern = /%(?<name>[A-Z][a-z]+)%[^$%|.0-9]*<(?<product>\w+)>[^$%|.0-9]*\|(?<count>\d+)\|([^$%|.0-9]*)(?<price>\d+(\.\d+)?)\$/g;
    let totalSum = 0;
    let matches = pattern.exec(text);

    while(matches) {
        let price = matches.groups['count'] * matches.groups['price'];

        totalSum += price;

        console.log(`${matches.groups['name']}: ${matches.groups['product']} - ${price.toFixed(2)}`)
        matches = pattern.exec(text);
    }
    console.log(`Total income: ${totalSum.toFixed(2)}`)
}    
softUniBarIncome(['%InvalidName%<Croissant>|2|10.3$',
'%Peter%<Gum>1.3$',
'%Maria%<Cola>|1|2.4',
'%Valid%<Valid>valid|10|valid20$',
'end of shift']

)