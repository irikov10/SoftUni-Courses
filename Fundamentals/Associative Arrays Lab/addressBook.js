function addressBook(arr){
    let personInfo = {};

    for(let el of arr){
        let [name, address] = el.split(':');

        personInfo[name] = address;
    }
    let entries = Object.entries(personInfo);
    let sortedEntries = entries.sort((a,b) => a[0].localeCompare(b[0]))
   
    for (let [key,value] of sortedEntries){
        console.log(`${key} -> ${value}`)
    }
}
addressBook(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']
)