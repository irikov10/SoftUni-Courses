function employees(arr){
    let list = {};

    for(let el of arr){
        let name = el;
        let personalNum = name.length;
        list.name = name;
        list.personalNum = personalNum;
        console.log(`Name: ${name} -- Personal Number: ${personalNum}`)
    }
}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    )