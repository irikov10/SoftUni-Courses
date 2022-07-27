function partyTime(arr){
    let vipGuests = [];
    let regularGuests = [];
    let isParty = false;

    for(let el of arr){

        if(el === 'PARTY'){
            isParty = true;
            continue;
        }
        let firstChar = el[0];

        if(!isParty){
            if(firstChar >= 1 && firstChar <= 9){
                vipGuests.push(el);
            } else {
                regularGuests.push(el);
            }
        } else {
            if(firstChar >= 1 && firstChar <= 9){
                let indexOfVip = vipGuests.indexOf(el);
                vipGuests.splice(indexOfVip, 1);
            }else {
                let indexOfRegular = regularGuests.indexOf(el);
                regularGuests.splice(indexOfRegular, 1);
            }
        }
    }
    
    let sizeOfList = vipGuests.length + regularGuests.length;
    console.log(sizeOfList);
    for(let people of vipGuests){
        console.log(people)
    }
    
    for(let people of regularGuests){
        console.log(people)
    }
}
partyTime(['7IK9Yo0h',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc',
'tSzE5t0p',
'PARTY',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc'
]
)

console.log("------------------------------------------------")

partyTime(['m8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'xys2FYzn',
'MDzcM9ZK',
'PARTY',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'm8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ'
])
