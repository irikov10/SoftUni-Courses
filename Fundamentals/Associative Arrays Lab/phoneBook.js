function phoneBook(arr){
    let personInfo = {};

    for(let el of arr){
        let [name, phoneNumber] = el.split(' ');
        personInfo[name] = phoneNumber;
    }

    for(let [key, values] of Object.entries(personInfo)){
        console.log(`${key} -> ${values}`)
    }
}
phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']
)