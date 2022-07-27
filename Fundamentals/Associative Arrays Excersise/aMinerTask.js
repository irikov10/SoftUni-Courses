function aMinerTask(arr){
    let map = new Map();

    for(let i = 0; i < arr.length; i += 2){
        let resources = arr[i];
        let quantity = arr[i + 1];

        if(map.has(resources)){
            let oldValue = map.get(resources);
            map.set(resources, Number(quantity) + oldValue);
        } else {
            map.set(resources, Number(quantity))
        }
    }
    
    for(let [key, value] of map){
        console.log(`${key} -> ${value}`)
    }
}
aMinerTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
    ]
    )

console.log('-------------------------------------');


aMinerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
    ]
    )