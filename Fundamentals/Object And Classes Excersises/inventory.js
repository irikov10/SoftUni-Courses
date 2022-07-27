function inventory(arr){
    let heroes = [];
    arr.forEach(el => {
        let [name, level, items] = el.split(' / ');
       
        let hero = {
            name:name,
            level:Number(level),
            items:items
        }
        heroes.push(hero);
    })

    let sorted = heroes.sort((a,b) => {
        return a.level - b.level
    })

    for(let i of sorted){
        console.log(`Hero: ${i.name}`);
        console.log(`level => ${i.level}`);
        console.log(`items => ${i.items}`);
    }
}
inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]
    )